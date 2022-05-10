
import VesselCreate from '../captain_components/VesselCreate';
import CreateAdventure from '../CreateAdventure';
export default function BussinessUserCreatePage(props) {


    let component = '';
    switch (props.type) {
      case 'host':
        component = <></>;
        break;
      case 'captain':
        component = <VesselCreate></VesselCreate>;
        break;
      case 'instructor':
        component = <CreateAdventure></CreateAdventure>;
        break;
      default:
        break;
    }
    return (<>{component}</>
    );
}
