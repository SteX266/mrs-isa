import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import InstructorNavbar from './InstructorNavBar';
import InstructorAdvantureView from  './InstructorAdvantureView';
import InstructorAdvantureEdit from './InstructorAdvantureEdit';

class InstructorPage extends Component {
    state = { 
        token: {}

    } 
    render() { 
        return (
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<InstructorNavbar/>}>
                <Route path='advantures' element={<InstructorAdvantureView/>}></Route>
                <Route path='advantures/:Id' element={<InstructorAdvantureEdit/>}/>
                <Route path='reservations' element={<h1>Reservations page</h1>}/>
                <Route path='create-Advanture' element={<h1>Create Advanture</h1>}/>
            <Route path='profile' element={<h1>Profile</h1>}/>
            <Route path='account' element={<h1>Account</h1>}/>
            <Route path='edit' element={<h1>Account</h1>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
    }
}
 
export default InstructorPage;