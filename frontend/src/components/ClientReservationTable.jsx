import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Navbar, Table, Form, FormControl, Button } from 'react-bootstrap';

export default function ClientReservationsTable(props) {
    const [upcomingReservations, setUpcomingReservations] = useState([]);
    const [pastReservations, setPastReservations] = useState([]);
    const [searchUpcomingReservations, setSearchUpcomingReservations] = useState([]);
    const [searchPastReservations, setSearchPastReservations] = useState([]);

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

        let future = [];
        let past = [];

        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;

        var todayDate = new Date(dateTime);
        
        res.data.forEach(element => {
            var startDate = new Date(element.startDate);
            if (startDate < todayDate){
                element.status = "EXPIRED";
                past.push(element);
            }
            else{
                future.push(element);
            }
        });
        setUpcomingReservations(future);
        setPastReservations(past);
        setSearchPastReservations(past);
        setSearchUpcomingReservations(future);

      });
    }
    function onSearchFieldChange(event) {
        console.log(pastReservations);

        const searchResult = [];
        const searchParam = event.target.value.toLowerCase();
        for (let index = 0; index < upcomingReservations.length; index++) {
            const reservation = upcomingReservations[index];
            if (reservation.entityName.toLowerCase().includes(searchParam) || reservation.owner.toLowerCase().includes(searchParam) || reservation.location.toLowerCase().includes(searchParam)) {
                searchResult.push(reservation);
            }
        }
        setSearchUpcomingReservations(searchResult);
    }
    return (
    <Container style={{maxWidth: '95%'}}>
    <Navbar collapseOnSelect className="rounded border border-dark">
                <Container><Navbar.Text className="text-dark"> Upcoming reservations </Navbar.Text></Container>

                <SearchForm onSearchFieldChange={onSearchFieldChange}/>

            </Navbar>
    <Table striped hover className='rounded'>
        <TableHeader headers={headers}/>
        <TableBody reservations={searchUpcomingReservations}/>
    </Table>


    <Navbar collapseOnSelect className="rounded border border-dark">
                <Container><Navbar.Text className="text-dark"> Reservation history </Navbar.Text></Container>

                <SearchForm onSearchFieldChange={onSearchFieldChange}/>

            </Navbar>


            <Table striped hover className='rounded'>
        <TableHeader headers={headers}/>
        <TableBody reservations={searchPastReservations}/>
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
                {props.headers.map((header,index) => 
                    <th key={index}>{header}</th>
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

    function cancelReservation() {
        let newReservation = reservation;
        newReservation.status = "CANCELED";
        setReservation(newReservation);
        setButton(getButton());
        saveReservation(newReservation.id);
    }

    function saveReservation(reservationId) {
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
        if(reservation.status == "APPROVED") {
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