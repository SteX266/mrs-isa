import { useEffect } from "react";
import { useState } from "react";
import { Button, Container, Form, Navbar, Stack } from "react-bootstrap";

export default function AvailabilityPeriod({ periodsDTO, save, next, back }) {
  const [periods, setPeriods] = useState(periodsDTO);
  const [id, setId] = useState(0);
  const [period, setPeriod] = useState({
    startDate: "",
    endDate: "",
    id: id,
  });
  const [periodsStack, setPeriodsStack] = useState(createStack());
  function createStack() {
    if (!periods) return <></>;
    return (
      <Stack direction="vertical">
        {periods.map((period, index) => (
          <Stack direction="horizontal" gap={3} key={index}>
            <div>{period.startDate}</div>
            <div>{period.startDate}</div>
            <Button
              onClick={removePeriod}
              id={period.id}
              variant="outline-dark"
            >
              Remove
            </Button>
          </Stack>
        ))}
      </Stack>
    );
  }
  useEffect(() => {
    setPeriodsStack(createStack());
  }, [periods]);

  function removePeriod(event) {
    let new_periods = periods;
    for (let i = 0; i < new_periods.length; i++) {
      const element = new_periods[i];
      if (element.id == event.target.id) {
        new_periods.splice(i, 1);
        break;
      }
    }
    setPeriods(new_periods);
    setPeriodsStack(createStack());
  }
  function onChange(event) {
    console.log(periods);
    setPeriod({ ...period, [event.target.name]: event.target.value });
  }
  function addNewPeriod() {
    let new_periods;
    if (!periods) new_periods = [];
    else new_periods = periods;
    setId(id + 1);
    new_periods.push(period);
    setPeriods(new_periods);
    setPeriod({
      startDate: "",
      endDate: "",
      id: id,
    });
    setPeriodsStack(createStack());
  }
  function onNext() {
    save(periods, "periods");
    next();
  }
  function addDisabled() {
    return !period.startDate || !period.endDate;
  }
  function nextDisabled() {
    return !periods;
  }
  return (
    <Container>
      <Stack direction="vertical" gap={3}>
        <Form.Group>
          <Form.Label>Start date</Form.Label>
          <Form.Control
            placeholder="Start date"
            type="date"
            value={period.startDate}
            onChange={onChange}
            name="startDate"
          />
          <Form.Label>End date</Form.Label>
          <Form.Control
            minDate
            placeholder="End date"
            type="date"
            value={period.endDate}
            onChange={onChange}
            name="endDate"
          />
        </Form.Group>
        <Button
          onClick={addNewPeriod}
          variant="outline-dark"
          disabled={addDisabled()}
        >
          Add
        </Button>
      </Stack>
      {periodsStack}
      <Navbar collapseOnSelect expand="lg" className="navigation-buttons">
        <Container>
          <Button variant="outline-dark" onClick={back}>
            Back
          </Button>
          <Button
            variant="outline-dark"
            className="ms-auto"
            onClick={onNext}
            disabled={nextDisabled()}
          >
            Next
          </Button>
        </Container>
      </Navbar>
    </Container>
  );
}
