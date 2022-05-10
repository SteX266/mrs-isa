import React,{useEffect, useState} from 'react';
import axios from 'axios';
import "../style/Errors.css";

function RegisterForm()  {  

  const [errors, setErrors] = useState({name:'',surname:'',phoneNumber:'', addressLine:'', email:'', repeatedPassword:'', password:''});


  const[name, setName] = useState("");
  const[surname,setSurname] = useState("");
  const[phoneNumber,setPhoneNumber] = useState("");
  const[addressLine, setAddressLine] = useState("");
  const[email,setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[repeatedPassword, setRepeatedPassword] = useState("");



  const handleSubmit = (event) => {
      event.preventDefault();
      if(validateForm()){

        const requestOptions = {
          headers: {
             Accept: 'application/json',
           'Content-Type': 'application/json',
           'Access-Control-Allow-Origin': '*',
             
             },
          params:{
              "email":email,
              "name" : name,
              "surname":surname,
              "phoneNumber":phoneNumber,
              "addressLine": addressLine,
              "password":password
          }

 
      };
  //    axios.get("http://localhost:8080/api/user/registerUser", requestOptions);
    console.log('Korisnik uspesno registrovan');

      }
    }
  
  const emailValidation = (email) => {
      const regex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      return (!email || regex.test(email) === false);
    }

  const validateForm = () => {
    let currentErrors = errors;

    let valid = true;

    if (name === ""){
        currentErrors.name = "Name field must be filled";
        valid = false;
    }
    else{
        currentErrors.name = "";
    }
    if (surname === ""){
        currentErrors.surname = "Surname field must be filled";

        valid = false;
    }
    else{
        currentErrors.surname = "";
    }
    if (phoneNumber === "" || phoneNumber.length < 9){
        currentErrors.phoneNumber = "Phone number must contain at least 9 characters";

        valid = false;
    }
    else{
        currentErrors.phoneNumber = "";
    }
    if (addressLine === "" ){
        currentErrors.addressLine = "Address line field is required!";
        valid = false;
    }
    else{
        currentErrors.addressLine = "";
    }
    if (emailValidation(email)){

      currentErrors.email = "Email is not valid!";
    }
    else{
      currentErrors.email = "";
    }
    if (password ==="" || password.length < 5){
      currentErrors.password = "Password must be at least 5 characters long";
    }
    else{
      currentErrors.password = "";
    }

    if(password !== repeatedPassword){

      currentErrors.repeatedPassword = "Passwords do not match";
    }
    else{
      currentErrors.repeatedPassword = "";
    }



    setErrors({name:currentErrors.name, surname:currentErrors.surname, phoneNumber:currentErrors.phoneNumber, addressLine:currentErrors.addressLine, email:currentErrors.email, password:currentErrors.password, repeatedPassword:currentErrors.repeatedPassword});
    return valid;
  }


  

  const handleChange = (event) => {

    event.preventDefault();
    const { name, value } = event.target;

    switch (name) {
      case 'name': 
        setName(value);
        break;
      case 'surname': 
        setSurname(value);
        break;
      case 'phoneNumber':
        setPhoneNumber(value);
        break;
    case 'addressLine':
        setAddressLine(value);
        break;
    case 'email':
        setEmail(value);
        break;
    case 'password':
        setPassword(value);
        break;
    case 'repeatedPassword':
        setRepeatedPassword(value);
        break;
      default:
        break;
    }

}


    return <>

<div class="album py-5 bg-light">
<div class="container">
<form>
  <div class="mb-6">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input name="email" onChange={handleChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">Your email address will not be shared with anyone.</div>
    {errors.email.length > 0 && <span className='error'>{errors.email}</span>}

  </div>
  <div class="mb-6">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input name="password" onChange={handleChange} type="password" class="form-control" id="exampleInputPassword1"/>
    {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
  </div>
  <div class="mb-6">
    <label for="exampleInputPassword1" class="form-label">Repeat passwrod</label>
    <input name="repeatedPassword" onChange={handleChange} type="password" class="form-control" id="exampleInputPassword1"/>
    {errors.repeatedPassword.length > 0 && <span className='error'>{errors.repeatedPassword}</span>}
  </div>
  <div class="mb-6">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input name="name" onChange={handleChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {errors.name.length > 0 && <span className='error'>{errors.name}</span>}
  </div>
  <div class="mb-6">
    <label for="exampleInputEmail1" class="form-label">Surname</label>
    <input name="surname" onChange={handleChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {errors.surname.length > 0 && <span className='error'>{errors.surname}</span>}
  </div>
  <div class="mb-6">
    <label for="exampleInputEmail1" class="form-label">Home address</label>
    <input name="addressLine" onChange={handleChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {errors.addressLine.length > 0 && <span className='error'>{errors.addressLine}</span>}
  </div>
  <div class="mb-6">
    <label for="exampleInputEmail1" class="form-label">Phone number</label>
    <input name="phoneNumber" onChange={handleChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {errors.phoneNumber.length > 0 && <span className='error'>{errors.phoneNumber}</span>}
  </div>

  <button type="submit" onClick={handleSubmit} class="btn btn-primary">Register</button>
</form>

</div>
</div>
</>
}

export default RegisterForm;