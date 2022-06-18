import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";

export default function EditGeneral({ serviceID, type }) {
  const [general, setGeneral] = useState({
    name: "",
    description: "",
    rulesOfConduct: "",
    rentalFee: "",
    cancellationFee: "",
    capacity: "",
  });
  function getGeneralByID() {
    const token = JSON.parse(localStorage.getItem("userToken"));
    let url = "http://localhost:8080/entity/getDetailAdventure";
    console.log(type);
    switch (type) {
      case "adventure":
        url = "http://localhost:8080/entity/getDetailAdventure";
        break;
      case "vessel":
        url = "http://localhost:8080/entity/getDetailVessel";
        break;
      case "listing":
        console.log("Usao");
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
        name: res.data.name,
        description: res.data.description,
        rulesOfConduct: res.data.rulesOfConduct,
        rentalFee: res.data.price,
        cancellationFee: res.data.cancellationFee,
        capacity: res.data.capacity,
      };
      setGeneral(data);
    });
  }
  useEffect(() => {
    getGeneralByID();
  }, []);
  function onChange(event) {
    setGeneral({ ...general, [event.target.name]: event.target.value });
    console.log(general);
  }
  return (
    <Container style={{ width: "50%" }}>
      <Stack direction="vertical" gap={1}>
        <Form.Label>Service Name</Form.Label>
        <Form.Control
          type="text"
          value={general.name}
          onChange={onChange}
          name="name"
        ></Form.Control>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          value={general.description}
          onChange={onChange}
          name="description"
        ></Form.Control>
        <Form.Label>Rules of conduct</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          value={general.rulesOfConduct}
          onChange={onChange}
          name="rulesOfConduct"
        ></Form.Control>
        <Form.Label>Capacity</Form.Label>
        <Form.Control
          type="number"
          value={general.capacity}
          name="capacity"
          onChange={onChange}
          min={0}
          max={20}
        />
        <Form.Label>Rental fee</Form.Label>
        <Form.Control
          type="number"
          value={general.rentalFee}
          name="rentalFee"
          onChange={onChange}
          min={0}
          max={10000}
          step={5}
        />
        <Form.Label>Cancellation fee</Form.Label>
        <Form.Control
          type="number"
          value={general.cancellationFee}
          name="cancellationFee"
          onChange={onChange}
          min={0}
          max={10000}
          step={5}
        />
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
