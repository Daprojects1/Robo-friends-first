import React from "react";
import "./card.css"

export const Card = ({id,name,email})=>{
    return(
        <>
          <div className="card-body">
             <img src={`https://robohash.org//${id}?size=200x200`} alt="yeah"></img>
             <div>
                 <h1>{name}</h1>
                 <p>{email}</p>
             </div>
          </div>
        </>
    )
}
