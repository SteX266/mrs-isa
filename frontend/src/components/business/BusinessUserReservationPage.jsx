import React, { useState } from "react";
import ReservationsTable from "./ReservationsTable";
export default function BusinessUserReservationPage(props) {
  const [userId, setUserId] = useState("1");
  return (
    <>
    <ReservationsTable userId={userId}></ReservationsTable>
    </>
  );
}
