import React, { Component } from 'react';
import "bootstrap";
import HostHomePage from './HostHomePage';
import HostEditPage from './HostEditPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HostViewPage from './HostViewPage';
import HostProfilePage from './HostProfilePage';
import ChangePasswordPage from './ChangePasswordPage';

class HostPage extends Component {
    state = { 
        token: {}

    } 
    render() { 
        return (
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<HostHomePage></HostHomePage>}/>
            <Route exact path='/listings' element={<HostViewPage></HostViewPage>}></Route>
            <Route exact path='/edit-listings/:listingsId' element={<HostEditPage></HostEditPage>}/>
            <Route exact path='/reservations' element={<h1>Reservations page</h1>}/>
            <Route exact path='/create-listing' element={<></>}/>
            <Route exact path='/profile' element={<HostProfilePage></HostProfilePage>}/>
            <Route exact path='/change-password' element={<ChangePasswordPage></ChangePasswordPage>}/>
        </Routes>
      </BrowserRouter>
    );
    }
}
 
export default HostPage;
