import React, {Component} from 'react'
import axios from 'axios';
import EntityCard from "./EntityCard";


class EntityList extends Component  {  

   constructor(props){
      super(props);
      this.state = {

         allEntities:[]
      }
      const requestOptions = {
         headers: {
            Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
            
            }

     };
     console.log(process.env.REACT_APP_SERVER_URL);
   axios.get("http://localhost:8080/api/entity/getAllEntities", requestOptions)
      .then(res => {this.setState({allEntities:res.data})})

   }
   renderAllEntities = (entity, index) =>{
      return(
        <EntityCard title={entity.name} address={entity.myAddress} price = {entity.price} rating = {entity.averageScore} image={entity.firstImage}/>
         
      )
   }
   render(){
    return <>

     <div class="row">

         {this.state.allEntities.map(this.renderAllEntities)}
     </div>


</>
}
}

export default EntityList;