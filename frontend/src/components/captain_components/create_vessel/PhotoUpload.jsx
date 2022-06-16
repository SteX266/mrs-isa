import { useEffect, useState } from "react";
import {
  Button,
  CloseButton,
  Container,
  Form,
  Navbar,
  Stack,
} from "react-bootstrap";

export default function PhotoUpload({ photosDTO, save, next, back }) {
  const [photos, setPhotos] = useState(photosDTO);
  const [photoGallery, setPhotoGallery] = useState(<></>);

  function createGallery() {
    return (
      <Stack direction="horizontal">
        {photos.map((photo) => (
          <div className="card" style={{ maxWidth: 300 }} key={photo}>
            <CloseButton onClick={removeImage} name={[photo]} />
            <img src={photo} alt="" />
          </div>
        ))}
      </Stack>
    );
  }
  useEffect(() => {
    setPhotoGallery(createGallery());
  }, [photos]);

  function onUpload(event) {
    const selectedFiles = [];
    const targetFiles = event.target.files;
    const targetFilesObject = [...targetFiles];
    targetFilesObject.map((file) => {
      return selectedFiles.push(URL.createObjectURL(file));
    });
    setPhotos(selectedFiles);
  }

  function removeImage(event) {
    const allPhotos = photos;
    const targetImage = event.target.name;
    const index = allPhotos.indexOf(targetImage);
    console.log(index);
    if (index > -1) allPhotos.splice(index, 1);
    setPhotos(allPhotos);
    setPhotoGallery(createGallery());
  }

  function onNext() {
    save(photos, "photos");
    next();
  }
  return (
    <Container>
      <Stack direction="horizontal">{photoGallery}</Stack>
      <Form.Group className="mb3">
        <Form.Control
          type="file"
          multiple
          onChange={onUpload}
          name="photos"
          accept="image/*"
        />
      </Form.Group>
      <Navbar collapseOnSelect expand="lg" className="navigation-buttons">
        <Container>
          <Button variant="outline-dark" onClick={back}>
            Back
          </Button>
          <Button
            variant="outline-dark"
            className="ms-auto"
            onClick={onNext}
            disabled={!photos}
          >
            Next
          </Button>
        </Container>
      </Navbar>
    </Container>
  );
}
