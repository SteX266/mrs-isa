
import VesselCreate from '../captain_components/VesselCreate';

import ListingCreate from '../host_components/ListingCreate';
import CreateAdventure from '../CreateAdventure';
export default function BussinessUserCreatePage(props) {


    let component = '';
    switch (props.type) {
      case 'host':
        component = <ListingCreate></ListingCreate>;
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
