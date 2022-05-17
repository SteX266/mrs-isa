import React from "react";
import "bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BusinessUserHomePage from "./business/BusinessUserHomePage";
import BusinessUserViewServicesPage from "./business/BusinesUserViewPage";
import BusinessUserEditPage from "./business/BusinessUserEditPage";
import BusinessUserReservationPage from "./business/BusinessUserReservationPage";
import BusinessUserCreatePage from "./business/BusinessUserCreatePage";
import BusinessUserProfilePage from "./business/BusinessUserProfilePage";
import ChangePasswordPage from "./business/ChangePasswordPage";
import BusinessUserNavbar from "./business/BusinessUserNavbar";
import Header from "./Header";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";
import EntityList from "./EntityList";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ClientProfile from "./ClientProfile";
import AdminNavbar from "./admin/AdminNavbar";
import RegistrationRequest from "./admin/RegistrationRequest";
import AdminProfile from "./admin/AdminProfile";
import AdminRegistration from "./admin/AdminRegistration";
import NavigationBarClient from "./NavigationBarClient"; 

export default function Router() {
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
    <>
      <BrowserRouter>
        <Routes>
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

          <Route path="/admin/*" element={<AdminNavbar></AdminNavbar>}>
            <Route
              path="registration-request"
              element={<RegistrationRequest />}
            />
            <Route path="profile" element={<AdminProfile />} />
            <Route path="registerAdmin" element={<AdminRegistration />} />
          </Route>

          <Route path="/client/*" element={<NavigationBarClient></NavigationBarClient>}>
            <Route path ="home" element ={<EntityList/>} />
            <Route path="clientProfile" element={<AdminProfile/>}/>
          </Route>

          

        </Routes>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header></Header>
                <NavigationBar />
                <EntityList type="ALL_ENTITIES" />
              </>
            }
          />
          <Route
            path="/registration"
            element={
              <>
                <Header></Header>
                <NavigationBar />
                <RegisterForm />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Header></Header>
                <NavigationBar />
                <LoginForm />
              </>
            }
          />
          <Route
            path="/clientProfile"
            element={
              <>
                <Header></Header>
                <NavigationBar />
                <ClientProfile />
              </>
            }
          />
          <Route
            path="/vacations"
            element={
              <>
                <Header></Header>
                <NavigationBar />
                <EntityList type="VACATION" />
              </>
            }
          />
          <Route
            path="/vessels"
            element={
              <>
                <Header></Header>
                <NavigationBar />
                <EntityList type="VESSEL" />
              </>
            }
          />
          <Route
            path="/adventures"
            element={
              <>
                <Header></Header>
                <NavigationBar />
                <EntityList type="ADVENTURE" />
              </>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
