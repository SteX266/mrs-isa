import React, {Component} from 'react'
import axios from 'axios';
import EntityCard from "./EntityCard";
import SearchForm from './SearchForm';
import { MDBCol, MDBInput } from "mdbreact";


class EntityList extends Component  {  

   constructor(props){
      super(props);
      this.state = {

         allEntities:[],
         searchList:[]

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
      .then(res => {this.setState({allEntities:res.data, searchList:res.data})}
      
      )

   }
   renderAllEntities = (entity, index) =>{
      return(
        <EntityCard title={entity.name} address={entity.myAddress} price = {entity.price} rating = {entity.averageScore} image={entity.firstImage}/>
         
      )
      
      
   }
   searchFieldChanged = (e) =>{
      var newList = []
      
      const searchParam = e.target.value.toLowerCase();
      for (let i = 0; i < this.state.allEntities.length; i++) {
         const entity = this.state.allEntities[i];
         if (entity.name.toLowerCase().includes(searchParam) || entity.myAddress.toLowerCase().includes(searchParam)) {
            newList.push(entity);
         }
     }

      
      this.setState({searchList:newList});
   }


   render(){
    return <>
          <MDBCol md="12">
      <MDBInput onChange={this.searchFieldChanged} hint="Search" type="text" containerClass="active-pink active-pink-2 mt-0 mb-3" />
    </MDBCol>
     <div class="row" id="entities">
         {this.state.searchList.map(this.renderAllEntities)}
     </div>


</>
}
}

export default EntityList;