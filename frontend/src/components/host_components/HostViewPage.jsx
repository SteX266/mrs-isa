import React, { Component } from 'react';
import HostNavbar from './HostNavbar';
import ListingView from './ListingView';

class HostViewPage extends Component {
    state = {  } 
    render() { 
        return (<><HostNavbar></HostNavbar><ListingView></ListingView></>);
    }
}
 
export default HostViewPage;