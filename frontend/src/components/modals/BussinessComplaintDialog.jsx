import {Modal, Button, FormLabel,Form} from "react-bootstrap";
import React, { useState } from "react";
import { MDBInput } from "mdbreact";
import axios from "axios";
import toast from "react-hot-toast";



export default function BussinessComplaintDialog({showModal,reservationId, confirmed, canceled}) {

  const [text, setText] = useState("");
  const [userShowedUp, setUserShowedUp] = useState(true);
  const[isChecked, setChecked] = useState(false);

  function textChanged(e){
    setText(e.target.value);
  }



  function createReview(){
    const token = JSON.parse(localStorage.getItem("userToken"));
    const username = localStorage.getItem("username");
    toast.success('Complaint successfully submited!');

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token.accessToken,
      },
      params: {
        reservationId: reservationId,
        username:username,
        text:text,
        userShowedUp:userShowedUp
        
      },
    };

    axios.get(
      "http://localhost:8080/complaint/createBussinessComplaint",
      requestOptions
    );
    confirmed();
  }
  function setUserShowedUpp(event){
    console.log(event.target.value);
    setUserShowedUp(event.target.value);
  }


  if(!showModal){
    return <></>;
}
else{
  return (
    <>
      <Modal show={true} onHide={canceled} >
        <Modal.Header closeButton>
          <Modal.Title>COMPLAINT</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <FormLabel style={{marginTop:"5px"}}>Please insert complaint text</FormLabel>

          <MDBInput onChange={textChanged} type="textarea"  rows="2" icon="pencil-alt" />


          <Form.Check 
          checked={isChecked}
          
          onChange={handleChange}
        type="checkbox"
        label="User didn't show up"
      />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={canceled}>
            Cancel
          </Button>
          <Button variant="primary" onClick={createReview}>
            Submit complaint
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

}


