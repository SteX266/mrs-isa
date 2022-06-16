import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import Address from "../../captain_components/create_vessel/Address";
import AvailabilityPeriod from "../../captain_components/create_vessel/AvailabilityPeriod";
import ConfirmCreate from "../../captain_components/create_vessel/ConfirmCreate";
import General from "../../captain_components/create_vessel/General";
import PhotoUpload from "../../captain_components/create_vessel/PhotoUpload";
import Utilities from "../../captain_components/create_vessel/Utilities";

export default function CreateListing() {
  const [componentCounter, setComponentCounter] = useState(0);
  const [currentComponent, setCurrentComponent] = useState("");

  const [vesselDTO, setVesselDTO] = useState({
    type: "",
    general: {
      name: "",
      rulesOfConduct: "",
      capacity: "",
      rentalFee: "",
      cancellationFee: "",
    },
    periods: [],
    address: {
      street: "",
      streetNumber: "",
      city: "",
      country: "",
    },
    photos: [],
    amenities: [],
    vesselDetails: {
      length: "",
      maxSpeed: "",
      engineNumber: "",
      enginePower: "",
    },
  });
  const components = [
    <General
      key="GENERAL"
      next={next}
      back={back}
      save={save}
      generalDTO={vesselDTO.general}
    />,
    <AvailabilityPeriod
      key="AVAILABILITY_PERIOD"
      save={save}
      next={next}
      back={back}
      peridosDTO={vesselDTO.periods}
    />,
    <Address
      key="ADDRESS"
      save={save}
      next={next}
      back={back}
      addressDTO={vesselDTO.address}
    />,
    <PhotoUpload
      key="PHOTO_UPLOAD"
      save={save}
      next={next}
      back={back}
      photosDTO={vesselDTO.photos}
    />,
    <Utilities
      key="UTILITIES"
      save={save}
      next={next}
      back={back}
      amenitiesDTO={vesselDTO.amenities}
    />,
    <ConfirmCreate key="CONFIRM" serviceDTO={vesselDTO} back={back} />,
  ];

  useEffect(() => {
    setCurrentComponent(components[componentCounter]);
  }, [componentCounter]);

  function next() {
    setComponentCounter(componentCounter + 1);
  }

  function back() {
    setComponentCounter(componentCounter - 1);
  }
  function save(value, key) {
    setVesselDTO({ ...vesselDTO, [key]: value });
    console.log(vesselDTO);
  }
  return (
    <Stack direction="horizontal">
      <div className="left-container">
        <p className="left-container-text">What kind of place will you host?</p>
      </div>
      <Stack className="right-container">{currentComponent}</Stack>
    </Stack>
  );
}
