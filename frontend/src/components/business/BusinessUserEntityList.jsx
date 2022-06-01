import EntityCard from "../EntityCard";
import { MDBCol, MDBInput } from "mdbreact";

export default function BusinessUserEntityList(props) {
  function renderAllEntities(entity) {
    return (
      <EntityCard
        id={entity.id}
        title={entity.name}
        address={entity.address}
        price={entity.price}
        rating={entity.averageScore}
        image={entity.firstImage}
      />
    );
  }

  return (
    <>
      <div className="album py-5 bg-light">
        <div className="container">
          <MDBCol md="12">
            <MDBInput
              hint="Search"
              type="text"
              containerClass="active-pink active-pink-2 mt-0 mb-3"
            />
          </MDBCol>
          <div className="row" id="entities">
            {props.services.map(renderAllEntities)}
          </div>
        </div>
      </div>
    </>
  );
}
