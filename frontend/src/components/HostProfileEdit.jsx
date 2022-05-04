
import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';


class HostProfileEdit extends Component {
    state = {  } 
    render() { 
        return (<Form>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email'></Form.Control>
                <Button type='submit' variant='outline-dark'></Button>
            </Form.Group>
        </Form>);
    }
}
 
export default HostProfileEdit;