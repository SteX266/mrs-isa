import React, { Component } from 'react';
import CaptainNavbar from './CaptainNavbar';
import VesselEdit from './VesselEdit';

class CaptainEditPage extends Component {
    state = {  } 
    render() { 
        return (<><CaptainNavbar></CaptainNavbar><VesselEdit></VesselEdit></>);
    }
}
 
export default CaptainEditPage;