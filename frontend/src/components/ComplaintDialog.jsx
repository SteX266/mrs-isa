import {Modal, Button, FormLabel} from "react-bootstrap";
import React, { useState } from "react";
import { MDBInput } from "mdbreact";
import axios from "axios";
import toast from "react-hot-toast";



export default function ComplaintDialog({showModal,reservationId, confirmed, canceled}) {

  const [text, setText] = useState("");

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
        
      },
    };

    axios.get(
      "http://localhost:8080/complaint/createComplaint",
      requestOptions
    );
    confirmed();
  }


  if(!showModal){
    return <></>;
}
else{
  return (
    <>
      <Modal show={true} onHide={canceled} >
        <Modal.Header closeButton>
          <Modal.Title>REVIEW</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <FormLabel style={{marginTop:"5px"}}>Please insert complaint text</FormLabel>

          <MDBInput onChange={textChanged} type="textarea"  rows="2" icon="pencil-alt" />
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


