//import format from "date-fns/format";
//import getDay from "date-fns/getDay";
//import parse from "date-fns/parse";
//import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect } from "react";
//import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
//import TimePicker from "react-bootstrap-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useParams } from "react-router";
/*
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

const events = [
  {
    title: "Unavailable",
    allDay: true,
    start: new Date(2021, 6, 1),
    end: new Date(2021, 6, 1),
  },
  {
    title: "Unavailable",
    start: new Date(2021, 6, 7),
    end: new Date(2021, 6, 10),
  },
  {
    title: "Unavailable",
    start: new Date(2021, 6, 20),
    end: new Date(2021, 6, 23),
  },
];

function ClientCalendar() {
  const params = useParams();
  const [newEvent, setNewEvent] = useState({
    title: "Reserved",
    start: "",
    end: "",
  });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

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
      <br></br>
      <br></br>
      <h1>Make your reservation</h1>
      <br></br>
      <br></br>
      <div>
        <DatePicker
          placeholderText="Start Date"
          style={{ marginRight: "10px", padding: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <TimePicker style={{ width: "20%" }} format="24"></TimePicker>
        <DatePicker
          placeholderText="End Date"
          style={{ marginRight: "10px", padding: "10px" }}
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <TimePicker style={{ width: "20%" }}></TimePicker>
        <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Add Event
        </button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
}*/
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
    <div>
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
  );
}
export default ClientCalendar;
