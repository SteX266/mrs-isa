import React from "react";
import AdminNavbar from "./AdminNavbar";
import RegistrationRequest from "./RegistrationRequest";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminProfile from "./AdminProfile";
import AdminRegistration from "./AdminRegistration";

export default function AdminRouter() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminNavbar></AdminNavbar>}>
        <Route path="registration-request" element={<RegistrationRequest />} />
        <Route path="profile" element={<AdminProfile />} />
        <Route path="registerAdmin" element={<AdminRegistration />} />
        /admin/registerAdmin`
      </Route>
    </Routes>
  );
}
