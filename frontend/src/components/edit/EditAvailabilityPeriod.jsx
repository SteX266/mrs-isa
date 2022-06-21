import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Modal,
  Navbar,
  Stack,
  Table,
} from "react-bootstrap";
import toast from "react-hot-toast";

export default function EditAvailabilityPeriod({ serviceID, type }) {
  const [availabilityPeriod, setAvailabilityPeriod] = useState([]);
  const [toAdd, setToAdd] = useState([]);
  const [period, setPeriod] = useState({
    dateFrom: "",
    dateTo: "",
  });
  const [periodList, setPeriodList] = useState(<></>);
  const [show, setShow] = useState(false);
  function getPeriodByID() {
    const token = JSON.parse(localStorage.getItem("userToken"));
    let url = "http://localhost:8080/entity/getDetailAdventure";
    switch (type) {
      case "adventure":
        url = "http://localhost:8080/entity/getDetailAdventure";
        break;
      case "vessel":
        url = "http://localhost:8080/entity/getDetailVessel";
        break;
      case "listing":
        url = "http://localhost:8080/entity/getDetailVacation";
        break;
      default:
        break;
    }
    let data;
    const requestOptions = {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: "Bearer " + token.accessToken,
      },
      params: {
        id: serviceID,
      },
    };
    axios.get(url, requestOptions).then((res) => {
      console.log(res.data);
      data = res.data.availabilityPeriod.map((period) => {
        return {
          dateFrom: new Date(period.dateFrom),
          dateTo: new Date(period.dateTo),
        };
      });
      setAvailabilityPeriod(data);
    });
  }
  useEffect(() => {
    getPeriodByID();
  }, []);
  useEffect(() => {
    setPeriodList(createPeriodList());
  });
  function createPeriodList() {
    return (
      <Table striped bordered hover>
        <thead>
          <th>Date from:</th>
          <th>Date to:</th>
        </thead>
        <tbody>
          {availabilityPeriod.map((period, index) => {
            return (
              <tr key={index}>
                <td>{period.dateFrom.toLocaleString()}</td>
                <td>{period.dateTo.toLocaleString()}</td>
                <td>
                  <Button variant="outline-dark" onClick={remove} name={index}>
                    Remove
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
  function remove(event) {
    const allperiods = availabilityPeriod;
    const index = event.target.name;
    console.log(index);
    if (index > -1) allperiods.splice(index, 1);
    setAvailabilityPeriod(allperiods);
    setPeriodList(createPeriodList());
  }

  function onChange(event) {
    setPeriod({
      ...period,
      [event.target.name]: event.target.value,
    });
  }

  function open() {
    setShow(true);
  }
  function close() {
    setShow(false);
  }

  function save() {
    let periods = availabilityPeriod;
    toAdd.forEach((element) => {
      periods.push(element);
    });
    setAvailabilityPeriod(periods);
    setShow(false);
    setToAdd([]);
  }

  function addPeriod() {
    let toadds = toAdd;
    toadds.push(period);
    setToAdd(toadds);
    setPeriod({ dateFrom: "", dateTo: "" });
  }

  function saveChanges() {
    const token = JSON.parse(localStorage.getItem("userToken"));
    const data = {
      availabilityPeriodDTOS: availabilityPeriod,
      serviceID: serviceID,
    };
    const url = "http://localhost:8080/entity/editAvailabilityPeriod";
    const requestOptions = {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: "Bearer " + token.accessToken,
      },
    };
    console.log(data);
    axios.post(url, data, requestOptions).then((res) => {
      if (res.status == 200) {
        toast.success(res.data);
        console.log(res.data);
      } else toast.error(res.data);
    });
  }
  // eslint-disable-next-line react/display-name
  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button className="btn btn-warning" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <Container style={{ width: "80%" }}>
      <Navbar collapseOnSelect className="rounded border border-dark">
        <Container>
          <Button variant="outline-dark" onClick={saveChanges}>
            Save changes
          </Button>
          <Button onClick={open} variant="outline-dark" className="ms-auto">
            Add period
          </Button>
        </Container>
      </Navbar>
      {periodList}
      <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>Add availability period</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack direction="vertical" gap={1}></Stack>
        </Modal.Body>
        <Modal.Footer>
          <Stack direction="horizontal" gap={3}>
            <Button variant="outline-dark" onClick={close}>
              Cancel
            </Button>
            <Button variant="outline-dark" onClick={addPeriod}>
              Add Period
            </Button>
            <Button variant="outline-dark" onClick={save}>
              Save Changes
            </Button>
          </Stack>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
