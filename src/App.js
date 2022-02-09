import React from "react";
import CardComponent from "./cardComponent";
import { robots } from "./robots";
import "./app.css";
import SearchField from "./searchField";

class App extends React.Component{
    constructor(){
        super()
      this.state = {
          robots: robots,
          textFields:""
      }
    }
    onSelect=(e)=>{
        this.setState({textFields:e.target.value});
        }
    render(){
        const filteredArr =  this.state.robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(this.state.textFields.toLowerCase())
        })
        return(
            <div className="center">
              <h1>RoboFriends</h1>
              <SearchField onSelect={this.onSelect}/>
             <CardComponent robots= {filteredArr}/>
            </div>
        )
    }
}

export default App;