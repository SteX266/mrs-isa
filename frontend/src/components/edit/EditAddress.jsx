import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";

export default function EditAddress({ serviceID, type }) {
  const [address, setAddress] = useState({
    streetName: "",
    streetNumber: "",
    city: "",
    country: "",
  });
  function getAddressByID() {
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
      data = {
        streetName: res.data.streetName,
        streetNumber: res.data.streetNumber,
        city: res.data.city,
        country: res.data.country,
      };
      setAddress(data);
    });
  }
  useEffect(() => {
    getAddressByID();
  }, []);

  function onChange(event) {
    setAddress({ ...address, [event.target.name]: event.target.value });
    console.log(address);
  }
  return (
    <Container style={{ width: "50%" }}>
      <Stack direction="vertical" gap={1}>
        <Form.Label>Street name</Form.Label>
        <Form.Control
          type="text"
          value={address.streetName}
          onChange={onChange}
          name="streetName"
        ></Form.Control>
        <Form.Label>Street number</Form.Label>
        <Form.Control
          type="number"
          value={address.streetNumber}
          name="streetNumber"
          onChange={onChange}
          min={0}
        />
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          value={address.city}
          onChange={onChange}
          name="city"
        ></Form.Control>
        <Form.Label>Country</Form.Label>
        <Form.Control
          type="text"
          value={address.country}
          onChange={onChange}
          name="country"
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
