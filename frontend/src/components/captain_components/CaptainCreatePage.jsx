import React, { Component } from 'react';
import CaptainNavbar from './CaptainNavbar';
import VesselCreate from './VesselCreate';

class CaptainCreatePage extends Component {
    state = {  } 
    render() { 
        return (<><CaptainNavbar></CaptainNavbar><VesselCreate></VesselCreate></>);
    }
}
 
export default CaptainCreatePage;