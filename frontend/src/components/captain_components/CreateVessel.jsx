import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  Navbar,
  Stack,
  CloseButton,
  FormGroup,
} from "react-bootstrap";
import "../captain_components/CreateVessel.css";

export default function CreateVessel() {
  const [componentCounter, setComponentCounter] = useState(0);
  const [currentComponent, setCurrentComponent] = useState("");

  const [type, setType] = useState("");

  const [guests, setGuests] = useState(4);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rules, setRules] = useState("");

  const [street, setStreet] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [city, setCity] = useState("");

  const [utilities, setUtilities] = useState([]);

  const [images, setImages] = useState([]);

  const [length, setLength] = useState("");
  const [maxSpeed, setMaxSpeed] = useState("");
  const [engineNumber, setEngineNumber] = useState("");
  const [enginePower, setEnginePower] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [cancelation, setCancelation] = useState(0);
  const [rental, setRental] = useState(0);

  const [components, setComponents] = useState([]);

  useEffect(() => {
    setComponents([
      <Type key="t" type={type} setType={setType} />,
      <Guests key="g" guests={guests} setGuests={setGuests} />,
      <General
        key="gen"
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        rules={rules}
        setRules={setRules}
      />,
      <Location
        key="l"
        street={street}
        setStreet={setStreet}
        streetNumber={streetNumber}
        setStreetNumber={setStreetNumber}
        city={city}
        setCity={setCity}
      />,
      <Utilities key="u" utilities={utilities} setUtilities={setUtilities} />,
      <Images key="i" images={images} setImages={setImages} />,
      <VesselDetails
        key="vd"
        length={length}
        setLength={setLength}
        maxSpeed={maxSpeed}
        setMaxSpeed={setMaxSpeed}
        engineNumber={engineNumber}
        setEngineNumber={setEngineNumber}
        enginePower={enginePower}
        setEnginePower={setEnginePower}
      />,
      <Period
        key="p"
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />,
      <Fees
        key="f"
        cancelation={cancelation}
        rental={rental}
        setCancelation={setCancelation}
        setRental={setRental}
      />,
      <Create
        key="cre"
        image={images[0]}
        title={name}
        address={street + streetNumber + city}
        price={rental}
      />,
    ]);
  }, [
    cancelation,
    city,
    description,
    endDate,
    engineNumber,
    enginePower,
    guests,
    images,
    length,
    maxSpeed,
    name,
    rental,
    rules,
    startDate,
    street,
    streetNumber,
    type,
    utilities,
  ]);

  useEffect(() => {
    setCurrentComponent(components[componentCounter]);
  }, [componentCounter, components]);

  function onNext() {
    setComponentCounter(componentCounter + 1);
  }

  function onBack() {
    setComponentCounter(componentCounter - 1);
  }

  function onCreate() {
    axios
      .post("http://localhost:8080/entity/create-vessel", {
        createData: {
          name: name,
          type: type,
          guests: guests,
          description: description,
          rules: rules,
          street: street,
          streetNumber: streetNumber,
          city: city,
          utilities: utilities,
          images: images,
          length: length,
          maxSpeed: maxSpeed,
          engineNumber: engineNumber,
          enginePower: enginePower,
          startDate: startDate,
          endDate: endDate,
          cancelation: cancelation,
          rental: rental,
        },
      })
      .then()
      .catch();
  }

  return (
    <Stack direction="horizontal">
      <div className="left-container">
        <p className="left-container-text">What kind of place will you host?</p>
      </div>
      <Stack className="right-container">
        {currentComponent}
        <NavigationButtons
          backHidden={componentCounter <= 0}
          onNext={onNext}
          onBack={onBack}
          onCreate={onCreate}
          createActive={componentCounter < components.length - 1}
        />
      </Stack>
    </Stack>
  );
}

function NavigationButtons(props) {
  return (
    <Navbar collapseOnSelect expand="lg" className="navigation-buttons">
      <Container>
        <Button
          variant="outline-dark"
          onClick={props.onBack}
          hidden={props.backHidden}
        >
          Back
        </Button>
        <Button
          variant="outline-dark"
          href="/captain/services"
          hidden={!props.backHidden}
        >
          Cancel
        </Button>
        <Button
          variant="outline-dark"
          className="ms-auto"
          onClick={props.onNext}
          hidden={!props.createActive}
        >
          Next
        </Button>
        <Button
          variant="outline-dark"
          href="captain/services"
          className="ms-auto"
          onClick={props.onCreate}
          hidden={props.createActive}
        >
          Create
        </Button>
      </Container>
    </Navbar>
  );
}

