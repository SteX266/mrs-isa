import axios from "axios";
import { useState, useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Stack,
  Table,
} from "react-bootstrap";

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
          dateFrom: new Date(
            period.dateFrom[0],
            period.dateFrom[1],
            period.dateFrom[2],
            period.dateFrom[3],
            period.dateFrom[4]
          ),
          dateTo: new Date(
            period.dateTo[0],
            period.dateTo[1],
            period.dateTo[2],
            period.dateTo[3],
            period.dateTo[4]
          ),
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
      <Table>
        <thead>
          <th>Date from:</th>
          <th>Date to:</th>
        </thead>
        <tbody></tbody>
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
    console.log(periods);
    toAdd.forEach((element) => {
      periods.push(element);
    });
    console.log(periods);
    setAvailabilityPeriod(periods);
    setShow(false);
    setToAdd([]);
    console.log(availabilityPeriod);
    console.log(periods);
  }
  function addPeriod() {
    let toadds = toAdd;
    toadds.push(period);
    setToAdd(toadds);
    setPeriod({ startDate: "", endDate: "" });
  }
  function saveChanges() {}
  function cancel() {}
  return (
    <Container style={{ width: "60%" }}>
      {periodList}
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <Button variant="outline-dark" onClick={cancel}>
              Cancel
            </Button>
          </Col>
          <Col>
            <Button onClick={open} variant="outline-dark">
              Add period
            </Button>
          </Col>

          <Col>
            <Button variant="outline-dark" onClick={saveChanges}>
              Save changes
            </Button>
          </Col>
        </Row>
      </Container>
      <Stack direction="vertical" gap={1}></Stack>
      <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>Add availability period</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack direction="vertical" gap={1}>
            <Form.Label>Start date</Form.Label>
            <Form.Control
              min={new Date()}
              type="date"
              onChange={onChange}
              name="dateFrom"
            ></Form.Control>
            <Form.Label>End date</Form.Label>
            <Form.Control
              min={new Date()}
              type="date"
              onChange={onChange}
              name="dateTo"
            ></Form.Control>
          </Stack>
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
