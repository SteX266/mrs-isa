import { useEffect } from "react";
import { useState } from "react";
import { Card, Button, Stack } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router";

function RatingsReport({ type }) {
  const [averageRating, setAverageRating] = useState(0);
  const [bestVacation, setBestVacation] = useState({
    id: "",
    photo: "",
    name: "",
    description: "",
    rating: "",
  });
  const navigate = useNavigate();
  const [worstVacation, setWorstVacation] = useState({
    id: "",
    photo: "",
    name: "",
    description: "",
    rating: "",
  });
  useEffect(() => {
    getAverageRating();
    getBestVacation();
    getWorstVacation();
  }, []);

  function getAverageRating() {
    const token = JSON.parse(localStorage.getItem("userToken"));
    const path = "http://localhost:8080/entity/getAverageRating";
    let rating;
    const requestOptions = {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: "Bearer " + token.accessToken,
      },
    };
    axios.get(path, requestOptions).then((res) => {
      rating = res.data.averageRating;
      setAverageRating(rating);
    });
  }
  function getBestVacation() {
    const token = JSON.parse(localStorage.getItem("userToken"));
    const path = "http://localhost:8080/entity/getBestRated";
    let data;
    const requestOptions = {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + token.accessToken,
      },
    };
    axios.get(path, requestOptions).then((res) => {
      data = {
        id: res.data.id,
        name: res.data.name,
        photo: res.data.photo,
        description: res.data.description,
        rating: res.data.rating,
      };
      setBestVacation(data);
    });
  }
  function getWorstVacation() {
    const token = JSON.parse(localStorage.getItem("userToken"));
    const path = "http://localhost:8080/entity/getWorstRated";
    let data;
    const requestOptions = {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: "Bearer " + token.accessToken,
      },
    };
    axios.get(path, requestOptions).then((res) => {
      data = {
        id: res.data.id,
        name: res.data.name,
        photo: res.data.photo,
        description: res.data.description,
        rating: res.data.rating,
      };
      setWorstVacation(data);
    });
  }
  return (
    <>
      <p>
        Average {type} Rating: {averageRating}
      </p>
      <p>
        Best Rated{type}: {averageRating}
      </p>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={bestVacation.photo} />
        <Card.Body>
          <Card.Title>{bestVacation.name}</Card.Title>
          <Card.Text>{bestVacation.description}</Card.Text>
          <Stack direction="horizontal" gap={3}>
            <Card.Text>Rating:{bestVacation.rating}</Card.Text>
            <Button
              variant="outline-dark"
              onClick={() => navigate(type + `/profile/${bestVacation.id}`)}
            >
              Profile
            </Button>
          </Stack>
        </Card.Body>
      </Card>
      <p>
        Worst Rated{type}: {averageRating}
      </p>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={worstVacation.photo} />
        <Card.Body>
          <Card.Title>{worstVacation.name}</Card.Title>
          <Card.Text>{worstVacation.description}</Card.Text>
          <Stack direction="horizontal" gap={3}>
            <Card.Text>Rating:{worstVacation.rating}</Card.Text>
            <Button
              variant="outline-dark"
              onClick={() => navigate(type + `/profile/${worstVacation.id}`)}
            >
              Profile
            </Button>
          </Stack>
        </Card.Body>
      </Card>
    </>
  );
}

export default RatingsReport;
