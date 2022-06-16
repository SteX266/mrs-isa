import axios from "axios";
import React, {useEffect, useState} from "react";
import EntityCard from "./EntityCard";


export default function ClientSubscriptions(){

    const [allEntities, setAllEntities] = useState([]);


    useEffect(() => {

        getSubscriptions()

    },[]);

    function getSubscriptions(){


        const token = JSON.parse(localStorage.getItem("userToken"));
        const username = localStorage.getItem("username");
        const requestOptions = {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              Authorization: "Bearer " + token.accessToken,
            },
            params: {
              username: username,
            },
          };
        axios
          .get(
            "http://localhost:8080/user/getClientSubscriptions",
            requestOptions
          ).then((res) =>{

            setAllEntities(res.data);
          })

    }

    function renderAllEntities(entity) {
        return (
          <EntityCard
            id={entity.id}
            title={entity.name}
            address={entity.address}
            price={entity.price}
            rating={entity.averageScore}
            image={entity.firstImage}
          />
        );
      }

    return (
        <>
        <p className="h1">SUBSCRIPTIONS</p>
          <div className="album py-5 ">
            <div className="container">

              <div className="row" id="entities">
                {allEntities.map(renderAllEntities)}

              </div>
            </div>
          </div>
        </>
      );
}