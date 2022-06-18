import axios from "axios";
import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Stack,
} from "react-bootstrap";

function EditAmenities({ serviceID, type }) {
  const [amenities, setAmenities] = useState([]);
  const allAmenities = ["WIFI", "KENJARA", "PISARA"];
  const [newAmenity, setNewAmenity] = useState();
  const [amenityList, setAmenityList] = useState(<></>);
  const [show, setShow] = useState(false);

  function getAmenitiesByID() {
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
      data = res.data.amenities;
      setAmenities(data);
      console.log(data);
    });
  }
  function createAmenityList() {
    return (
      <Container>
        {amenities.map((amenity) => {
          return <p key={amenity}>{amenity}</p>;
        })}
      </Container>
    );
  }
  useEffect(() => {
    getAmenitiesByID();
  }, []);

  useEffect(() => {
    setAmenityList(createAmenityList());
  }, [amenities]);

  function open() {
    setShow(true);
  }

  function close() {
    setShow(false);
  }
  function onChange(event) {
    console.log(event.target.value);
    if (event.target.value == "") return;
    setNewAmenity(event.target.value);
  }
  function save() {
    console.log("ALO KURCU USRANi");
    let newamenities = amenities;
    if (!newAmenity) return;
    newamenities.push(newAmenity);
    setAmenities(newamenities);
    setShow(false);
    setNewAmenity("");
    setAmenityList(createAmenityList());
    console.log(amenities);
  }
  function saveChanges() {}
  function cancel() {}
  return (
    <Container style={{ width: "60%" }}>
      {amenityList}
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <Button variant="outline-dark" onClick={cancel}>
              Cancel
            </Button>
          </Col>
          <Col>
            <Button onClick={open} variant="outline-dark">
              Add amenity
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
          <Modal.Title>Upload photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack direction="vertical" gap={1}>
            <Form.Select onChange={onChange}>
              <option value="Amenities">Amenities</option>
              {allAmenities.map((amenity) => {
                return (
                  <option value={amenity} key={amenity}>
                    {amenity}
                  </option>
                );
              })}
            </Form.Select>
          </Stack>
        </Modal.Body>
        <Modal.Footer>
          <Stack direction="horizontal" gap={3}>
            <Button variant="outline-dark" onClick={close}>
              Cancel
            </Button>
            <Button variant="outline-dark" onClick={save}>
              Add amenity
            </Button>
          </Stack>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default EditAmenities;
