import React from "react";
import {
  Container,
  Navbar,
  Form,
  FormControl,
} from "react-bootstrap";
import axios from "axios";
import RegistrationRequestTable from "./RegistrationRequestTable";
import Dialog from "../modals/Dialog";

export default function RegistrationRequest() {
  const [requests, setRequests] = React.useState([]);

  const [searchRequests, setSearchRequests] = React.useState([]);

  const [showTaskDialog, setShowTaskDialog] = React.useState(false);

  React.useEffect(() => {
    let data = getRequestsData();
    console.log(data);
    setRequests([
      {
        id: 1,
        email: "mama@gmail.com",
        type: "instructor",
        description: "hahah lool",
      },
      {
        id: 2,
        email: "baba@gmail.com",
        type: "host",
        description:
          "dadadad stvaaaaaaaasrno mi treba ovaj proooooofil mooolim vaaaas",
      },
      {
        id: 3,
        email: "tata@gmail.com",
        type: "instructor",
        description: "hahah lool",
      },
    ]);
    setSearchRequests([
      {
        id: 1,
        email: "mama@gmail.com",
        type: "instructor",
        description: "hahah lool",
      },
      {
        id: 2,
        email: "baba@gmail.com",
        type: "host",
        description:
          "dadadad stvaaaaaaaasrno mi treba ovaj proooooofil mooolim vaaaas",
      },
      {
        id: 3,
        email: "tata@gmail.com",
        type: "instructor",
        description: "hahah lool",
      },
    ]);
  }, []);

  async function getRequestsData() {
    let path = "http://localhost:8080/api/entity/getReservationRequests";
    const res = axios.get(path, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return res.data;
  }

  function searchFieldChanged(event) {
    const filtering = [];
    const searchParam = event.target.value.toLowerCase();
    for (let index = 0; index < requests.length; index++) {
      const service = requests[index];
      if (service.email.toLowerCase().includes(searchParam)) {
        filtering.push(service);
      }
    }
    setSearchRequests(filtering);
  }
  let len = searchRequests.length;
  if (len == undefined) {
    len = 0;
  }

  function onAccept(id) {
    const filtering = [];
    for (let index = 0; index < requests.length; index++) {
      const r = requests[index];
      if (r.id !== id) {
        filtering.push(r);
      }
    }
    setSearchRequests(filtering);
    setRequests(filtering);
  }
  function onDecline(id) {
    onAccept(id);
  }

  function confirmDecline() {
    console.log("declined");
  }
  function cancelDecline() {
    setShowTaskDialog(true);
  }

  return (
    <>
      <div style={{ padding: "55px" }}>
        <Container
          style={({ maxWidth: "80%" }, { padding: "20px" })}
          className="rounded border border-primary"
        >
          <Navbar collapseOnSelect className="rounded border border-primary">
            <Container>
              <Navbar.Text className="text-Primary">
                {len + " Requests"}
              </Navbar.Text>
            </Container>

            <Container>
              <SearchForm searchFieldChanged={searchFieldChanged} />
            </Container>
          </Navbar>
          <RegistrationRequestTable
            onAccept={onAccept}
            onDecline={onDecline}
            requests={searchRequests}
          ></RegistrationRequestTable>
        </Container>
      </div>
      <Dialog
        show={showTaskDialog}
        title="Decline Request?"
        description="Why are you declining this request?"
        confirmed={confirmDecline}
        canceled={cancelDecline}
      />
    </>
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
        onChange={props.searchFieldChanged}
      />
    </Form>
  );
}
