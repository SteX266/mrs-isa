import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Container,
  Navbar,
  Table,
  Form,
  FormControl,
  Button,
  Dropdown,
} from "react-bootstrap";

export default function ClientReservationsTable(props) {
  const [sortedByPrice, setSortedByPrice] = useState(false);
  const [sortedByDate, setSortedByDate] = useState(false);
  const [sortedByDuration, setSortedByDuration] = useState(false);

  const [upcomingReservations, setUpcomingReservations] = useState([]);
  const [searchUpcomingReservations, setSearchUpcomingReservations] = useState(
    []
  );

  const headers = [
    "Type",
    "Name",
    "Location",
    "Start of reservation",
    "End of reservation",
    "Price",
    "Owner",
    "Status",
  ];

  useEffect(() => {
    getReservations(props.clientEmail);
  }, []);
  function getReservations(clientEmail) {
    const token = JSON.parse(localStorage.getItem("userToken"));
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token.accessToken,
      },
      params: {
        email: clientEmail,
      },
    };

    axios
      .get(
        "http://localhost:8080/reservation/getClientReservations",
        requestOptions
      )
      .then((res) => {
        let future = [];
        let past = [];

        var today = new Date();
        var date =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate();
        var time =
          today.getHours() +
          ":" +
          today.getMinutes() +
          ":" +
          today.getSeconds();
        var dateTime = date + " " + time;

        var todayDate = new Date(dateTime);

        res.data.forEach((element) => {
          var startDate = new Date(element.startDate);
          if (startDate < todayDate) {
            element.status = "EXPIRED";
            element.startDate = element.startDate.replace("T", " ");
            element.endDate = element.endDate.replace("T", " ");
            past.push(element);
          } else {
            element.startDate = element.startDate.replace("T", " ");
            element.endDate = element.endDate.replace("T", " ");
            future.push(element);
          }
        });
        setUpcomingReservations(future);
        setSearchUpcomingReservations(future);
      });
  }
  function onSearchFieldChange(event) {

    const searchResult = [];
    const searchParam = event.target.value.toLowerCase();
    for (let index = 0; index < upcomingReservations.length; index++) {
      const reservation = upcomingReservations[index];
      if (
        reservation.entityName.toLowerCase().includes(searchParam) ||
        reservation.owner.toLowerCase().includes(searchParam) ||
        reservation.location.toLowerCase().includes(searchParam)
      ) {
        searchResult.push(reservation);
      }
    }
    setSearchUpcomingReservations(searchResult);
  }


  function filterUpcomingEntities(event) {
    var filterType = event.target.name;
    if (filterType === "SHOW_ALL") {
      setSearchUpcomingReservations(upcomingReservations);
      return;
    } else {
      const filterResult = [];

      for (let index = 0; index < upcomingReservations.length; index++) {
        const reservation = upcomingReservations[index];
        if (reservation.entityType == filterType) {
          filterResult.push(reservation);
        }
      }

      setSearchUpcomingReservations(filterResult);
    }
  }

  function sortReservations(event) {
    var sortParam = event.target.name;
    const sortResult = [];
    for (let index = 0; index < searchUpcomingReservations.length; index++) {
      const reservation = searchUpcomingReservations[index];
      sortResult.push(reservation);
    }

    if (sortParam == "PRICE") {
      if (sortedByPrice) {
        sortResult.reverse();
      } else {
        sortResult.sort((a, b) => {
          return a.fee - b.fee;
        });
        setSortedByPrice(true);
        setSortedByDuration(false);
        setSortedByDate(false);
      }
    } else if (sortParam == "START_DATE") {
      if (sortedByDate) {
        sortResult.reverse();
      } else {
        sortResult.sort((a, b) => {
          return a.startDate < b.startDate;
        });
        setSortedByPrice(false);
        setSortedByDuration(false);
        setSortedByDate(true);
      }
    } else if (sortParam == "DURATION") {
      if (sortedByDuration) {
        sortResult.reverse();
      } else {
        sortResult.sort((a, b) => {
          const startDateA = new Date(a.startDate);
          const endDateA = new Date(a.endDate);
          const resultA = Math.abs(startDateA - endDateA);

          const startDateB = new Date(b.startDate);
          const endDateB = new Date(b.endDate);
          const resultB = Math.abs(startDateB - endDateB);

          return resultA - resultB;
        });
        setSortedByPrice(false);
        setSortedByDuration(true);
        setSortedByDate(false);
      }
    }

    setSearchUpcomingReservations(sortResult);
  }

  return (
    <Container style={{ maxWidth: "95%" }}>
      <Navbar collapseOnSelect className="rounded border border-dark" style={{marginTop:"15px"}}>
        <Container>
          <Navbar.Text className="text-dark">
            {" "}
            Upcoming reservations{" "}
          </Navbar.Text>
        </Container>

        <Dropdown style={{ padding: "5px" }}>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Entities
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              as="button"
              onClick={filterUpcomingEntities}
              name="SHOW_ALL"
            >
              Show all
            </Dropdown.Item>
            <Dropdown.Item
              as="button"
              onClick={filterUpcomingEntities}
              name="VACATION"
            >
              Vacations
            </Dropdown.Item>
            <Dropdown.Item
              as="button"
              onClick={filterUpcomingEntities}
              name="VESSEL"
            >
              Vessels
            </Dropdown.Item>
            <Dropdown.Item
              as="button"
              onClick={filterUpcomingEntities}
              name="ADVENTURE"
            >
              Adventures
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown style={{ padding: "5px" }}>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Sort by
          </Dropdown.Toggle>

          <Dropdown.Menu>
          <Dropdown.Item
              as="button"
              onClick={sortReservations}
              name="START_DATE"
            >
              Start date
            </Dropdown.Item>
            <Dropdown.Item
              as="button"
              onClick={sortReservations}
              name="PRICE"
            >
              Price
            </Dropdown.Item>
            <Dropdown.Item
              as="button"
              onClick={sortReservations}
              name="DURATION"
            >
              Duration
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <SearchForm onSearchFieldChange={onSearchFieldChange} />
      </Navbar>
      <Table striped hover className="rounded" style={{ paddingTop: "125px" }}>
        <TableHeader headers={headers} />
        <TableBody reservations={searchUpcomingReservations} />
      </Table>


    </Container>
  );
}

