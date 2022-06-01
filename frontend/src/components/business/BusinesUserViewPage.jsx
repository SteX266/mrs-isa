import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import BusinessUserEntityList from "./BusinessUserEntityList";

export default function BusinessUserViewServicesPage(props) {
  const [user, setUser] = React.useState({ type: "" });
  const [services, setServices] = React.useState([]);

  const [searchServices, setSearchServices] = React.useState([]);
  React.useEffect(() => {
    let func = "";
    switch (props.type) {
      case "host":
        func = "getCurrentUserListings";
        setUser({
          type: "listings",
        });
        break;
      case "instructor":
        func = "getCurrentUserAdventures";
        setUser({
          type: "adventures",
        });
        break;

      case "captain":
        func = "getCurrentUserVessels";
        setUser({
          type: "vessels",
        });
    }
    getServiceData(func);
  }, []);

  function getServiceData(func) {
    const token = JSON.parse(localStorage.getItem("userToken"));

    let path = "http://localhost:8080/entity/" + func;
    axios
      .get(path, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer " + token.accessToken,
        },
        params: {
          email: localStorage.getItem("username"),
        },
      })
      .then((res) => {
        setServices(res.data);
        setSearchServices(res.data);
      });
  }

  function searchFieldChanged(event) {
    const filtering = [];
    const searchParam = event.target.value.toLowerCase();
    for (let index = 0; index < services.length; index++) {
      const service = services[index];
      if (
        service.name.toLowerCase().includes(searchParam) ||
        service.location.toLowerCase().includes(searchParam)
      ) {
        filtering.push(service);
      }
    }
    setSearchServices(filtering);
  }

  return (
    <div style={{ padding: "55px" }}>
      <Container
        style={({ maxWidth: "80%" }, { padding: "20px" })}
        className="rounded border border-dark"
      >
        <Navbar collapseOnSelect className="rounded border border-dark">
          <Container>
            <Navbar.Text className="text-dark">
              {searchServices.length + " " + user.type}
            </Navbar.Text>
          </Container>

          <Container>
            <SearchForm searchFieldChanged={searchFieldChanged} />
          </Container>

          <Container>
            <Nav className="ms-auto">
              <Link to="create">
                <Button variant="outline-dark">
                  Create New {user.type.slice(0, -1)}
                </Button>
              </Link>
            </Nav>
          </Container>
        </Navbar>
        <BusinessUserEntityList services={services} />
      </Container>
    </div>
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
