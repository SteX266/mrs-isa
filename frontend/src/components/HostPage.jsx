import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import HostHome from './HostHome';
import HostListingView from './HostListingView';
import HostListingEdit from './HostListingEdit';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

class HostPage extends Component {
    state = { 
        token: {}

    } 
    render() { 
        return (
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<HostHome></HostHome>}>
                <Route path='listings' element={<HostListingView></HostListingView>}></Route>
                <Route path='listings/:listingsId' element={<HostListingEdit></HostListingEdit>}/>
                <Route path='reservations' element={<h1>Reservations page</h1>}/>
                <Route path='create-listing' element={<h1>Create Listing page</h1>}/>
            <Route path='profile' element={<h1>Profile</h1>}/>
            <Route path='account' element={<h1>Account</h1>}/>
            <Route path='edit' element={<h1>Account</h1>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
    }
}
 
export default HostPage;
