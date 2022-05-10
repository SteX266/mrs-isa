import axios from "axios";
import React from "react";
import { Container, NavDropdown, Nav, Navbar, Image } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Dialog from "../Dialog";

export default function BusinessUserNavbar(props) {
  const [showDeleteDialogue, setshowDialogue] = React.useState(false);
  var serv;
  switch (props.type) {
    case "host":
      serv = "listings";
      break;
    case "instructor":
      serv = "adventures";
      break;
    default:
      serv = "vessels";
  }

  function clickDelete() {
    setshowDialogue(true);
  }

  function confirmDeleteProfile() {
    const requestOptions = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      params: {
        user: "stex",
      },
    };

    axios.get(
      "http://localhost:8080/api/user/createCancellationRequest",
      requestOptions
    );
    this.setState({ showDeleteDialogue: false });
  }

  function cancelDeleteProfile() {
    setshowDialogue(false);
  }
  var name = "Fish & Ships";
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="rounded border border-light"
      >
        <Container>
          <Navbar.Brand href={props.type}>{name}</Navbar.Brand>
        </Container>
        <Container>
          <Nav className="mx-auto">
            <Nav.Link href={`/${props.type}/services`}>{serv}</Nav.Link>
            <Nav.Link href={`/${props.type}/reservations`}>
              Reservations
            </Nav.Link>
          </Nav>
        </Container>
        <Container>
          <Nav className="ms-auto">
            <NavDropdown title={<ProfileImage />}>
              <NavDropdown.Item href={`/${props.type}/profile`}>
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href={`/${props.type}/change-password`}>
                Change password
              </NavDropdown.Item>
              <NavDropdown.Item href="/">Log Out</NavDropdown.Item>
              <NavDropdown.Item onClick={clickDelete}>
                Delete profile
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={<NotificationImage />}></NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <Outlet></Outlet>
      <Dialog
        show={showDeleteDialogue}
        title="Delete profile?"
        description="Are you sure you want to delete your profile?"
        confirmed={confirmDeleteProfile}
        canceled={cancelDeleteProfile}
      />
    </>
  );
}

function ProfileImage() {
  return (
    <Image
      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwoODQ4PDRAPEA8NDQ0NDQ0NDRsNDg0PFRIWFhURExMYKCggGBolGxMVITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOYA2wMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQQFAwIH/8QAMBABAAIABAQEBQQCAwAAAAAAAAECAxESUQQFIZExQWGBIjJxobFCUsHRcuEVYoL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+ogAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADxiYtK/NMR+Ve3H4flEz7ZAtil/yNf2z3THMKbWBcFWvHYXrHs7YeNh28LRPv1B0AAAAAAAAAAAAAAAAAABV4zidHSvzT9gdMfiKU8fH9seMqOLxuJbw+GPTx7q0zMznPWQCZAAAAQkBe4DiLTOi3Xp0mfH6L7CiZjwTrtvPcG4MrheKtW0RaZms9J9PWGqAAAAAAAAAAAAAADziXisTM+UZsW1ptMzPjM9WlzG2WHlvMQywSAAAAAAAAACGrwGLqplPjXp7eTLWuW2yvlvE9waYAAAAAAAAAAAAAKPM56U+ss9f5p+j3UASAAAAAAAAAA68HOWJX65fZyesGcr1/wAo/INsAAAAAAAAAAAAAFDmn6PdQaXMq/DE7T1ZwAAAAAAAAAACafNH1j8oe8CM71j/ALQDaAAAAAAAAAAAAAB4xaaqzXeMvdirfMrTqrG0Z+6oAAAAAAAAAAAt8uws7avKv5U1/l+PMzonLKIzjKMsgXwAAAAAAAAAAAAAZ3M4+Ks+kwptPmNM6Z/tnP2ZgAAAAAAAAAAC1y6vx57VlUaPLafDM7zl2BdAAAAAAAAAAAAAB5vXOJjeJhiTGU5T5Tk3XDH4ekxadMapievqDJEJAAAAAAABADY4SuWHWPTNW4DBpaudoifi6TK+AAAAAAAAAAAAAAAADI4vC0XnaesOLT5hh50z86zn7ebLBIAAAAABl9xZ5fh6r5+VYz9/IGhw+HppEbR1+roAAAAAAAAAAAAAAAAAItGcTG8TDDmMpmNpmG6w7znMzvM/kEAAAAAANDlcfDafWI+3+2e0uW/JP+U/iAWwAAAAAAAAAAAAAAAARMxHj0jeQece2VLTtWe7EXeN4qLRpr4fqnf0UwAAAAAAQ0OV26Wj1i38fwoPeDi2paLR7xvANocsDHpeOk9dvN1AAAAAAAAAAAB5vetYzmYj6g9PN71rGdpiI9VLG4/ypH/qf4hSve1pztMz9QXsbmH7Iz9bf0pYmLe3zTM/iHkBCQAAAAAAAAAj0WMPjcWvj8UbT/auA0cPj6T80TX7wtUvW0ZxMT9JzYb1W0xOcTl9AbgzcLj7x80ao38JXcHHpf5Z67T4g6gAAACJlncVxF79KxMV+nWwOvE8bEdKdZ38oUL3tac7TMz69TRbaexottPYECdFtp7Gi209gQJ0W2nsaLbT2BAnRbaexottPYECdFtp7Gi209gQJ0W2nsaLbT2BAnRbaexottPYECdFtp7Gi209gQJ0W2nsaLbT2BAnRbaexottPYEEdPD7J0W2nsaLbT2BaweOtHS3WN/NfwsWt4zrOf5hjaLbT2eqa6znXOJ9IBtDlw2LN65zGU+Ex4dd3UAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q=="
      roundedCircle
      style={{ width: "30px" }}
    ></Image>
  );
}

function NotificationImage() {
  return (
    <Image
      src="https://st3.depositphotos.com/8089676/32835/v/600/depositphotos_328355014-stock-illustration-notification-bell-icon-black-web.jpg"
      roundedCircle
      style={{ width: "30px" }}
    ></Image>
  );
}
