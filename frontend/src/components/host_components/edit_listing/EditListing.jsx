import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import Address from "../../captain_components/create_vessel/Address";
import AvailabilityPeriod from "../../captain_components/create_vessel/AvailabilityPeriod";
import General from "../../captain_components/create_vessel/General";
import PhotoUpload from "../../captain_components/create_vessel/PhotoUpload";
import Utilities from "../../captain_components/create_vessel/Utilities";
import VesselTypeSelect from "../../captain_components/create_vessel/VesselTypeSelect";
import ConfirmEdit from "../../captain_components/edit_vessel/ConfirmEdit";

export default function EditListing({ listingId }) {
  const [componentCounter, setComponentCounter] = useState(0);
  const [currentComponent, setCurrentComponent] = useState("");

  const [listingDTO, setListingDTO] = useState({
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
  });
  function getListingById() {
    console.log(listingId);
    return {};
  }
  useEffect(() => {
    setListingDTO(getListingById());
  }, []);
  const components = [
    <VesselTypeSelect
      key="TYPE_SELECT"
      next={next}
      save={save}
      typeDTO={listingDTO.type}
    />,
    <General
      key="GENERAL"
      next={next}
      back={back}
      save={save}
      generalDTO={listingDTO.general}
    />,
    <AvailabilityPeriod
      key="AVAILABILITY_PERIOD"
      save={save}
      next={next}
      back={back}
      peridosDTO={listingDTO.periods}
    />,
    <Address
      key="ADDRESS"
      save={save}
      next={next}
      back={back}
      addressDTO={listingDTO.address}
    />,
    <PhotoUpload
      key="PHOTO_UPLOAD"
      save={save}
      next={next}
      back={back}
      photosDTO={listingDTO.photos}
    />,
    <Utilities
      key="UTILITIES"
      save={save}
      next={next}
      back={back}
      amenitiesDTO={listingDTO.amenities}
    />,
    <ConfirmEdit key="CONFIRM" serviceDTO={listingDTO} back={back} />,
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
    setListingDTO({ ...listingDTO, [key]: value });
    console.log(listingDTO);
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
