import React, { useEffect, useState } from "react";
import axios from "axios";
import { MDBCol } from "mdbreact";
import Pagination from "./Pagination";
import EntityCardTest from "./EntityCardTest";
import SearchBar from "../business/SearchBar";

function EntityList(props) {

  const [currentEntities, setCurrentEntities] = useState([]);
  const postsPerPage = 6;

  const [indexOfLastPost, setIndexOfLastPost] = useState(1*postsPerPage);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(1);


  const [entityType, setEntityType] = useState("SHOW_ALL");
  const[currentEntityType, setCurrentEntityType] = useState("SHOW_ALL");

  const [searchFilters, setSearchFilters] = useState({
    rentalFeeFrom: 0,
    rentalFeeTo: 500,
    cancellationFeeFrom: 0,
    cancellationFeeTo: 500,
    guestsFrom: 1,
    guestsTo: 10,
    street: "",
    city: "",
    country: "",
  });
  const [currentFilters, setCurrentFilters] = useState({
    rentalFeeFrom: 0,
    rentalFeeTo: 500,
    cancellationFeeFrom: 0,
    cancellationFeeTo: 500,
    guestsFrom: 1,
    guestsTo: 10,
    street: "",
    city: "",
    country: "",
  });


  function setPageNumber(pageNumber){
    setIndexOfLastPost(pageNumber * postsPerPage);
    setIndexOfFirstPost((pageNumber-1) * postsPerPage + 1);

  }

  useEffect(() => {
    filtering();
  }, [props.type,indexOfFirstPost,currentFilters, currentEntityType]);



  function renderAllEntities(entity) {

    return (
      <EntityCardTest
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
    console.log(currentFilters);
    console.log(currentEntityType);


     const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      };


    let res = await axios.post(
      "http://localhost:8080/auth/getFilteredEntities",
      {    rentalFeeFrom: currentFilters.rentalFeeFrom,
        rentalFeeTo: currentFilters.rentalFeeTo,
        cancellationFeeFrom: currentFilters.cancellationFeeFrom,
        cancellationFeeTo: currentFilters.cancellationFeeTo,
        guestsFrom: currentFilters.guestsFrom,
        guestsTo: currentFilters.guestsTo,
        street: currentFilters.street,
        city: currentFilters.city,
        country: currentFilters.country,
        type:currentEntityType,
        startIndex:indexOfFirstPost,
        endIndex:indexOfLastPost
      },
      {headers}
    );
    setCurrentEntities(res.data);
    console.log(res.data);
  }
  function setFilters(filters){
    setSearchFilters(filters);
  }

  function searchEntities(){
    setCurrentEntityType(entityType);
    setCurrentFilters(searchFilters);
  }

  function setType(type){
    console.log("ALOOOOO");
    console.log(type);
    setEntityType(type);
  }

  return (
    <>
      <div className="album py-5 ">
        <div className="container">
          <MDBCol md="12">
            <SearchBar setSearchFilters={setFilters} search = {searchEntities} setEntityType = {setType}/>
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
