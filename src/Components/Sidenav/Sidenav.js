import React from "react"
import title from "./../Images/title.jpg"
import "./Sidenav.css"
const Sidenav=(props)=>{

    return(<div className={props.classes}>
            <div className="sidepic">
                <img src={title} alt="sidepic"/>
            </div>
            <div>
                
                    <ul>
                       <a href="#home"><li>Home</li></a> 
                       <a href="#about"><li>About</li></a> 
                       <a href="#"><li>Portfolio</li></a> 
                       <a href="#"><li>Contact Me</li></a> 
                       
                    </ul>
                
            </div>
    </div>)
}

export default Sidenav