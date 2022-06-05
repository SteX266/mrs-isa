import {Modal, Button, FormLabel} from "react-bootstrap";
import React from "react";
import StarRating from "./StarRating";
import { MDBInput } from "mdbreact";

export default function ReviewDialog({showModal,reservationId, confirmed, canceled}) {


  function createReview(){
    const token = JSON.parse(localStorage.getItem("userToken"));
    const username = localStorage.getItem("username");
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token.accessToken,
      },
      params: {
        entityId: reservationId,
      },
    };

    axios.get(
      "http://localhost:8080/reservation/cancelReservation",
      requestOptions
    );
    confirmed();
  }


  if(!showModal){
    console.log(showModal);
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

        <FormLabel style={{marginBottom:"5px"}}>Please select your rating!</FormLabel>

          <StarRating />
          <FormLabel style={{marginTop:"5px"}}>Please insert review text</FormLabel>

          <MDBInput type="textarea"  rows="2" icon="pencil-alt" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={canceled}>
            Close
          </Button>
          <Button variant="primary" onClick={createReview}>
            Create review
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
}
