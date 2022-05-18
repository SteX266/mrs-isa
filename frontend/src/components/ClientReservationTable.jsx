import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Navbar, Table, Form, FormControl, Nav, Button } from 'react-bootstrap';

export default function ClientReservationsTable(props) {
    const [reservations, setReservations] = useState([]);
    const [searchReservations, setSearchReservations] = useState(reservations);
    const userId = props.userId;
    const headers = ["Name","Location", "Start of reservation", "End of reservation", "Number of visitors", "Cancelation fee", "Owner", "Status"];

    useEffect(() => {
        getReservations(props.clientEmail);
    },[]);
    function getReservations(clientEmail) {

        const token = JSON.parse(localStorage.getItem('userToken'));
        const requestOptions = {
            method:'POST',
            headers: {'Content-type':'application/json', Authorization:'Bearer ' + token.accessToken},
            params:{
                "email":clientEmail,
            }
        };

        axios.get("http://localhost:8080/reservation/getClientReservations", requestOptions)
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
        newReservation.status = "CANCELED";
        setReservation(newReservation);
        setButton(getButton());
        saveReservation(newReservation.id);
    }

    function saveReservation(reservationId) {
        console.log("CUVAAAAAJ");
        console.log(reservationId);
        const token = JSON.parse(localStorage.getItem('userToken'));
        const requestOptions = {
            method:'POST',
            headers: {'Content-type':'application/json', Authorization:'Bearer ' + token.accessToken},
            params:{
                "entityId":reservationId,
            }
        };

        axios.get("http://localhost:8080/reservation/cancelReservation", requestOptions)
    }
    function getButton() {
        if(reservation.status == "WAITING") {
            return <Button onClick={cancelReservation} variant="outline-dark">Cancel reservation</Button>;
        } else {
            return <></>;
        }
    }
    
    return (
        <tr id={reservation.id}>
            <td> {reservation.entityName}</td>
            <td>{reservation.location}</td>
            <td>{reservation.startDate}</td>
            <td>{reservation.endDate}</td>
            <td>{reservation.visitors}</td>
            <td>{reservation.fee}%</td>
            <td>{reservation.owner}</td>
            <td>{reservation.status}</td>
            <td>{button}</td>
        </tr>
    );
}