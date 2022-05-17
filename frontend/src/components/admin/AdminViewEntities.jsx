import React, { useEffect, useState } from "react";
import axios from "axios";
import EntityCard from "./EntityCard";
import { MDBCol, MDBInput } from "mdbreact";

export default function AdminViewEntities(props) {
  const [allEntities, setAllEntities] = useState([]);
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    filtering();
  }, [props.type]);

  function renderAllEntities(entity) {
    return (
      <EntityCard
        id={entity.id}
        title={entity.name}
        address={entity.myAddress}
        price={entity.price}
        rating={entity.averageScore}
        image={entity.firstImage}
        clickHandler={DeleteButtonHendler}
      />
    );
  }
  function DeleteButtonHendler(id) {
    const filtering = [];
    for (let index = 0; index < allEntities.length; index++) {
      const entity = allEntities[index];
      if (entity.id !== id) {
        filtering.push(entity);
      }
    }
    setAllEntities(filtering);
    setSearchList(filtering);
  }
  async function filtering() {
    const requestOptions = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    let res = await axios.get(
      "http://localhost:8080/api/entity/getAllEntities",
      requestOptions
    );

    if (props.type === "ALL_ENTITIES") {
      setAllEntities(res.data);
      setSearchList(res.data);

      return;
    } else {
      var filteredList = [];

      for (let i = 0; i < res.data.length; i++) {
        const entity = res.data[i];
        if (entity.type === props.type) {
          filteredList.push(entity);
        }
      }
      setAllEntities(filteredList);
      setSearchList(filteredList);
      console.log(searchList);
    }
  }
  function searchFieldChanged(e) {
    var newList = [];

    const searchParam = e.target.value.toLowerCase();
    for (let i = 0; i < allEntities.length; i++) {
      const entity = allEntities[i];
      if (
        entity.name.toLowerCase().includes(searchParam) ||
        entity.myAddress.toLowerCase().includes(searchParam)
      ) {
        newList.push(entity);
      }
    }

    setSearchList(newList);
  }

  return (
    <>
      <div className="album py-5 bg-light">
        <div className="container">
          <MDBCol md="12">
            <MDBInput
              onChange={searchFieldChanged}
              hint="Search"
              type="text"
              containerClass="active-pink active-pink-2 mt-0 mb-3"
            />
          </MDBCol>
          <div className="row" id="entities">
            {searchList.map(renderAllEntities)}
          </div>
        </div>
      </div>
    </>
  );
}