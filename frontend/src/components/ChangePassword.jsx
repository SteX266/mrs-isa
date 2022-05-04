import React, { Component } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';

class ChangePassword extends Component {
    state = { oldPassword: "", newPassword: "", successfull: false}
    onButtonClicked = () => {
        this.setState({successfull: true});
    }
    render() {
        return (<Form>
            <Form.Group>
                <Form.Label>Old password</Form.Label>
                <Form.Control type='password'></Form.Control>

                <Form.Label>New password</Form.Label>
                <Form.Control type='password'></Form.Control>

                <Form.Label>Repeat password</Form.Label>
                <Form.Control type='password'></Form.Control>

                <Button type='submit' variant='outline-dark' onClick={this.onButtonClicked} style={{marginTop:'16px', marginBottom:'16px'}}>Change password</Button>
                <PasswordAlert successfull={this.state.successfull}></PasswordAlert>
            </Form.Group>
        </Form>);
    }
}

class PasswordAlert extends Component {
    render() {
        const successfull = this.props.successfull;
        if (successfull) {
            return(
                <Alert variant='success'>
                    <Alert.Heading>Successfully changed password</Alert.Heading>
                    <p>The password was successfully changed.</p>
                </Alert>);
        }
    }
}
 
export default ChangePassword;