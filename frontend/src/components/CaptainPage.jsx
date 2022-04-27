import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CaptainHome from './CaptainHome';
import VesselView from './VesselView';
import VesselEdit from './VesselEdit';
import VesselCreate from './VesselCreate';

class CaptainPage extends Component {
    state = { 
        token: {}
    } 
    render() { 
        return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<CaptainHome></CaptainHome>}/>
                <Route exact path='/vessels' element={<VesselView></VesselView>}/>
                <Route exact path='/edit-vessel/:vesselId' element={<VesselEdit></VesselEdit>}/>
                <Route exact path='/reservations' element={<h1>Reservations page</h1>}/>
                <Route exact path='/create-vessel' element={<VesselCreate></VesselCreate>}/>
                <Route exact path='/profile' element={<h1>Profile</h1>}/>
                <Route exact path='/account' element={<h1>Account</h1>}/>
                <Route exact path='/edit' element={<h1>Account</h1>}/>
        </Routes>
      </BrowserRouter>
    );
    }
}
 
export default CaptainPage;