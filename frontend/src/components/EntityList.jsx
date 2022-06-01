import React, { useEffect, useState } from "react";
import axios from "axios";
import EntityCard from "./EntityCard";
import { MDBCol, MDBInput } from "mdbreact";
import Pagination from "./Pagination";

function EntityList(props) {
  const [allEntities, setAllEntities] = useState([]);
  const [searchList, setSearchList] = useState([]);

  const [currentEntities, setCurrentEntities] = useState([]);
  const postsPerPage = 8;

  const [indexOfLastPost, setIndexOfLastPost] = useState(1*postsPerPage);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(1);


  function setPageNumber(pageNumber){
    setIndexOfLastPost(pageNumber * postsPerPage);
    setIndexOfFirstPost((pageNumber-1) * postsPerPage + 1);

  }

  useEffect(() => {
    filtering();
  }, [props.type,indexOfFirstPost]);

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

  async function filtering() {
    console.log(indexOfFirstPost);
    console.log(indexOfLastPost);

    const requestOptions = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      params:{
        startId:indexOfFirstPost,
        endId:indexOfLastPost
      }
    };
    let res = await axios.get(
      "http://localhost:8080/auth/getAllEntities",
      requestOptions
    );

    if (props.type === "ALL_ENTITIES") {
      setAllEntities(res.data);
      setSearchList(res.data);
      setCurrentEntities(res.data);
      console.log(res.data);

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
        entity.address.toLowerCase().includes(searchParam)
      ) {
        newList.push(entity);
      }
    }

    setSearchList(newList);
  }

  return (
    <>
      <div className="album py-5 ">
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
            {currentEntities.map(renderAllEntities)}
            <Pagination 
            postsPerPage={postsPerPage}
            totalPosts ={17}
            paginate={setPageNumber}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default EntityList;
