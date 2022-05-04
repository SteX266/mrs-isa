import Dialog from "./Dialog";
import React,{useState} from 'react';
import axios from 'axios';
import "../style/Errors.css"
function ClientProfile ()  {  
    
    const [showTaskDialog,setShowTaskDialog] = useState(false);
    const [errors, setErrors] = useState({name:'',surname:'',phoneNumber:'', addressLine:'', streetNumber:'', city:'', country:'', state:''});

    const[name, setName] = useState("");
    const[surname,setSurname] = useState("");
    const[phoneNumber,setPhoneNumber] = useState("");
    const[addressLine, setAddressLine] = useState("");
    const[streetNumber, setStreetNumber] = useState("");
    const[city, setCity] = useState("");
    const[country,setCountry] = useState("");
    const[state,setState] = useState("");



    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm()) {


            const requestOptions = {
                headers: {
                   Accept: 'application/json',
                 'Content-Type': 'application/json',
                 'Access-Control-Allow-Origin': '*',
                   
                   },
                params:{
                    "email":"stefan.milosevic.e14@gmail.com",
                    "name" : name,
                    "surname":surname,
                    "phoneNumber":phoneNumber,
                    "addressLine": addressLine,
                    "streetNumber":streetNumber,
                    "city":city,
                    "country":country,
                    "state":state
                }

       
            };
            axios.get("http://localhost:8080/api/user/editUserData", requestOptions);



          console.log('Podaci uspesno izmenjeni!');
        }else{
          console.log('Invalid Form')
        }
      }

    const confirmDeleteProfile = () => {
        const requestOptions = {
            headers: {
               Accept: 'application/json',
             'Content-Type': 'application/json',
             'Access-Control-Allow-Origin': '*',
               
               },
            params:{
                "user":"stex"
            }
   
        };

        axios.get("http://localhost:8080/api/user/createCancellationRequest", requestOptions);
        setShowTaskDialog(false);
    }

    const cancelDeleteProfile = () => {
        setShowTaskDialog(false)

    }

    const validEmailRegex = RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      );
    const validateForm = () => {
        let currentErrors = errors;

        let valid = true;

        if (name === "" || name.length < 3){
            currentErrors.name = "Name must contain at least 3 characters";
            valid = false;
        }
        else{
            currentErrors.name = "";
        }
        if (surname === "" || surname.length < 3){
            currentErrors.surname = "Surname must contain at least 3 characters";

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
        if (streetNumber === "" ){
            currentErrors.streetNumber = "Street number field is required!";
            valid = false;
        }
        else{
            currentErrors.streetNumber = "";
        }
        if (city === "" ){
            currentErrors.city = "City field is required!";
            valid = false;
        }
        else{
            currentErrors.city = "";
        }
        if (country === "" ){
            currentErrors.country = "Country field is required!";
            valid = false;
        }
        else{
            currentErrors.country = "";
        }


        setErrors({name:currentErrors.name, surname:currentErrors.surname, phoneNumber:currentErrors.phoneNumber, addressLine:currentErrors.addressLine, streetNumber:currentErrors.streetNumber, city:currentErrors.city, country:currentErrors.country, state:""});
        return valid;
      };


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
        case 'streetNumber':
            setStreetNumber(value);
            break;
        case 'city':
            setCity(value);
            break;
        case 'country':
            setCountry(value);
            break;
        case 'state':
            setState(value);
            break;
          default:
            break;
        }

    }



    return (
    <>
<div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Name</label><input onChange={handleChange} name="name" type="text" class="form-control" placeholder="first name" defaultValue="" required/>
                {errors.name.length > 0 && <span className='error'>{errors.name}</span>}
                </div>
                    <div class="col-md-6"><label class="labels">Surname</label><input onChange={handleChange} name="surname" type="text" class="form-control" defaultValue="" placeholder="surname"/>
                    {errors.surname.length > 0 && <span className='error'>{errors.surname}</span>}
                    
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Phone Number</label><input onChange={handleChange} name="phoneNumber" type="text" class="form-control" placeholder="enter phone number" defaultValue=""/>
                    {errors.phoneNumber.length > 0 && <span className='error'>{errors.phoneNumber}</span>}
                    </div>
                    <div class="col-md-12"><label class="labels">Address Line</label><input onChange={handleChange}  name="addressLine" type="text" class="form-control" placeholder="enter address line" defaultValue=""/>
                    {errors.addressLine.length > 0 && <span className='error'>{errors.addressLine}</span>}
                    </div>
                    <div class="col-md-12"><label class="labels">Street number</label><input onChange={handleChange}  name="streetNumber" type="text" class="form-control" placeholder="enter street number" defaultValue=""/>
                    {errors.streetNumber.length > 0 && <span className='error'>{errors.streetNumber}</span>}
                    </div>
                    <div class="col-md-12"><label class="labels">City</label><input onChange={handleChange}  name="city" type="text" class="form-control" placeholder="enter city" defaultValue=""/>
                    {errors.city.length > 0 && <span className='error'>{errors.city}</span>}
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input onChange={handleChange}  name="country" type="text" class="form-control" placeholder="country" defaultValue=""/>
                    {errors.country.length > 0 && <span className='error'>{errors.country}</span>}
                    </div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input onChange={handleChange}  name="state" type="text" class="form-control" defaultValue="" placeholder="state"/>
                    {errors.state.length > 0 && <span className='error'>{errors.state}</span>}
                    </div>
                </div>
                <div class="mt-5 text-center"><button onClick={handleSubmit} class="btn btn-primary profile-button" type="button">Save Profile</button>
                
                
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center experience"><span>Loyalty points</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;15</span></div><br/>
                <div class="d-flex justify-content-between align-items-center experience"><span>Client tier</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;PLATINUM</span></div><br/>
                <div class="d-flex justify-content-between align-items-center experience"><span>Benefits</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;15% off on all reservations</span></div><br/>
                <div class="d-flex justify-content-end align-items-center experience"><button onClick={() => {setShowTaskDialog(true)}} class="btn btn-danger delete-button" type="button" data-toggle="modal" data-target="#exampleModal">Delete Profile</button></div><br/>
                
            </div>
        </div>
    </div>
</div>


<Dialog show={showTaskDialog} title="Delete profile?" description="Are you sure you want to delete your profile?" confirmed={confirmDeleteProfile} canceled={cancelDeleteProfile}/>

</>
    );
}

export default ClientProfile;