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
import ServiceTable from "./ServiceTable";

export default function BusinessUserViewServicesPage(props) {
  const [user, setUser] = React.useState({ type: "", headers: [] });
  const [services, setServices] = React.useState([]);

  const [searchServices, setSearchServices] = React.useState([]);
  React.useEffect(() => {
    let func = "";
    switch (props.type) {
      case "host":
        func = "getAllListings";
        setUser({
          type: "listings",
          headers: ["Name", "Location", "Rooms", "Beds", "Price"],
        });
        break;
      case "instructor":
        func = "getAllAdventures";
        setUser({
          type: "adventures",
          headers: ["Name", "Location", "Available spots", "Price"],
        });
        break;

      case "captain":
        func = "getAllVessels";
        setUser({
          type: "vessels",
          headers: ["Name", "Location", "Length", "Capacity", "Price"],
        });
    }
    getServiceData(func);
  }, []);

  function getServiceData(func) {
    let path = "http://localhost:8080/api/entity/" + func;
    axios
      .get(path, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
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

  function DeleteButtonHendler(id) {
    const filtering = [];
    for (let index = 0; index < services.length; index++) {
      const adventure = services[index];
      if (adventure.id !== id) {
        filtering.push(adventure);
      }
    }
    setSearchServices(filtering);
    setServices(filtering);
    
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
        <ServiceTable
          headers={user.headers}
          type={props.type}
          onDelete={DeleteButtonHendler}
          services={searchServices}
        />
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
