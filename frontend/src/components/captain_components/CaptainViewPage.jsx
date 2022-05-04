import React, { Component } from 'react';
import CaptainNavbar from './CaptainNavbar';
import VesselView from './VesselView';

class CaptainViewPage extends Component {
    state = {  } 
    render() { 
        return (<><CaptainNavbar></CaptainNavbar><VesselView></VesselView></>);
    }
}
 
export default CaptainViewPage;