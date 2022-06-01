
import React,{useEffect, useState} from "react";
import "../style/ListingProfilePage.css";
import axios from "axios";
import Map from "./Map";
import CarouselItem from "./CarouselItem";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  Table,
  Button,
} from "react-bootstrap";



export default function ListingProfilePage(){


    const params = useParams();

    const [listing, setListing] = useState({
        id: -1,
        photos: [],
        name: "",
        description: "",
        price:0,
        averageScore:0,
        capacity:0,
        address:"",
        firstImage:"",
        type:"",
        rulesOfConduct:"",
        owner:"",
        ownersPhoneNumber:"",
        amenities:""
      });
    
    const [calendar,setCalendar] = useState("");
    const [promos, setPromos] = useState([]);

    
  const headers = [
    "Start",
    "End",
    "Price",
    "Button"
  ];

    function renderAllPhotos(photo){
      if (photo == listing.firstImage){
        return <></>;
      }
      return (
        <CarouselItem photo={photo}/>

      )
    }
    

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("userToken"));
        const entityId = params.id;
        const requestOptions = {
          headers: { Authorization: "Bearer " + token.accessToken },
          params: { id: entityId },
        };
        axios
          .get("http://localhost:8080/entity/getEntityById", requestOptions)
          .then((res) => {
            setListing(res.data);
            setListing({id:res.data.id,
            photos:res.data.photos,
            name:res.data.name,
            description:res.data.description,
            price:res.data.price,
            averageScore:res.data.averageScore,
            capacity:res.data.capacity,
            address:res.data.address,
            firstImage:res.data.firstImage,
            type:res.data.type,
            rulesOfConduct:res.data.rulesOfConduct,
            owner:res.data.owner,
            ownersPhoneNumber:res.data.ownersPhoneNumber,
            amenities:res.data.amenities


            });
            var link = "/client/calendar/" + res.data.id;
            setCalendar(link);
            
            
          });
        getEntityPromos();
      }, []);


    function getEntityPromos(){

      const token = JSON.parse(localStorage.getItem("userToken"));
      const entityId = 1;
      const requestOptions = {
        headers: { Authorization: "Bearer " + token.accessToken },
        params: { id: entityId },
      };
      axios
        .get("http://localhost:8080/promo/getEntityPromos", requestOptions)
        .then((res) => {
          setPromos(res.data);
          console.log(promos);
          console.log(res.data);
        });

    }
    function subscribe(){

        console.log(listing);
    }


    return (

        <>
        <div className="container">
    <div className="main-body">
    

    
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src={listing.firstImage} className="rounded" alt="Admin"  width="350"/>
                    <div className="mt-3">
                      <h4>{listing.name}</h4>
                      <p className="text-secondary mb-1">{listing.type}</p>
                      <p className="text-muted font-size-sm">{listing.address}</p>
                      <button onClick={subscribe} className="btn btn-warning" style={{marginRight:"10px", marginTop:"15px"}}>Subscribe</button>
                      <Link to={calendar}><button className="btn btn-outline-warning" style={{marginRight:"10px", marginTop:"15px"}}>Reserve</button></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">


<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">

  <div className="carousel-item active">
        <img src={listing.firstImage} className="d-block w-100" alt="..."/>
      </div>
    {listing.photos.map(renderAllPhotos)}

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Owner</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {listing.owner}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Owner&apos;s phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {listing.ownersPhoneNumber}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {listing.address}
                    </div>
                  </div>


                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Description</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {listing.description}
                    </div>
                  </div>


                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Amenities</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {listing.amenities}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Rules of conduct</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {listing.rulesOfConduct}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <a className="btn btn-warning " target="__blank" href="">Edit</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row gutters-sm">
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">

                    <Table striped hover className="rounded  bg-light" style={{ paddingTop: "125px", marginTop:"15px" }}>
                    <TableHeader headers={headers} />
                   <TableBody promos={promos} />
                    </Table>
                    

                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                    <Map address={listing.address}></Map>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
        </>

    );

}

function TableHeader(props) {
  return (
    <thead>
      <tr>
        {props.headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
  );
}

function TableBody(props) {
  return (
    <tbody>
      {props.promos.map((promo) => (
        <Promo key={promo.id} promo={promo} />
    ))}
    </tbody>
  );
}

function Promo(props) {
  const [promo, setPromo] = useState(props.promo);
  const [button, setButton] = useState(getButton());

  function reservePromo() {
    let newPromo = promo;
    setPromo(newPromo);
    setButton(getButton());
    saveReservation(newPromo.id);
  }

  function saveReservation(reservationId) {
    const token = JSON.parse(localStorage.getItem("userToken"));
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
  }
  function getButton() {
    return (
      <Button onClick={reservePromo} variant="outline-dark">
        Reserve
      </Button>
    );
  }

  return (
    <tr id={promo.id}>
      <td>{promo.dateFrom}</td>
      <td> {promo.dateTo}</td>
      <td>{promo.price}</td>
      <td>{button}</td>
    </tr>
  );
}



