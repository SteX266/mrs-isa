import { useParams } from "react-router";
import EditVessel from "../captain_components/edit_vessel/EditVessel";
import EditListing from "../host_components/edit_listing/EditListing";

export default function BusinessUserEditPage(props) {
  let component = "";
  switch (props.type) {
    case "host":
      component = <EditListing listingId={useParams()["id"]}></EditListing>;
      break;
    case "captain":
      component = <EditVessel vesselID={useParams()["id"]}></EditVessel>;
      break;
    case "instructor":
      component = <></>;
      break;
    default:
      break;
  }
  return <>{component}</>;
}
