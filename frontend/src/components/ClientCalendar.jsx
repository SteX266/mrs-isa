import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
//import TimePicker from "react-bootstrap-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useParams } from "react-router";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function BigCalendar() {
  const params = useParams();

  const [allEvents, setAllEvents] = useState([]);



  useEffect(() => {
    getReservations(params.id);
  }, []);

  function getReservations(entityId) {
    const token = JSON.parse(localStorage.getItem("userToken"));
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token.accessToken,
      },
      params: {
        id: entityId,
      },
    };

    axios
      .get(
        "http://localhost:8080/reservation/getEntityReservations",
        requestOptions
      )
      .then((res) => {
        let events = [];
        res.data.forEach((element) => {
          let startDate = new Date(element.startDate);
          let endDate = new Date(element.endDate);
          events.push({
            title: "Unavailable",
            start: startDate,
            end: endDate,
          });
        });
        setAllEvents(events);
      });
  }
  return (
    <div className="App">


      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px", backgroundColor:"white" }}
      />
    </div>
  );
}
function ClientCalendar() {
  const params = useParams();
  const [excludeDates, setExcludeDates] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [lastavailableDate, setLastAvailableDate] = useState(
    new Date("2034/02/08")
  );

  useEffect(() => {
    getReservations(params.id);
  }, []);

  function getReservations(entityId) {
    const token = JSON.parse(localStorage.getItem("userToken"));
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token.accessToken,
      },
      params: {
        id: entityId,
      },
    };

    axios
      .get(
        "http://localhost:8080/reservation/getEntityReservations",
        requestOptions
      )
      .then((res) => {
        console.log(res.data);
        let events = [];
        res.data.forEach((element) => {
          let startDate = new Date(element.startDate);
          let endDate = new Date(element.endDate);
          events.push({ start: startDate, end: endDate });
        });
        setExcludeDates(events);
      });
  }
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  function StartDateSelected(date) {
    setStartDate(date);
    setEndDate(date);
    excludeDates.forEach((event) => {
      if (event.start < lastavailableDate && event.start > date) {
        setLastAvailableDate(event.start);
      }
    });
  }

  return (
    <>
    <div className="container" style={{}}>
      <div className="row" style={{padding:"15px"}}>

        <div className="col-md">

      Start date:
      <DatePicker
        selected={startDate}
        onChange={(date) => StartDateSelected(date)}
        showTimeSelect
        minDate={new Date()}
        excludeDateIntervals={excludeDates}
        filterTime={filterPassedTime}
        dateFormat="MMMM d, yyyy h:mm aa"
        withPortal
      />
      </div>
      </div>
      <div className = "row" style={{padding:"15px"}}>
      <div className="col-md">
        End date:
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        minDate={startDate}
        maxDate={lastavailableDate}
        showTimeSelect
        filterTime={filterPassedTime}
        dateFormat="MMMM d, yyyy h:mm aa"
        withPortal
      />
      </div>
      </div>
      <button className="btn btn-warning" style={{margin:"15px"}}>Reserve</button>
      <BigCalendar/>
    </div>
    </>
  );
}
export default ClientCalendar;
