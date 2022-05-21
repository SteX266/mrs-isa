

export default function CarouselItem(props){


    return (

        <div className="carousel-item">
        <img src={props.photo} className="d-block w-100" alt="..."/>
      </div>

    );
}