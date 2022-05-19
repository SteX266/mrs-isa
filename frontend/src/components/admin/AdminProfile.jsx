import Dialog from "../Dialog";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../style/Errors.css";
function ClientProfile() {
  const [showTaskDialog, setShowTaskDialog] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    phoneNumber: "",
    addressLine: "",
    streetNumber: "",
    city: "",
    country: "",
    state: "",
  });

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addressLine, setAddressLine] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const requestOptions = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        params: {
          email: email,
          name: name,
          surname: surname,
          phoneNumber: phoneNumber,
          addressLine: addressLine,
          streetNumber: streetNumber,
          city: city,
          country: country,
          state: state,
        },
      };
      axios.get("http://localhost:8080/api/user/editUserData", requestOptions);

      console.log("Podaci uspesno izmenjeni!");
    } else {
      console.log("Invalid Form");
    }
  };

  const confirmDeleteProfile = () => {
    const requestOptions = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      params: {
        user: "stex",
      },
    };

    axios.get(
      "http://localhost:8080/api/user/createCancellationRequest",
      requestOptions
    );
    setShowTaskDialog(false);
  };

  const cancelDeleteProfile = () => {
    setShowTaskDialog(false);
  };

  const validateForm = () => {
    let currentErrors = errors;

    let valid = true;

    if (name === "" || name.length < 3) {
      currentErrors.name = "Name must contain at least 3 characters";
      valid = false;
    } else {
      currentErrors.name = "";
    }
    if (surname === "" || surname.length < 3) {
      currentErrors.surname = "Surname must contain at least 3 characters";

      valid = false;
    } else {
      currentErrors.surname = "";
    }
    if (phoneNumber === "" || phoneNumber.length < 9) {
      currentErrors.phoneNumber =
        "Phone number must contain at least 9 characters";

      valid = false;
    } else {
      currentErrors.phoneNumber = "";
    }
    if (addressLine === "") {
      currentErrors.addressLine = "Address line field is required!";
      valid = false;
    } else {
      currentErrors.addressLine = "";
    }
    if (streetNumber === "") {
      currentErrors.streetNumber = "Street number field is required!";
      valid = false;
    } else {
      currentErrors.streetNumber = "";
    }
    if (city === "") {
      currentErrors.city = "City field is required!";
      valid = false;
    } else {
      currentErrors.city = "";
    }
    if (country === "") {
      currentErrors.country = "Country field is required!";
      valid = false;
    } else {
      currentErrors.country = "";
    }

    setErrors({
      name: currentErrors.name,
      surname: currentErrors.surname,
      phoneNumber: currentErrors.phoneNumber,
      addressLine: currentErrors.addressLine,
      streetNumber: currentErrors.streetNumber,
      city: currentErrors.city,
      country: currentErrors.country,
      state: "",
    });
    return valid;
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "surname":
        setSurname(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "addressLine":
        setAddressLine(value);
        break;
      case "streetNumber":
        setStreetNumber(value);
        break;
      case "city":
        setCity(value);
        break;
      case "country":
        setCountry(value);
        break;
      case "state":
        setState(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const requestOptions = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios
      .get("http://localhost:8080/api/user/getCurrentUser", requestOptions)
      .then((res) => {
        console.log(res.data.name);
        setName(res.data.name);
        setSurname(res.data.surname);
        setEmail(res.data.email);
        setPhoneNumber(res.data.phoneNumber);
        setAddressLine(res.data.addressLine);
        setStreetNumber(res.data.streetNumber);
        setCity(res.data.city);
        setCountry(res.data.country);
        setState(res.data.state);

        console.log(name);
        console.log(surname);
      });
  }, []);

  return (
    <>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt=""
              />
              <span className="font-weight-bold">
                {name} {surname}
              </span>
              <span className="text-black-50">{email}</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Name</label>
                  <input
                    onChange={handleChange}
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    value={name}
                  />
                  {errors.name.length > 0 && (
                    <span className="error">{errors.name}</span>
                  )}
                </div>
                <div className="col-md-6">
                  <label className="labels">Surname</label>
                  <input
                    onChange={handleChange}
                    name="surname"
                    type="text"
                    className="form-control"
                    placeholder="surname"
                    value={surname}
                  />
                  {errors.surname.length > 0 && (
                    <span className="error">{errors.surname}</span>
                  )}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Phone Number</label>
                  <input
                    onChange={handleChange}
                    name="phoneNumber"
                    type="text"
                    className="form-control"
                    placeholder="enter phone number"
                    value={phoneNumber}
                  />
                  {errors.phoneNumber.length > 0 && (
                    <span className="error">{errors.phoneNumber}</span>
                  )}
                </div>
                <div className="col-md-12">
                  <label className="labels">Address Line</label>
                  <input
                    onChange={handleChange}
                    name="addressLine"
                    type="text"
                    className="form-control"
                    placeholder="enter address line"
                    value={addressLine}
                  />
                  {errors.addressLine.length > 0 && (
                    <span className="error">{errors.addressLine}</span>
                  )}
                </div>
                <div className="col-md-12">
                  <label className="labels">Street number</label>
                  <input
                    onChange={handleChange}
                    name="streetNumber"
                    type="text"
                    className="form-control"
                    placeholder="enter street number"
                    value={streetNumber}
                  />
                  {errors.streetNumber.length > 0 && (
                    <span className="error">{errors.streetNumber}</span>
                  )}
                </div>
                <div className="col-md-12">
                  <label className="labels">City</label>
                  <input
                    onChange={handleChange}
                    name="city"
                    type="text"
                    className="form-control"
                    placeholder="enter city"
                    value={city}
                  />
                  {errors.city.length > 0 && (
                    <span className="error">{errors.city}</span>
                  )}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="labels">Country</label>
                  <input
                    onChange={handleChange}
                    name="country"
                    type="text"
                    className="form-control"
                    placeholder="country"
                    value={country}
                  />
                  {errors.country.length > 0 && (
                    <span className="error">{errors.country}</span>
                  )}
                </div>
                <div className="col-md-6">
                  <label className="labels">State/Region</label>
                  <input
                    onChange={handleChange}
                    name="state"
                    type="text"
                    className="form-control"
                    placeholder="state"
                    value={state}
                  />
                  {errors.state.length > 0 && (
                    <span className="error">{errors.state}</span>
                  )}
                </div>
              </div>
              <div className="mt-5 text-center">
                <button
                  onClick={handleSubmit}
                  className="btn btn-primary profile-button"
                  type="button"
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        show={showTaskDialog}
        title="Delete profile?"
        description="Are you sure you want to delete your profile?"
        confirmed={confirmDeleteProfile}
        canceled={cancelDeleteProfile}
      />
    </>
  );
}

export default ClientProfile;
