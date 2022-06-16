import React, { useState, useEffect } from "react";
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useParams } from "react-router";

import { momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment-timezone";

moment.tz.setDefault("Europe/Belgrade");
const localizer = momentLocalizer(moment);

export default function BigCalendar() {
  const params = useParams();

  const [allEvents, setAllEvents] = useState([]);
  const [availabilityPeriods, setAvailabilityPeriods] = useState([]);

  useEffect(() => {
    getReservations(params.id);
    getAvailabilityPeriods(params.id);
  }, []);

  function getAvailabilityPeriods(entityId) {
    const token = JSON.parse(localStorage.getItem("userToken"));
    const requestOptions = {
      method: "GET",
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
        "http://localhost:8080/entity/getEntityAvailabilityPeriods",
        requestOptions
      )
      .then((res) => {
        let events = [];
        res.data.forEach((element) => {
          let startDate = new Date(element.dateFrom);
          let endDate = new Date(element.dateTo);
          events.push({
            allDay: false,
            title: "Available",
            start: startDate,
            end: endDate,
          });
        });
        setAllEvents(events);
      });
  }

  function getReservations(entityId) {
    const token = JSON.parse(localStorage.getItem("userToken"));
    const requestOptions = {
      method: "GET",
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
          console.log(element);
          let startDate = new Date(element.startDate);
          let endDate = new Date(element.endDate);
          events.push({
            allDay: false,
            title: element.client,
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
        style={{ height: 500, margin: "50px", backgroundColor: "white" }}
      />
    </div>
  );
}
