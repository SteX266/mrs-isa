import React from "react";
import { Container, Navbar, Form, FormControl } from "react-bootstrap";
import axios from "axios";
import RegistrationRequestTable from "./RegistrationRequestTable";
import Dialog from "../modals/Dialog";

export default function RegistrationRequest() {
  const [requests, setRequests] = React.useState([]);

  const [searchRequests, setSearchRequests] = React.useState([]);

  const [showTaskDialog, setShowTaskDialog] = React.useState(false);

  React.useEffect(() => {
    const token = JSON.parse(localStorage.getItem("userToken"));
    const requestOptions = {
      headers: { Authorization: "Bearer " + token.accessToken },
    };
    axios
      .get(
        "http://localhost:8080/registrationRequest/getAllRegistrationRequests",
        requestOptions
      )
      .then((res) => {
        setRequests(res.data);
        setSearchRequests(res.data);
      });
  }, []);

  function onSearchFieldChange(event) {
    const searchResult = [];
    const searchParam = event.target.value.toLowerCase();
    for (let index = 0; index < requests.length; index++) {
      const r = requests[index];
      if (
        r.client.toLowerCase().includes(searchParam) ||
        r.description.toLowerCase().includes(searchParam)
      ) {
        searchResult.push(r);
      }
    }
    setSearchRequests(searchResult);
  }
  let len = searchRequests.length;
  if (len == undefined) {
    len = 0;
  }

  function onAccept(id) {
    const filtering = [];
    for (let index = 0; index < requests.length; index++) {
      const r = requests[index];
      if (r.id !== id) {
        filtering.push(r);
      }
    }
    setSearchRequests(filtering);
    setRequests(filtering);
  }
  function onDecline(id) {
    onAccept(id);
  }

  function confirmDecline() {
    console.log("declined");
  }
  function cancelDecline() {
    setShowTaskDialog(true);
  }

  return (
    <>
      <div style={{ padding: "55px" }}>
        <Container
          style={({ maxWidth: "80%" }, { padding: "20px" })}
          className="rounded border border-primary"
        >
          <Navbar collapseOnSelect className="rounded border border-primary">
            <Container>
              <Navbar.Text className="text-Primary">
                {len + " Requests"}
              </Navbar.Text>
            </Container>

            <Container>
              <SearchForm searchFieldChanged={onSearchFieldChange} />
            </Container>
          </Navbar>
          <RegistrationRequestTable
            onAccept={onAccept}
            onDecline={onDecline}
            requests={searchRequests}
          ></RegistrationRequestTable>
        </Container>
      </div>
      <Dialog
        show={showTaskDialog}
        title="Decline Request?"
        description="Why are you declining this request?"
        confirmed={confirmDecline}
        canceled={cancelDecline}
      />
    </>
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