function Type({ setType }) {
  const types = [
    "Trawler",
    "Tug Boat",
    "Deck Boat",
    "Dingy",
    "Life Boat",
    "Sail Boat",
    "Yacht",
    "Houseboat",
    "Catamaran Boat",
  ];
  const buttons = types.map((type) => (
    <Button
      key={type}
      name={type}
      variant="outline-dark"
      className="mx-auto"
      onClick={selectType}
      style={{ width: 350, height: 100 }}
    >
      {type} <br />
      <Form.Text id="passwordHelpBlock" muted>
        This is a description.
      </Form.Text>
    </Button>
  ));
  function selectType(event) {
    setType(event.target.name);
  }
  return (
    <Container style={{ padding: 10 }}>
      <Stack gap={3}>{buttons}</Stack>
    </Container>
  );
}

function Guests({ guests, setGuests }) {
  function onMinus() {
    setGuests(guests - 1);
  }
  function onPlus() {
    setGuests(guests + 1);
  }
  return (
    <>
      <Stack direction="horizontal">
        <p>Guests</p>
        <Button
          variant="outline-dark"
          className="rounded-circle"
          disabled={guests <= 1}
          onClick={onMinus}
        >
          -
        </Button>
        {guests}
        <Button
          variant="outline-dark"
          className="rounded-circle"
          disabled={guests >= 10}
          onClick={onPlus}
        >
          +
        </Button>
      </Stack>
    </>
  );
}

function General({
  name,
  setName,
  description,
  setDescription,
  rules,
  setRules,
}) {
  function onNameChange(event) {
    setName(event.target.value);
  }
  function onDescriptionChange(event) {
    setDescription(event.target.value);
  }
  function onRulesChange(event) {
    setRules(event.target.value);
    console.log(rules);
  }
  return (
    <Container style={{ padding: 10 }}>
      <Stack>
        <FormGroup>
          <Form.Label>Name</Form.Label>
          <Form.Control
            placeholder="Enter name of vessel"
            type="text"
            value={name}
            onChange={onNameChange}
          />
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            value={description}
            onChange={onDescriptionChange}
          />
          <Form.Label>Rules</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter rules"
            value={rules}
            onChange={onRulesChange}
          />
        </FormGroup>
      </Stack>
    </Container>
  );
}

