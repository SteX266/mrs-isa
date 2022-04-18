import {useEffect, useState} from 'react'

import vikendica from "../images/vikendica.jpeg"
import "./EntityCard.css"



const EntityCard = () =>  {  
    return <>
    <div class="col-md-4">
  <div className="card align-self-stretch entityCard" styleProp="width: 18rem;">
     <img  height="200px" src={vikendica} alt="Apoteka"/>
     <hr/>
     <div className="card-body">
       <h3 className="card-title">Naaslov</h3>
       <span className="lokacija">Neka adresa</span>
       <p className="card-text">Cena</p>
       <div className="row justify-content-around align-items-center"><span className="ocena">4/5</span>
       
     </div></div>
   </div>
   </div>
</>}

export default EntityCard;
