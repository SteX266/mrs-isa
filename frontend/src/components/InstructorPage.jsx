import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import InstructorNavbar from './InstructorNavBar';
import InstructorAdventureView from  './InstructorAdventureView';
import EditAdventure from './EditAdventure';
import CreateAdventure from './CreateAdventure';
import InstructorAccount from './InstructorAccount';
import InstructorProfile from './InstructorProfile';
import ChangePassword from './ChangePassword';

class InstructorPage extends Component {
    state = { 
        token: {}

    } 
    render() { 
        return (
       
        <BrowserRouter>
         <InstructorNavbar/>
            <Routes>
              <Route exact path='/adventures' element={<InstructorAdventureView/>}></Route>
              <Route exact path='/adventures/:Id' element={<EditAdventure></EditAdventure>}/>
              <Route  exact path='/reservations' element={<h1>Reservations page</h1>}/>
              <Route  exact path='/adventures/create-adventure' element={<CreateAdventure></CreateAdventure>}/>
              <Route exact path='/profile' element={<InstructorProfile/>}/>
              <Route exact path='/profile/password' element={<ChangePassword/>}/>
              <Route exact path='/account' element={<InstructorAccount></InstructorAccount>}/>
              <Route exact path='/edit' element={<h1>Account</h1>}/>
        </Routes>
      </BrowserRouter>
    );
    }
}
 
export default InstructorPage;