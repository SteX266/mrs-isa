import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";

export default function EditVesselDetails({ serviceID, type }) {
  const [details, setDetails] = useState({
    maxSpeed: "",
    engineNumber: "",
    enginePower: "",
  });
  function getDetailsByID() {
    const token = JSON.parse(localStorage.getItem("userToken"));
    let url = "http://localhost:8080/entity/getDetailAdventure";
    console.log(type);
    switch (type) {
      case "adventure":
        url = "http://localhost:8080/entity/getDetailAdventure";
        console.log("NESTO");
        break;
      case "vessel":
        url = "http://localhost:8080/entity/getDetailVessel";
        console.log("NESTO");
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
      data = {
        maxSpeed: res.data.maxSpeed,
        engineNumber: res.data.engineNumber,
        enginePower: res.data.enginePower,
      };
      setDetails(data);
    });
  }
  useEffect(() => {
    getDetailsByID();
  }, []);
  function onChange(event) {
    setDetails({ ...details, [event.target.name]: event.target.value });
    console.log(details);
  }
  return (
    <Container style={{ width: "50%" }}>
      <Stack direction="vertical" gap={1}>
        <Form.Label>Max speed</Form.Label>
        <Form.Control
          type="number"
          value={details.maxSpeed}
          name="maxSpeed"
          onChange={onChange}
          min={0}
        />
        <Form.Label>Engine number</Form.Label>
        <Form.Control
          type="number"
          value={details.engineNumber}
          onChange={onChange}
          name="engineNumber"
          min={0}
        ></Form.Control>
        <Form.Label>Engine power</Form.Label>
        <Form.Control
          type="number"
          value={details.enginePower}
          onChange={onChange}
          name="enginePower"
          min={0}
        ></Form.Control>
        <Container style={{ width: "90%" }}>
          <Row className="justify-content-md-center">
            <Col>
              <Button variant="outline-dark">Cancel</Button>
            </Col>
            <Col></Col>
            <Col>
              <Button variant="outline-dark">Save changes</Button>
            </Col>
          </Row>
        </Container>
      </Stack>
    </Container>
  );
}
