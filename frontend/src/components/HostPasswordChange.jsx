import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class HostPasswordChange extends Component {
    state = {  } 
    render() { 
        return (<Form>
            <Form.Group>
                <Form.Label>Old password</Form.Label>
                <Form.Control type='password'></Form.Control>

                <Form.Label>New password</Form.Label>
                <Form.Control type='password'></Form.Control>

                <Form.Label>Repeat password</Form.Label>
                <Form.Control type='password'></Form.Control>

                <Button type='submit' variant='outline-dark'></Button>
            </Form.Group>
        </Form>);
    }
}
 
export default HostPasswordChange;