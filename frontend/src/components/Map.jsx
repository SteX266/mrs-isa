import { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "../style/Map.css";
import Geocode from "react-geocode";





export default function Map(props) {
  console.log(process.env.REACT_APP_GOOGLE_MAP_API_KEY);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <GMap address={props.address} />;
}

function GMap(props) {
  const[coords, setCords]=useState({lat:0,lng:0});
  const[coordsLoaded, setCoordsLoaded] = useState(false);

  useEffect(() => {
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAP_API_KEY);
    Geocode.fromAddress(props.address).then(
      (response) => {
        setCords(response.results[0].geometry.location);
        setCoordsLoaded(true);
      },
      (error) => {
        console.error(error);
      }
    );
    console.log(coords);
  }, []);




    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
      });
  
  if (coordsLoaded){
    
  return (

    <GoogleMap zoom={15} center={{lat:coords.lat, lng:coords.lng}} mapContainerClassName="map-container">

{isLoaded &&       <Marker
    position={{lat: coords.lat, lng: coords.lng}} ></Marker>}


    </GoogleMap>
  );
}
}

