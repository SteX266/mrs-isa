import React, {useState} from 'react'
import "../style/Dialog.css"
import StarRating from './StarRating'


export default function ReviewDialog({show, confirmed, canceled}){
    const [rating, setRating] = useState(0) // initial rating value

    // Catch Rating value
    const handleRating = (rate) => {
      setRating(rate)
      // other logic
    }

    if(!show){
        return <></>;
    }

    return (
        <div className="overlay">
<StarRating></StarRating>

<div className="dialog__footer">
            <button onClick={canceled} className="dialog__cancel">Cancel</button>
            <button className="dialog__confirm" onClick={confirmed}>Yes</button>
          </div>

      </div>


    )

}