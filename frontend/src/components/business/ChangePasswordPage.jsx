import React, { Component } from "react";
import { Container } from "react-bootstrap";
import PasswordChangeForm from "../host_components/PasswordChangeForm";

class ChangePasswordPage extends Component {
  state = {};
  render() {
    return (
      <div style={{ padding: "55px" }}>
        <Container
          style={({ maxWidth: "30%" }, { padding: "20px" })}
          className="rounded border border-dark"
        >
          <PasswordChangeForm></PasswordChangeForm>
        </Container>
      </div>
    );
  }
}

export default ChangePasswordPage;
