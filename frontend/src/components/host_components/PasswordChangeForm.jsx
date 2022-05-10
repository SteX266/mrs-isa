import axios from 'axios';
import React, { Component, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';

export default function PasswordChangeForm() {
    const [passwords, setPasswords] = useState({old: "", new: "", repeat: ""});
    const [successfull, setSuccessfull] = useState(false);

    function onButtonClicked() {
        if (passwords.new === passwords.repeat) {
            console.log(passwords);
            sendChangeRequest();
        } else
            setSuccessfull(false);
    }
    function sendChangeRequest() {
        const requestOptions = {
            headers: {
               Accept: 'application/json',
             'Content-Type': 'application/json',
             'Access-Control-Allow-Origin': '*',
               
               },
            data:{
                "passwords": passwords
            }
        };
        axios.post("http://localhost:8080/api/user/change-password", requestOptions).then(function (response) {
            console.log(response.data);
        }).catch(function (response) {
            console.log(response.status);
        });

    }
    function handleChange(event) {
        setPasswords(prevPasswords => {
            return {
                ...prevPasswords,
                [event.target.name]: event.target.value
            }
        })
    }
    return (<Form>
        <Form.Group>
            <Form.Label>Old password</Form.Label>
            <Form.Control type='password' name='old' onChange={handleChange}></Form.Control>

            <Form.Label>New password</Form.Label>
            <Form.Control type='password' name='new' onChange={handleChange}></Form.Control>

            <Form.Label>Repeat password </Form.Label>
            <Form.Control type='password' name='repeat' onChange={handleChange}></Form.Control>

            <Button type='submit' variant='outline-dark' onClick={onButtonClicked} style={{marginTop:'16px', marginBottom:'16px'}}>Change password</Button>
            {successfull && <PasswordAlert/>}
        </Form.Group>
    </Form>);
}

class PasswordAlert extends Component {
    render() {
        return(
            <Alert variant='success'>
                <Alert.Heading>Successfully changed password</Alert.Heading>
                <p>The password was successfully changed.</p>
            </Alert>);
    }
}
