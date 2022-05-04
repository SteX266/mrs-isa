import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import LabeledInput from './LabeledInput';

export default function ProfileEditForm (props){
    const [user, setUser] = useState({
        name: "Imenko",
        surname: "Prezimenic",
        email: "mejl@mail.com",
        address: "Serbia, Novi Sad, Gogoljeva 11",
        phoneNumber: "0652988290" 
    });

    const [backup, setBackup] = useState({
            name: "Imenko",
            surname: "Prezimenic",
            email: "mejl@mail.com",
            address: "Serbia, Novi Sad, Gogoljeva 11",
            phone: "0652988290" 
    });

    
    function onCancel() {
        setUser(backup);

    }
    function onSave() {
        setBackup(user);
        saveToBackend();
    }
    function handleChange(event) {
        setUser(prevUser => {
            return {
                ...prevUser,
                [event.target.name]: event.target.value
            };
        });
    }
    function saveToBackend() {
        const requestOptions = {
            headers: {
               Accept: 'application/json',
             'Content-Type': 'application/json',
             'Access-Control-Allow-Origin': '*',
               
               },
            data:{
                "user": user
            }
   
        };
  
        axios.post("http://localhost:8080/api/user/change-profile", requestOptions);
    }
        return (
        <Form>
            <LabeledInput text='First name' value={user.name} controlId='first-name-input' name='name' onChange={handleChange}/>
            <LabeledInput text='Last name'  value={user.surname} controlId='last-name-input' name='surname' onChange={handleChange}/>
            <LabeledInput text='Email' value={user.email} controlId='email-input' type='mail' name='email' onChange={handleChange}/>
            <LabeledInput text='Address' value={user.address} controlId='address-input' name='address' onChange={handleChange}/>
            <LabeledInput text='Phone number' value={user.phoneNumber} controlId='first-name-input' type='tel' name='phone' onChange={handleChange}/>

            <Button style={{marginTop: '16px',marginBottom:'16px', marginRight: '69%'}} variant='outline-dark' onClick={onSave}>Save</Button>
            <Button style={{marginTop: '16px', marginBottom:'16px'}} variant='outline-danger' onClick={onCancel}>Cancel</Button>
        </Form>);
}
 