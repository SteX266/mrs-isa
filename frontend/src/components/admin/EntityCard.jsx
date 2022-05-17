import "../../style/EntityCard.css";

const EntityCard = (props) => {
  console.log(props);
  return (
    <>
      <div className="col-md-3">
        <div
          className="card align-self-stretch entityCard"
          styleProp="width: 18rem;"
        >
          <img height="200px" src={props.image} alt="Nesto" />
          <hr />
          <div className="card-body">
            <h3 className="card-title">{props.title}</h3>
            <span className="lokacija">{props.address}</span>
            <p className="card-text">{props.price}$</p>
            <div className="row justify-content-around align-items-center">
              <span className="ocena">{props.rating}/5</span>
            </div>
            <div className="row justify-content-around align-items-center">
              <button
                className="delete"
                onClick={() => props.clickHandler(props.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EntityCard;
