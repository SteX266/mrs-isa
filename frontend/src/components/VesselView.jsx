
import React, {Component} from "react";
import { Container, Nav, Navbar, Button, Table, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

class VesselView extends Component {
    constructor(props) {
        super(props);
        this.state = {
                search: false,
                vessels : [
                    {id: 1, name: "Brod jedan", location : "Serbia", length: 25, capacity: 4, price: 34},
                    {id: 2, name: "Brod dva", location : "Serbia", length: 3, capacity: 5, price: 45},
                    {id: 3, name: "Brod tri", location : "Serbia", length: 25, capacity: 4, price: 34},
                    {id: 4, name: "Brod cetiri", location : "Serbia", length: 3, capacity: 5, price: 45},
                    {id: 5, name: "Brod pet", location : "Serbia", length: 25, capacity: 4, price: 34},
                    {id: 6, name: "Brod 6", location : "Serbia", length: 3, capacity: 5, price: 45},
                    {id: 7, name: "Brod jedan", location : "Serbia", length: 25, capacity: 4, price: 34},
                    {id: 8, name: "Brod dva", location : "Serbia", length: 3, capacity: 5, price: 45},
                    {id: 9, name: "Brod tri", location : "Serbia", length: 25, capacity: 4, price: 34},
                    {id: 10, name: "Brod cetiri", location : "Serbia", length: 3, capacity: 5, price: 45},
                    {id: 11, name: "Brod pet", location : "Serbia", length: 25, capacity: 4, price: 34},
                    {id: 12, name: "Brod 6", location : "Serbia", length: 3, capacity: 5, price: 45},
                    {id: 13, name: "Brod jedan", location : "Serbia", length: 25, capacity: 4, price: 34},
                    {id: 14, name: "Brod dva", location : "Serbia", length: 3, capacity: 5, price: 45},
                    {id: 15, name: "Brod tri", location : "Serbia", length: 25, capacity: 4, price: 34},
                    {id: 16, name: "Brod cetiri", location : "Serbia", length: 3, capacity: 5, price: 45},
                    {id: 17, name: "Brod pet", location : "Serbia", length: 25, capacity: 4, price: 34},
                    {id: 18, name: "Brod 6", location : "Serbia", length: 3, capacity: 5, price: 45}
                ],
                search_vessels : [
                    {id: 1, name: "Brod jedan", location : "Serbia", length: 25, capacity: 4, price: 34},
                    {id: 2, name: "Brod dva", location : "Serbia", length: 3, capacity: 5, price: 45},
                    {id: 3, name: "Brod tri", location : "Serbia", length: 25, capacity: 4, price: 34},
                    {id: 4, name: "Brod cetiri", location : "Serbia", length: 3, capacity: 5, price: 45},
                    {id: 5, name: "Brod pet", location : "Serbia", length: 25, capacity: 4, price: 34},
                    {id: 6, name: "Brod 6", location : "Serbia", length: 3, capacity: 5, price: 45},
                    {id: 7, name: "Brod jedan", location : "Serbia", length: 25, capacity: 4, price: 34},
                    {id: 8, name: "Brod dva", location : "Serbia", length: 3, capacity: 5, price: 45},
                    {id: 9, name: "Brod tri", location : "Serbia", length: 25, capacity: 4, price: 34},
                    {id: 10, name: "Brod cetiri", location : "Serbia", length: 3, capacity: 5, price: 45},
                    {id: 11, name: "Brod pet", location : "Serbia", length: 25, capacity: 4, price: 34},
                    {id: 12, name: "Brod 6", location : "Serbia", length: 3, capacity: 5, price: 45},
                    {id: 13, name: "Brod jedan", location : "Serbia", length: 25, capacity: 4, price: 34},
                    {id: 14, name: "Brod dva", location : "Serbia", length: 3, capacity: 5, price: 45},
                    {id: 15, name: "Brod tri", location : "Serbia", length: 25, capacity: 4, price: 34},
                    {id: 16, name: "Brod cetiri", location : "Serbia", length: 3, capacity: 5, price: 45},
                    {id: 17, name: "Brod pet", location : "Serbia", length: 25, capacity: 4, price: 34},
                    {id: 18, name: "Brod 6", location : "Serbia", length: 3, capacity: 5, price: 45}
                ]
        };
    }
    searchFieldChanged = (e) => {
        const filtering = [];
        const searchParam = e.target.value.toLowerCase();
        for (let index = 0; index < this.state.vessels.length; index++) {
            const vessel = this.state.vessels[index];
            console.log(vessel);
            if (vessel.name.toLowerCase().includes(searchParam) || vessel.location.toLowerCase().includes(searchParam)) {
                filtering.push(vessel);
            }
        }
        this.setState({search_vessels : filtering});
    }
    render() { 
        return (
        <Container style={{maxWidth: '100%'}}>
            <Navbar collapseOnSelect className="rounded border border-dark">
                <Container><Navbar.Text className="text-dark">{this.state.vessels.length} Vessels </Navbar.Text></Container>

                <Container><SearchForm searchFieldChanged={this.searchFieldChanged}/></Container>

                <Container>
                    <Nav className="ms-auto">
                        <Button href="/create-vessel"variant="outline-dark">
                            Create Vessel
                        </Button>
                    </Nav>
                </Container>
            </Navbar>

            <Table striped hover className="rounded" >
                <TableHeader headers={["Name", "Location", "Length", "Capacity", "Price"]}></TableHeader>
                <TableBody vessels={this.state.search_vessels}></TableBody>
            </Table>
        </Container>);
    }
}

class SearchForm extends Component {
    render() {
        return (
            <Form>
                <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" onChange={this.props.searchFieldChanged}/>
            </Form>
        );
    }
}

class EditableTableRow extends Component {
    render() {
        return (
            <tr id={this.props.vessel.id}>
                <td>{this.props.vessel.name}</td>
                <td>{this.props.vessel.location}</td>
                <td>{this.props.vessel.length}</td>
                <td>{this.props.vessel.capacity}</td>
                <td>{this.props.vessel.price}€</td>
                <td><Link to={`/edit-vessel/${this.props.vessel.id}`}><Button variant="outline-dark">Edit</Button></Link></td>
                <td><Link to={`/delete-vessel/${this.props.vessel.id}`}><Button variant="outline-dark">Delete</Button></Link></td>
            </tr>
        );
    }
}

class TableHeader extends Component {
    render() {
        return (
            <thead>
                <tr>
                    {this.props.headers.map(header => 
                        <th>{header}</th>
                    )}
                </tr>
            </thead>
        );
    }
}

class TableBody extends Component {
    render() {
        return (
            <tbody>
                {this.props.vessels.map((vessel =>
                    <EditableTableRow key={vessel.id} vessel={vessel}></EditableTableRow>
                    ))}
            </tbody>
        );
    }
}
 
export default VesselView;