import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import PasswordChangeForm from '../host_components/PasswordChangeForm';
import CaptainNavbar from './CaptainNavbar';

class ChangePasswordPage extends Component {
    state = {  } 
    render() { 
        return (<><CaptainNavbar></CaptainNavbar><Container style={{width:'30%'}} className="rounded border border-dark"><PasswordChangeForm></PasswordChangeForm></Container></>);
    }
}
 
export default ChangePasswordPage;