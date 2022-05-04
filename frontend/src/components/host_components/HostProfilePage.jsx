
import React, { Component } from 'react'
import HostNavbar from './HostNavbar';
import ProfileEditForm from '../captain_components/ProfileEditForm';
import { Container } from 'react-bootstrap';

class HostProfilePage extends Component {
    state = {  } 
    render() { 
        return (
        <>
            <HostNavbar></HostNavbar>
            <Container><ProfileEditForm></ProfileEditForm></Container>
        </>);
    }
}
 
export default HostProfilePage;