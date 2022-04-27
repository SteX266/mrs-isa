import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import InstructorNavbar from './InstructorNavBar';
import InstructorAdvantureView from  './InstructorAdvantureView';
import EditAdventure from './EditAdventure';
import CreateAdventure from './CreateAdventure';

class InstructorPage extends Component {
    state = { 
        token: {}

    } 
    render() { 
        return (
       
        <BrowserRouter>
         <InstructorNavbar/>
            <Routes>
              <Route exact path='/advantures' element={<InstructorAdvantureView/>}></Route>
              <Route exact path='/advantures/:Id' element={<EditAdventure></EditAdventure>}/>
              <Route  exact path='/reservations' element={<h1>Reservations page</h1>}/>
              <Route  exact path='/advantures/create-adventure' element={<CreateAdventure></CreateAdventure>}/>
              <Route exact path='/profile' element={<h1>Profile</h1>}/>
              <Route exact path='/account' element={<h1>Account</h1>}/>
              <Route exact path='/edit' element={<h1>Account</h1>}/>
        </Routes>
      </BrowserRouter>
    );
    }
}
 
export default InstructorPage;