import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import BusinessUserEntityList from "./BusinessUserEntityList";
import SearchBar from "./SearchBar";

export default function BusinessUserViewServicesPage(props) {
  const [user, setUser] = React.useState({ type: "" });
  const [services, setServices] = React.useState([]);

  const [searchServices, setSearchServices] = React.useState([]);
  React.useEffect(() => {
    switch (props.type) {
      case "host":
        setUser({
          type: "listings",
        });
        break;
      case "instructor":
        setUser({
          type: "adventures",
        });
        break;

      case "captain":
        setUser({
          type: "vessels",
        });
    }
    getServiceData();
  }, []);

  function getServiceData() {
    const token = JSON.parse(localStorage.getItem("userToken"));

    let path = "http://localhost:8080/entity/getCurrentUserEntities";
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
  function del() {
    let new_services = services;
    new_services.pop();
    console.log(new_services);
    setServices(new_services);
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
            <SearchBar del={del} setServices={setServices} />
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
