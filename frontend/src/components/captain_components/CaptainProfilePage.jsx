import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import CaptainNavbar from './CaptainNavbar';
import ProfileEditForm from './ProfileEditForm';

class CaptainProfilePage extends Component {
    state = {  } 
    render() { 
        return (
        <>
            <CaptainNavbar></CaptainNavbar>
            <Container style={{width:'30%'}} className="rounded border border-dark">
                <ProfileEditForm></ProfileEditForm>
            </Container>
        </>);
    }
}
 
export default CaptainProfilePage;