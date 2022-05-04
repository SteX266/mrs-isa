
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default  function InstructorProfile(){
        
        const [user,setUser]= React.useState({
            name: "Imenko",
            surname: "Prezimenic",
            email: "mejl@mail.com",
            address: "Serbia, Novi Sad, Gogoljeva 11",
            phoneNumber: "0652988290"});

        const[backupUser,setBackupUser]=  React.useState({
            name: "Imenko",
            surname: "Prezimenic",
            email: "mejl@mail.com",
            address: "Serbia, Novi Sad, Gogoljeva 11",
            phoneNumber: "0652988290" 
        }) ;

    function onCancel() {
        setUser(backupUser);
    }
    function onSave() {
        setBackupUser(user);
    }

    return (
        <div>
        <Form>
            <input name='First name' defaultValue={user.name} controlId='first-name-input'/>
            <input name='Last name'  defaultValue={user.surname} controlId='last-name-input'/>
            <input name='Email' defaultValue={user.email} controlId='email-input' type='email'/>
            <input name='Address' defaultValue={user.address} controlId='address-input'/>
            <input name='Phone number' defaultValue={user.phoneNumber} controlId='first-name-input' type='tel'/>

            <Button style={{marginTop: '16px',marginBottom:'16px', marginRight: '69%'}} variant='outline-dark' onClick={onSave}>Save</Button>
            <Button style={{marginTop: '16px', marginBottom:'16px'}} variant='outline-danger' onClick={onCancel}>Cancel</Button>
        </Form>
        <Link to= 'password'><Button style={{marginTop: '16px',marginBottom:'16px', marginRight: '69%'}} variant='outline-dark' >changePassword</Button></Link>
        </div>);
    }
 