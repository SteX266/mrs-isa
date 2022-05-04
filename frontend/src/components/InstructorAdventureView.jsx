import React, {Component} from "react";
import { Container, Nav, Navbar, Button, Table, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function  InstructorAdventureView () {
    const [adventures,setAdventures] = React.useState([
                    {id: 1, name: "Prva Avantura", location : "Serbia", people: 4,  price: 34},
                    {id: 2, name: "Druga Avantura", location : "Bosnia", people: 3,price: 45},
                    {id: 3, name: "Prva Avantura", location : "Serbia", people: 4,  price: 34},
                    {id: 4, name: "treca Avantura", location : "Bosnia", people: 3,price: 45},
                    {id: 5, name: "cetvrta Avantura", location : "Serbia", people: 4,  price: 34},
                    {id: 6, name: "Dda Avantura", location : "Bosnia", people: 3,price: 45},
                    {id: 7, name: " Avantura", location : "Serbia", people: 4,  price: 34},
                    {id: 8, name: "Dru", location : "Bosnia", people: 3,price: 45},
                    {id: 9, name: "Pa Avantura", location : "Serbia", people: 4,  price: 34},
                    {id: 10, name: " Avantura", location : "Bosnia", people: 3,price: 45},
                    {id: 11, name: "a Avantura", location : "Serbia", people: 4,  price: 34},
                    {id: 12, name: " Avatura", location : "Bosnia", people: 3,price: 45}]);
    const [searchAdventures ,setSearchAdventures] = React.useState(adventures);
                
    function searchFieldChanged(event){
        const filtering = [];
        const searchParam = event.target.value.toLowerCase();
        for (let index = 0; index < adventures.length; index++) {
            const adventure = adventures[index];
            if (adventure.name.toLowerCase().includes(searchParam) || adventure.location.toLowerCase().includes(searchParam)) {
                filtering.push(adventure);
            }
        }
        setSearchAdventures(filtering);
    }
     
        return (
        <Container style={{maxWidth: '100%'}}>
            <Navbar collapseOnSelect className="rounded border border-dark">
                <Container><Navbar.Text className="text-dark">{searchAdventures.length} Adventures</Navbar.Text></Container>

                <Container><SearchForm searchFieldChanged={searchFieldChanged}/></Container>

                <Container>
                    <Nav className="ms-auto">
                        <Link to="create-adventure">
                        <Button variant="outline-dark">
                            Create New Adventure
                        </Button>
                        </Link>
                    </Nav>
                </Container>
            </Navbar>

            <Table striped hover className="rounded" >
                <TableHeader headers={["Name", "Location", "People", "Price", "Edit" , "Delete"]}></TableHeader>
                <TableBody adventures={searchAdventures}></TableBody>
            </Table>
        </Container>);}

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
            <tr id={this.props.adventure.id}>
                <td>{this.props.adventure.name}</td>
                <td>{this.props.adventure.location}</td>
                <td>{this.props.adventure.people}</td>
                <td>{this.props.adventure.price}€</td>
                <td><Button href={`/adventures/${this.props.adventure.id}`} variant="outline-dark">Edit</Button></td>
                <td><Button id = {this.props.adventure.id} onClick={this.DeleteButtonHendlr} variant="outline-dark">Delete</Button></td>
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
                {this.props.adventures.map((adventure =>
                    <EditableTableRow key={adventure.id} adventure={adventure}></EditableTableRow>
                    ))}
            </tbody>
        );
    }
}