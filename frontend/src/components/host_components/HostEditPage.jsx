import React, {Component} from 'react';
import HostNavbar from './HostNavbar';
class HostEditPage extends Component {
    constructor(props) {
        super(props);
        this.state = {listingId : ''}
    }
    render() {
        return (
        <><HostNavbar></HostNavbar></>
        );
    }
}
 
export default HostEditPage;