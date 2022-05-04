import React, {useState} from 'react';
import Dialog from "./Dialog";

import axios from 'axios';

export default function  InstructorAccount(){

    const [showTaskDialog,setShowTaskDialog] = useState(false);
    
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

    return ( <div>
        <button onClick={() => {setShowTaskDialog(true)}} class="btn btn-danger delete-button" type="button" data-toggle="modal" data-target="#exampleModal">Delete Profile</button>
        <Dialog show={showTaskDialog} title="Delete profile?" description="Are you sure you want to delete your profile?" confirmed={confirmDeleteProfile} canceled={cancelDeleteProfile}/>

        </div>

    )


}
