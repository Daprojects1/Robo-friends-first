import React from "react";
import {Card} from "./Card"
import "./cardComp.css"

const cardComponent = ({robots})=>{
    return(
       <div className="maindiv">
             {robots.map((robot)=>{
         return <Card key={robot.name} id={robot.id} name ={robot.name} email={robot.email}/>
          })}
       </div>
    )

}

export default cardComponent;