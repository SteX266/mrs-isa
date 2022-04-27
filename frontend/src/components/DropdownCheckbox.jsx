
import React, {Component} from 'react';
import Dropdown from 'react-bootstrap/esm/Dropdown';

class DropdownCheckbox extends Component {
    constructor(props) {
        super(props);
        this.state = {list: props.list, name: props.name};
    }
    render() {
        return(<Dropdown>
            <Dropdown.Toggle variant='Secondary' id='dropdown'>
                {this.state.name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {this.state.list.map((item =>
                    <div>{item}    <input type='checkbox'></input></div>
                    ))}
            </Dropdown.Menu>
        </Dropdown>);

    }
}
export default DropdownCheckbox;