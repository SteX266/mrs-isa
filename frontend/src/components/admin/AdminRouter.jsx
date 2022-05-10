import React from "react";
import AdminNavbar from "./AdminNavbar";
import RegistrationRequest from "./RegistrationRequest";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AdminRouter() {
  return (
    <BrowserRouter>
      <AdminNavbar></AdminNavbar>
      <Routes>
        <Route path="/admin" element={<h1>Admin home page </h1>} />
        <Route
          path="/admin/registration-request"
          element={<RegistrationRequest />}
        />
      </Routes>
    </BrowserRouter>
  );
}
