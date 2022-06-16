import axios from "axios";
import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";

export default function PasswordChangeForm() {
  const [passwords, setPasswords] = useState({ old: "", new: "", repeat: "" });
  const [successfull, setSuccessfull] = useState(false);
  const [errors, setErrors] = useState({
    repeatedPassword: "",
    password: "",
  });

  function onButtonClicked() {
    if (passwords.new === passwords.repeat) {
      sendChangeRequest();
    } else {
      alert("Neisravne lozinke");
      setSuccessfull(false);
    }
  }
  function sendChangeRequest() {
    const token = JSON.parse(localStorage.getItem("userToken"));
    const requestOptions = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + token.accessToken,
      },
      params: {
        oldEmail: passwords.old,
        newEmail: passwords.new,
        repeat: passwords.repeat,
      },
    };
    axios.get("http://localhost:8080/user/change-password", requestOptions);
  }

  function handleChange(event) {
    setPasswords((prevPasswords) => {
      return {
        ...prevPasswords,
        [event.target.name]: event.target.value,
      };
    });
  }
  function isValidForm() {
    let currentErrors = errors;

    let valid = true;

    if (passwords.new === "" || passwords.length < 5) {
      currentErrors.password = "Password must be at least 5 characters long";
      valid = false;
    } else {
      currentErrors.password = "";
    }

    if (passwords.new !== passwords.repeat) {
      currentErrors.repeatedPassword = "Passwords do not match";
      valid = false;
    }
    setErrors({
      password: currentErrors.password,
      repeatedPassword: currentErrors.repeatedPassword,
    });
    alert(valid);
    return valid;
  }
  return (
    <Form>
      <Form.Group>
        <div className="mb-6">
          <Form.Label>Old password</Form.Label>
          <Form.Control
            type="password"
            name="old"
            onChange={handleChange}
          ></Form.Control>
          {errors.repeatedPassword.length > 0 && (
            <span className="error">{errors.repeatedPassword}</span>
          )}
        </div>
        <div className="mb-6">
          <Form.Label>New password</Form.Label>
          <Form.Control
            type="password"
            name="new"
            onChange={handleChange}
          ></Form.Control>
          {errors.repeatedPassword.length > 0 && (
            <span className="error">{errors.repeatedPassword}</span>
          )}
        </div>
        <div className="mb-6">
          <Form.Label>Repeat password </Form.Label>
          <Form.Control
            type="password"
            name="repeat"
            onChange={handleChange}
          ></Form.Control>
          {errors.repeatedPassword.length > 0 && (
            <span className="error">{errors.repeatedPassword}</span>
          )}
        </div>

        <Button
          variant="outline-dark"
          onClick={onButtonClicked}
          style={{ marginTop: "16px", marginBottom: "16px" }}
        >
          Change password
        </Button>
        {successfull && <PasswordAlert />}
      </Form.Group>
    </Form>
  );
}

function PasswordAlert() {
  return (
    <Alert variant="success">
      <Alert.Heading>Successfully changed password</Alert.Heading>
      <p>The password was successfully changed.</p>
    </Alert>
  );
}
