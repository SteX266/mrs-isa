import { useEffect, useState } from "react";
import axios from "axios";

export default function CarouselItem(props) {
  const [photo, setPhoto] = useState("");
  useEffect(() => {
    let ext = props.photo.split(".");
    axios
      .get("http://localhost:8080/auth/getImage/" + props.photo, {
        responseType: "blob",
        params: { extension: ext[1] },
      })
      .then((response) => {
        setPhoto(URL.createObjectURL(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="carousel-item">
      <img src={photo} className="d-block w-100" alt="..." />
    </div>
  );
}