function Location({
  street,
  setStreet,
  streetNumber,
  setStreetNumber,
  city,
  setCity,
}) {
  function onStreetChanged(event) {
    setStreet(event.target.value);
  }
  function onStreetNumberChanged(event) {
    setStreetNumber(event.target.value);
  }
  function onCityChanged(event) {
    setCity(event.target.value);
  }
  return (
    <Stack>
      <Container>
        <FormGroup>
          <Form.Label>Street</Form.Label>
          <Form.Control
            placeholder="Enter street name"
            type="text"
            value={street}
            onChange={onStreetChanged}
          />
          <Form.Label>Street number</Form.Label>
          <Form.Control
            placeholder="Street number"
            type="number"
            value={streetNumber}
            onChange={onStreetNumberChanged}
          />
          <Form.Label>City</Form.Label>
          <Form.Control
            placeholder="Enter city"
            type="text"
            value={city}
            onChange={onCityChanged}
          />
        </FormGroup>
      </Container>
      <iframe
        title="location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89850.58713654711!2d19.779401147753827!3d45.271429996290316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b10613de93455%3A0xb6f7d683724fe28!2sNovi%20Sad!5e0!3m2!1sen!2srs!4v1652710131702!5m2!1sen!2srs"
        width="100%"
        height="580"
        style={{ border: 0, padding: 10 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Stack>
  );
}

function Utilities({ utilities, setUtilities }) {
  const amenities = ["WIFI", "Toilet", "Pool Table", "TV", "Kitchen"];
  const navigationEquipment = ["Radar", "Radio", "GPS"];
  const fishingEquipment = [
    "Fishing poles",
    "Fishing Nets",
    "Fishing Vests",
    "Hooks",
  ];

  function selectUtility(event) {
    let nextUtilities = utilities;
    if (!utilities) nextUtilities = [event.target.name];
    else if (utilities.indexOf(event.target.name) === -1) {
      nextUtilities.push(event.target.name);
    } else {
      nextUtilities.splice(utilities.indexOf(event.target.name), 1);
    }
    setUtilities(nextUtilities);
  }
  const amenityButtons = amenities.map((item) => (
    <Button
      key={item}
      name={item}
      variant="outline-dark"
      style={{ margin: 5, width: 120, height: 100 }}
      onClick={selectUtility}
    >
      {item}
    </Button>
  ));
  const navigationButtons = navigationEquipment.map((item) => (
    <Button
      key={item}
      name={item}
      variant="outline-dark"
      style={{ margin: 5, width: 120, height: 100 }}
      onClick={selectUtility}
    >
      {item}
    </Button>
  ));
  const fishingButtons = fishingEquipment.map((item) => (
    <Button
      key={item}
      name={item}
      variant="outline-dark"
      style={{ margin: 5, width: 120, height: 100 }}
      onClick={selectUtility}
    >
      {item}
    </Button>
  ));

  return (
    <Container>
      <Stack>
        <Container style={{ width: "80%" }}>
          <p>Do you have any standout amenities?</p>
          <Stack direction="horizontal">{amenityButtons}</Stack>
        </Container>
        <Container style={{ width: "80%" }}>
          <p>What some navigation equipment?</p>
          <Stack direction="horizontal">{navigationButtons}</Stack>
        </Container>
        <Container style={{ width: "80%" }}>
          <p>Where can i fish?</p>
          <Stack direction="horizontal">{fishingButtons}</Stack>
        </Container>
      </Stack>
    </Container>
  );
}

function Images({ images, setImages }) {
  function onUpload(event) {
    const selectedFiles = [];
    const targetFiles = event.target.files;
    const targetFilesObject = [...targetFiles];
    targetFilesObject.map((file) => {
      return selectedFiles.push(URL.createObjectURL(file));
    });
    setImages(selectedFiles);
  }

  function removeImage(event) {
    const allImages = images;
    const targetImage = event.target.name;
    console.log(targetImage);
    const index = allImages.indexOf(targetImage);
    console.log(index);
    if (index > -1) allImages.splice(index, 1);
    setImages(allImages);
  }

  const imageGallery = images.map((image) => (
    <div className="card" style={{ maxWidth: 200 }} key={image}>
      <CloseButton onClick={removeImage} name={image} />
      <img src={image} alt="" />
    </div>
  ));
  return (
    <>
      <Stack direction="horizontal">{imageGallery}</Stack>
      <Form.Group className="mb3">
        <Form.Control
          type="file"
          multiple
          onChange={onUpload}
          name="photos"
          accept="image/*"
        />
      </Form.Group>
    </>
  );
}

function VesselDetails({
  length,
  setLength,
  maxSpeed,
  setMaxSpeed,
  engineNumber,
  setEngineNumber,
  enginePower,
  setEnginePower,
}) {
  function onLengthChange(event) {
    setLength(event.target.value);
  }
  function onMaxSpeedChange(event) {
    setMaxSpeed(event.target.value);
  }
  function onEngineNumberChange(event) {
    setEngineNumber(event.target.value);
  }
  function onEnginePowerChange(event) {
    setEnginePower(event.target.value);
  }

  return (
    <Container style={{ padding: 10 }}>
      <Stack direction="vertical">
        <FormGroup>
          <Form.Label>Vessel Length</Form.Label>
          <Form.Control
            placeholder="Enter vessel length (Optional)"
            type="number"
            value={length}
            onChange={onLengthChange}
          />
          <Form.Label>Max Speed</Form.Label>
          <Form.Control
            placeholder="Enter max speed in km/h (Optional)"
            type="number"
            value={maxSpeed}
            onChange={onMaxSpeedChange}
          />
          <Form.Label>Engine Number</Form.Label>
          <Form.Control
            placeholder="Enter engine number (Optional)"
            type="number"
            value={engineNumber}
            onChange={onEngineNumberChange}
          />
          <Form.Label>Engine Power</Form.Label>
          <Form.Control
            placeholder="Enter engine power (Optional)"
            type="number"
            value={enginePower}
            onChange={onEnginePowerChange}
          />
        </FormGroup>
      </Stack>
    </Container>
  );
}

function Period({ startDate, endDate, setStartDate, setEndDate }) {
  function onStartDateChanged(event) {
    setStartDate(event.target.value);
  }
  function onEndDateChanged(event) {
    setEndDate(event.target.value);
  }
  return (
    <>
      <FormGroup>
        <Form.Label>Start Date</Form.Label>
        <Form.Control
          placeholder="Enter start date"
          type="date"
          value={startDate}
          onChange={onStartDateChanged}
        />
        <Form.Label>Start Date</Form.Label>
        <Form.Control
          placeholder="Enter end date"
          type="date"
          value={endDate}
          onChange={onEndDateChanged}
        />
      </FormGroup>
    </>
  );
}

function Fees({ cancelation, rental, setCancelation, setRental }) {
  function onRentalFeeChanged(event) {
    setRental(event.target.value);
  }
  function onCancelationFeeChanged(event) {
    setCancelation(event.target.value);
  }
  return (
    <>
      <FormGroup>
        <Stack direction="horizontal">
          <Form.Label style={{ width: 180 }}>Rental Fee</Form.Label>
          0$
          <input
            style={{ width: 300 }}
            type="range"
            className="form-range"
            min={0}
            max={250}
            step={5}
            id="customRange3"
            onChange={onRentalFeeChanged}
          ></input>
          {rental}$
        </Stack>
        <Stack direction="horizontal">
          <Form.Label style={{ width: 180 }}>Cancelation Fee</Form.Label>
          0$
          <input
            style={{ width: 300 }}
            type="range"
            className="form-range"
            min={0}
            max={250}
            step={5}
            id="customRange3"
            onChange={onCancelationFeeChanged}
          ></input>
          {cancelation}$
        </Stack>
      </FormGroup>
    </>
  );
}

function Create() {
  return (
    <>
      <Preview></Preview>
    </>
  );
}
function Preview() {
  return <></>;
}
