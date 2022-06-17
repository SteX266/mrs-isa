import { useState } from "react";
import { Button, Container, Stack, Navbar } from "react-bootstrap";

export default function Utilities({ amenitiesDTO, save, next, back }) {
  const [utilities, setUtilities] = useState(amenitiesDTO);
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
  function onNext() {
    save(utilities, "amenities");
    next();
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
      <Navbar collapseOnSelect expand="lg" className="navigation-buttons">
        <Container>
          <Button variant="outline-dark" onClick={back}>
            Back
          </Button>
          <Button variant="outline-dark" className="ms-auto" onClick={onNext}>
            Next
          </Button>
        </Container>
      </Navbar>
    </Container>
  );
}
