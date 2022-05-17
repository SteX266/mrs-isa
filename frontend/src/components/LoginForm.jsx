import React,{useEffect, useState} from 'react';
import {Navigate} from 'react-router-dom';
import axios from 'axios';


function LoginForm()   {  

  const [errors, setErrors] = useState({email:'', password:''});


const[username,setUsername] = useState("");
const[password, setPassword] = useState("");
const[link, setLink] = useState("");

if (link !== ""){
return <Navigate to={link}/>;

}



const handleSubmit = (event) =>{
  event.preventDefault();
  if(validateForm()){
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'  },
      body: JSON.stringify({
          username,
          password
      })
  };
  fetch("http://localhost:8080/auth/login", requestOptions).then(async response=>{
    const data = await response.json();
    if(!response.ok){

      console.log("Kredencijali nisu validni");
    }
    if(data.username !== null){
      console.log("Uspesan login!");
      localStorage.setItem('userToken', JSON.stringify(data));
      localStorage.setItem('username', username);
      let role = data.userRole;



      
      if (role == "CLIENT"){
        setLink("/client/home");
      }
      else if (role === "ADMIN"){
        setLink("/admin/home");
      }
      else if (role === "VACATION_OWNER"){
        setLink("/host/home");

      }
      else if (role === "SHIP_OWNER"){
        setLink("/captain/home");

      }
      else if (role === "INSTRUCTOR"){
        setLink("/instructor/home");

      }

      
      
    }
    else{
      console.log("Neuspesan login");
    }

  });

  }

}

const validateForm = () => {
  let currentErrors = errors;

  let valid = true;

  if (username === ""){
      currentErrors.email = "Email field must be filled";
      valid = false;
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

  setErrors({email:currentErrors.email, password:currentErrors.password});
  return valid;
} 


const handleChange = (event) => {

  event.preventDefault();
  const { name, value } = event.target;

  switch (name) {
  case 'email':
      setUsername(value);
      break;
  case 'password':
      setPassword(value);
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
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input onChange={handleChange} name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div   id="emailHelp" class="form-text">Your email address will never be shared with anyone.</div>
    {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
  </div>
  <div class="mb-6">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input onChange={handleChange} name="password" type="password" class="form-control" id="exampleInputPassword1"/>
    {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
  </div>

  <button onClick={handleSubmit} type="submit" class="btn btn-primary">Login</button>
</form>
</div>
</div>
</>}

export default LoginForm;

