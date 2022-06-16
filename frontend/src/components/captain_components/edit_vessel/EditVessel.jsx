import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import "../create_vessel/CreateVessel.css";
import Address from "../create_vessel/Address";
import AvailabilityPeriod from "../create_vessel/AvailabilityPeriod";
import General from "../create_vessel/General";
import PhotoUpload from "../create_vessel/PhotoUpload";
import Utilities from "../create_vessel/Utilities";
import VesselDetails from "../create_vessel/VesselDetails";
import VesselTypeSelect from "../create_vessel/VesselTypeSelect";
import ConfirmEdit from "./ConfirmEdit";
import { useGet } from "../../utilities";

function EditVessel({ vesselID }) {
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
  function getVesselById() {
    const data = useGet("entity/getEntityById", { id: vesselID });
    return data;
  }
  useEffect(() => {
    setVesselDTO(getVesselById());
  }, []);
  const components = [
    <VesselTypeSelect
      key="TYPE_SELECT"
      next={next}
      save={save}
      typeDTO={vesselDTO.type}
    />,
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
    <VesselDetails
      key="VESSEL_DETAILS"
      save={save}
      next={next}
      back={back}
      vesselDetailsDTO={vesselDTO.vesselDetails}
    />,
    <ConfirmEdit key="CONFIRM" serviceDTO={vesselDTO} back={back} />,
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
        <p className="left-container-text">Change your description?</p>
      </div>
      <Stack className="right-container">{currentComponent}</Stack>
    </Stack>
  );
}

export default EditVessel;
