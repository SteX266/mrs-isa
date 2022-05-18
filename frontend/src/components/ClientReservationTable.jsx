import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Navbar, Table, Form, FormControl, Nav, Button } from 'react-bootstrap';

export default function ClientReservationsTable(props) {
    const [reservations, setReservations] = useState([]);
    const [searchReservations, setSearchReservations] = useState(reservations);
    const userId = props.userId;
    const headers = ["Name","Location", "Start of reservation", "Duration", "Number of visitors", "Total fee", "Owner", "Status"];

    useEffect(() => {
        getReservations(props.clientEmail);
    });
    function getReservations(clientEmail) {

        const token = JSON.parse(localStorage.getItem('userToken'));
        const requestOptions = {
            headers: {'Content-type':'application/json', Authorization:'Bearer ' + token.accessToken},
            params:{
                "email":clientEmail,
            }
        };

        axios.get("http://localhost:8080/api/reservation/getClientReservations", requestOptions)
      .then((res) => {
        setReservations(res.data);
        setSearchReservations(res.data);
      });
    }
    function onSearchFieldChange(event) {
        const searchResult = [];
        const searchParam = event.target.value.toLowerCase();
        for (let index = 0; index < this.state.vessels.length; index++) {
            const reservation = reservations[index];
            if (reservation.name.toLowerCase().includes(searchParam) || reservation.client.toLowerCase().includes(searchParam)) {
                searchResult.push(reservation);
            }
        }
        setSearchReservations(searchResult);
    }
    return (
    <Container style={{maxWidth: '95%'}}>
    <Navbar collapseOnSelect className="rounded border border-dark">
                <Container><Navbar.Text className="text-dark">{reservations.length} Vessels </Navbar.Text></Container>

                <SearchForm onSearchFieldChange={onSearchFieldChange}/>

            </Navbar>
    <Table striped hover className='rounded'>
        <TableHeader headers={headers}/>
        <TableBody reservations={searchReservations}/>
    </Table>

    </Container>);
}
function SearchForm(props){
    return (
        <Form>
            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" onChange={props.onSearchFieldChange}/>
        </Form>
    );
}


function TableHeader(props) {
    return (
        <thead>
            <tr>
                {props.headers.map(header => 
                    <th>{header}</th>
                )}
            </tr>
        </thead>
    );
}

function TableBody(props) {
    return (
        <tbody>
            {props.reservations.map((reservation =>
                <Reservation key={reservation.id} reservation={reservation}/>
                ))}
        </tbody>
    );
}

function Reservation(props) {
    const [reservation, setReservation] = useState(props.reservation);
    const [button, setButton] = useState(getButton());
    function confirmReservation() {
        let newReservation = reservation;
        newReservation.status = "confirmed";
        setReservation(newReservation);
        setButton(getButton())
        // saveReservation();
    }
    function cancelReservation() {
        let newReservation = reservation;
        newReservation.status = "canceled";
        setReservation(newReservation);
        setButton(getButton());
        // saveReservation();
    }

    function saveReservation() {
        const requestOptions = {
            headers: {
               Accept: 'application/json',
             'Content-Type': 'application/json',
             'Access-Control-Allow-Origin': '*',
               
               },
            data:{
                "reservation": reservation
            }
        };
        axios.post("http://localhost:8080/api/reservation/saveReservation", requestOptions).then(function (response) {
            console.log(response.data);
        }).catch(function (response) {
            console.log(response.status);
        });
    }
    function getButton() {
        if(reservation.status === "waiting") {
            return <Button onClick={confirmReservation} variant="outline-dark">Confirm reservation</Button>;
        } else if(reservation.status === "confirmed") {
            return <Button onClick={cancelReservation} variant="outline-dark">Cancel reservation</Button>;
        } else {
            return <></>;
        }
    }
    
    return (
        <tr id={reservation.id}>
            <td> {reservation.entityName}</td>
            <td>{reservation.location}</td>
            <td>{reservation.start}</td>
            <td>{reservation.duration}</td>
            <td>{reservation.visitors}</td>
            <td>{reservation.fee}€</td>
            <td>{reservation.client}</td>
            <td>{reservation.status}</td>
            <td>{button}</td>
        </tr>
    );
}