function SearchForm(props) {
  return (
    <Form>
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={props.onSearchFieldChange}
      />
    </Form>
  );
}

function TableHeader(props) {
  return (
    <thead>
      <tr>
        {props.headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
  );
}

function TableBody(props) {
  return (
    <tbody>
      {props.reservations.map((reservation) => (
        <Reservation key={reservation.id} reservation={reservation} />
      ))}
    </tbody>
  );
}

function Reservation(props) {
  const [reservation, setReservation] = useState(props.reservation);
  const [button, setButton] = useState(getButton());

  function cancelReservation() {
    let newReservation = reservation;
    newReservation.status = "CANCELED";
    setReservation(newReservation);
    setButton(getButton());
    saveReservation(newReservation.id);
  }

  function saveReservation(reservationId) {
    const token = JSON.parse(localStorage.getItem("userToken"));
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token.accessToken,
      },
      params: {
        entityId: reservationId,
      },
    };

    axios.get(
      "http://localhost:8080/reservation/cancelReservation",
      requestOptions
    );
  }
  function getButton() {
    if (reservation.status == "APPROVED") {
      return (
        <Button onClick={cancelReservation} variant="outline-dark">
          Cancel reservation
        </Button>
      );
    } else if (reservation.status == "EXPIRED") {
      return (
        <>
          <Button
            onClick={cancelReservation}
            variant="outline-dark"
            style={{ marginRight: "5px" }}
          >
            Review
          </Button>
          <Button onClick={cancelReservation} variant="outline-dark">
            Complaint
          </Button>
        </>
      );
    } else {
      return <></>;
    }
  }

  return (
    <tr id={reservation.id}>
      <td>{reservation.entityType}</td>
      <td> {reservation.entityName}</td>
      <td>{reservation.location}</td>
      <td>{reservation.startDate}</td>
      <td>{reservation.endDate}</td>
      <td>{reservation.fee}$</td>
      <td>{reservation.owner}</td>
      <td>{reservation.status}</td>
      <td>{button}</td>
    </tr>
  );
}
