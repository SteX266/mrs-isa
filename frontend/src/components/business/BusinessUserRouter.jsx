import React from "react";
import "bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BusinessUserHomePage from "./BusinessUserHomePage";
import BusinessUserViewServicesPage from "./BusinesUserViewPage";
import BusinessUserEditPage from "./BusinessUserEditPage";
import BusinessUserReservationPage from "./BusinessUserReservationPage";
import BusinessUserCreatePage from "./BusinessUserCreatePage";
import BusinessUserProfilePage from "./BusinessUserProfilePage";
import ChangePasswordPage from "./ChangePasswordPage";
import Select from "./Select";
import BusinessUserNavbar from "./BusinessUserNavbar";
import Header from "./Header";
import Footer from "./Footer";
import React, { Component } from "react";
import NavigationBar from "./NavigationBar";
import EntityList from "./EntityList";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ClientProfile from "./ClientProfile";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";

export default function BusinesssUserRouter() {
  function Nested(type) {
    return (
      <>
        <Route path="home" element={<BusinessUserHomePage type={type} />} />
        <Route
          path="services"
          element={<BusinessUserViewServicesPage type={type} />}
        />
        <Route
          path="services/create"
          element={<BusinessUserCreatePage type={type} />}
        />
        <Route path="edit/:id" element={<BusinessUserEditPage type={type} />} />
        <Route
          path="reservations"
          element={<BusinessUserReservationPage type={type} />}
        />

        <Route
          path="profile"
          element={<BusinessUserProfilePage type={type} />}
        />
        <Route path="change-password" element={<ChangePasswordPage />} />
        <Route path="edit" element={<h1>Account</h1>} />
      </>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Select></Select>} />
        <Route
          path="/captain/*"
          element={<BusinessUserNavbar type="captain" />}
        >
          {Nested("captain")}
        </Route>

        <Route path="/host/*" element={<BusinessUserNavbar type="host" />}>
          {Nested("host")}
        </Route>
        <Route
          path="/instructor/*"
          element={<BusinessUserNavbar type="instructor" />}
        >
          {Nested("instructor")}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
