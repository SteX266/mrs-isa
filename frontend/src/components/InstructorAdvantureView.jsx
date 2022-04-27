import React, {Component} from "react";
import { Container, Nav, Navbar, Button, Table, Form, FormControl } from "react-bootstrap";

class InstructorAdvantureView extends Component {
    constructor(props) {
        super(props);
        this.state = {
                searchField : '',
                listings : [
                    {id: 1, name: "Prva Avantura", location : "Serbia", people: 4,  price: 34},
                    {id: 2, name: "Druga Avantura", location : "Bosnia", people: 3,price: 45}
                ]
        };
    }
    searchFieldChanged = (e) => {
        this.setState({ searchField : e.target.value });
    }
    render() { 
        return (
        <Container style={{maxWidth: '100%'}}>
            <Navbar collapseOnSelect className="rounded border border-dark">
                <Container><Navbar.Text className="text-dark">{this.state.listings.length} Advantures</Navbar.Text></Container>

                <Container><SearchForm searchFieldChanged={this.searchFieldChanged}/></Container>

                <Container>
                    <Nav className="ms-auto">
                        <Button variant="outline-dark">
                            Create New Advanture
                        </Button>
                    </Nav>
                </Container>
            </Navbar>

            <Table striped hover className="rounded" >
                <TableHeader headers={["Name", "Location", "People", "Price", "Edit" , "Delete"]}></TableHeader>
                <TableBody listings={this.state.listings}></TableBody>
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
    
    DeleteButtonHendler(){
        alert("aaaa")
    }
    render() {
        return (
            <tr id={this.props.listing.id}>
                <td>{this.props.listing.name}</td>
                <td>{this.props.listing.location}</td>
                <td>{this.props.listing.people}</td>
                <td>{this.props.listing.price}€</td>
                <td><Button href={`/advantures/${this.props.listing.id}`} variant="outline-dark">Edit</Button></td>
                <td><Button id = {this.props.listing.id} onClick={this.DeleteButtonHendlr} variant="outline-dark">Delete</Button></td>
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
                {this.props.listings.map((listing =>
                    <EditableTableRow key={listing.id} listing={listing}></EditableTableRow>
                    ))}
            </tbody>
        );
    }
}
 
export default InstructorAdvantureView;