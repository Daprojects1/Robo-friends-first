import React from "react";
import "./search.css"

const searchField = ({onSelect})=>{
    return(
        <div>
            <input className="main-input"
             type="text"
              placeholder="Enter text here"
              onChange={onSelect}
              ></input>
        </div>
    )
}

export default searchField;