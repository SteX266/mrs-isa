import React, { Component } from 'react';

import "bootstrap";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CaptainHomePage from './CaptainHomePage';
import CaptainViewPage from './CaptainViewPage';
import CaptainEditPage from './CaptainEditPage';
import CaptainCreatePage from './CaptainCreatePage';
import CaptainProfilePage from './CaptainProfilePage';
import CaptainReservationsPage from './CaptainReservationsPage';
import ChangePasswordPage from './ChangePasswordPage';

class CaptainPage extends Component {
    state = { 
        token: {}
    } 
    render() { 
        return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<CaptainHomePage></CaptainHomePage>}/>
                <Route exact path='/vessels' element={<CaptainViewPage></CaptainViewPage>}/>
                <Route exact path='/edit-vessel/:vesselId' element={<CaptainEditPage></CaptainEditPage>}/>
                <Route exact path='/reservations' element={<CaptainReservationsPage></CaptainReservationsPage>}/>
                <Route exact path='/create-vessel' element={<CaptainCreatePage></CaptainCreatePage>}/>
                <Route exact path='/profile' element={<CaptainProfilePage></CaptainProfilePage>}/>
                <Route exact path='/change-password' element={<ChangePasswordPage></ChangePasswordPage>}/>
                <Route exact path='/edit' element={<h1>Account</h1>}/>
        </Routes>
      </BrowserRouter>
    );
    }
}
 
export default CaptainPage;