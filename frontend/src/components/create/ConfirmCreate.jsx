import { Button, Card, Stack } from "react-bootstrap";

export default function ConfirmCreate({ serviceDTO, back }) {
  function createVesselDTO() {
    console.log(serviceDTO);
  }
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Are you sure this is everything?</Card.Title>
          <Stack direction="horizontal" gap={3}>
            <Button
              onClick={createVesselDTO}
              variant="outline-dark"
              href="/captain/services"
            >
              Create
            </Button>
            <Button variant="outline-dark" href="/captain/services">
              Cancel
            </Button>
            <Button onClick={back} variant="outline-dark">
              Back
            </Button>
          </Stack>
        </Card.Body>
      </Card>
    </>
  );
}
