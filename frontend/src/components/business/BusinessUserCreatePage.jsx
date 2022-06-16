import CreateAdventure from "../CreateAdventure";
import CreateVessel from "../captain_components/create_vessel/CreateVessel";
import CreateListing from "../host_components/create_listing/CreateListing";
export default function BussinessUserCreatePage(props) {
  let component = "";
  switch (props.type) {
    case "host":
      component = <CreateListing></CreateListing>;
      break;
    case "captain":
      component = <CreateVessel></CreateVessel>;
      break;
    case "instructor":
      component = <CreateAdventure></CreateAdventure>;
      break;
    default:
      break;
  }
  return <>{component}</>;
}
