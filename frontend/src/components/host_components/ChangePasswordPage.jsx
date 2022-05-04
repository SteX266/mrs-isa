import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import HostNavbar from './HostNavbar';
import PasswordChangeForm from './PasswordChangeForm';

class ChangePasswordPage extends Component {
    state = {  } 
    render() { 
        return (
        <>
            <HostNavbar></HostNavbar>
            <Container><PasswordChangeForm></PasswordChangeForm></Container>
        </>);
    }
}
 
export default ChangePasswordPage;