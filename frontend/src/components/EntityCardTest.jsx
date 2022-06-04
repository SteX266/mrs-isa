import "../style/EntityCardTest.css"
import { Link } from "react-router-dom";



const EntityCardTest = (props) =>  {  
    var link = "/client/profile/" + props.id;
    var title = props.title;
    if(title.length > 12){
      title = title.slice(0,11);
      title+="..."
    }


    return <>

    <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1 pt-lg-0 pt-4">
        <Link to={link}>
                        <div className="card entity"> <img className="slika card-img-top" src={props.image}/>
                            <div className="card-body">
                                <h6 className="font-weight-bold pt-1">{props.address}</h6>
                                <div className="text-muted description">{props.title}</div>
                                <div className="d-flex align-items-center product"> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="far fa-star"></span> </div>
                                <div className="d-flex align-items-center justify-content-between pt-3">
                                    <div className="d-flex flex-column">
                                        <div className="h6 font-weight-bold">{props.price} USD</div>
                                    </div>
                                    <div className="dugme btn btn-primary">Reserve</div>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>

</>}

export default EntityCardTest;
