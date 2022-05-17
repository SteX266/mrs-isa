
import ListingCreate from '../host_components/ListingCreate';
import CreateAdventure from '../CreateAdventure';
import CreateVessel from '../captain_components/CreateVessel';
export default function BussinessUserCreatePage(props) {


    let component = '';
    switch (props.type) {
      case 'host':
        component = <ListingCreate></ListingCreate>;
        break;
      case 'captain':
        component = <CreateVessel></CreateVessel>;
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
