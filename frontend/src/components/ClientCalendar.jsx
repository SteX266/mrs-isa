import React, { useState, useEffect } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useParams } from "react-router";
import BigCalendar from "./BigCalendar";

function ClientCalendar() {
  const params = useParams();
  const [excludeDates, setExcludeDates] = useState([]);
  const [events, setEvents] = useState([]);
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
        let dates = [];
        res.data.forEach((element) => {
          let startDate = new Date(element.startDate);
          let endDate = new Date(element.endDate);
          let event = { start: startDate, end: endDate };
          dates.push(event);
          addDatesToExclude(startDate, endDate);
        });
        setEvents(dates);
      });
  }

  function getAvailabilityPeriods(entityId) {
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
        "http://localhost:8080/reservation/getAvailabilityPeriods",
        requestOptions
      )
      .then((res) => {
        let dates = [];
        res.data.forEach((element) => {
          let startDate = new Date(element.startDate);
          let endDate = new Date(element.endDate);
          let event = { start: startDate, end: endDate };
          dates.push(event);
          addDatesToExclude(startDate, endDate);
        });
        setEvents(dates);
      });
  }

  function addDatesToExclude(startDate, endDate) {
    let dates = [];
    const date = new Date(startDate);
    date.setHours(0, 0, 0, 0);
    const end = new Date(endDate);
    end.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 1);
    while (date.getTime() < end.getTime()) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    setExcludeDates(dates);
  }

  function StartDateSelected(date) {
    setStartDate(date);
    setEndDate(date);
    events.forEach((event) => {
      if (
        event.start.getTime() < lastavailableDate.getTime() &&
        event.start.getTime() > date.getTime()
      ) {
        setLastAvailableDate(event.start);
      }
    });
  }
  // eslint-disable-next-line react/display-name
  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button className="btn btn-warning" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  const filterStartTime = (time) => {
    const selectedDate = new Date(time);
    const currentDate = new Date();
    if (currentDate.getTime() >= selectedDate.getTime()) return false;
    let isFree = true;
    events.forEach((event) => {
      if (
        selectedDate.getTime() >= event.start.getTime() &&
        selectedDate.getTime() <= event.end.getTime()
      )
        isFree = false;
    });
    return isFree;
  };

  const filterEndTime = (time) => {
    const selectedDate = new Date(time);
    if (startDate.getTime() >= selectedDate.getTime()) return false;
    let isFree = true;
    events.forEach((event) => {
      if (
        selectedDate.getTime() >= event.start.getTime() &&
        selectedDate.getTime() <= event.end.getTime()
      )
        isFree = false;
    });
    return isFree;
  };

  return (
    <>
      <div className="container" style={{}}>
        <div className="row" style={{ padding: "15px" }}>
          <div className="col-md">
            Start date:
            <DatePicker
              selected={startDate}
              onChange={(date) => StartDateSelected(date)}
              showTimeSelect
              minDate={new Date()}
              excludeDates={excludeDates}
              dateFormat="MMMM d, yyyy h:mm aa"
              customInput={<CustomInput />}
              filterTime={filterStartTime}
              withPortal
            />
          </div>
        </div>
        <div className="row" style={{ padding: "15px" }}>
          <div className="col-md">
            End date:
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              minDate={startDate}
              maxDate={lastavailableDate}
              showTimeSelect
              filterTime={filterEndTime}
              dateFormat="MMMM d, yyyy h:mm aa"
              customInput={<CustomInput />}
              withPortal
            />
          </div>
        </div>
        <button className="btn btn-warning" style={{ margin: "15px" }}>
          Reserve
        </button>
        <BigCalendar />
      </div>
    </>
  );
}
export default ClientCalendar;
