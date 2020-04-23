import "./Header.css"
import  React  from 'react';
import Sidenav from "../Sidenav/Sidenav";


class Header extends React.Component{
    state={
        bar:false
    }
   barHandler=()=>{
       let bar=this.state.bar;
       this.setState({bar:!bar})
   }
    render(){
        let cls;
        if(this.state.bar===true)
        {
            cls="sidenav"
        }
        else{
            cls="sidenav-t"
        }
         return(<div  className="headerpic" onClick={this.barHandler}>
            
                <h1>Let's Make Javascript Simple</h1>
                
               <i onClick={this.barHandler} className="fa fa-bars fa-2px"></i>
               <Sidenav classes={cls}/>
               
               
             

            
           </div>
        )
    }
}
export default Header
