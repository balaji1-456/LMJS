import React from "react"
import "./SigUp.css"
class SignUp extends React.Component{
    state={
        clicked:false
    }


    signUpHandler=()=>{
     let clicked=this.state.clicked;
     this.setState({clicked:!clicked})
    }
    handleSubmit=(e)=>{
  e.preventDefault()
    }
    render(){
        let f=null;
        if(this.state.clicked==true)
        {
            f=(<form onSubmit={this.handleSubmit}>
                <h1>Let's Make Javascript Simple </h1>
                <h2>Sign Up</h2>
                <div> <input type="email" placeholder="Email Address"/></div>
               <div><input type="password" placeholder="Password"/></div>
                
                <button type="submit" className="lmjs">Join LMJS</button>
                <p>By registering you confirm that you accept the Terms and Conditions and Privacy Policy</p>
                <div className="hr">
                    <hr/>
                </div>

                <p>Already have an account? <a href="#log">Log In</a></p>

            </form>)
        }
        return(<div className="signup">
            <button onClick={this.signUpHandler}>Sign Up</button>
          
           
            <div className="forms">{f}</div>
         
        </div>)
    }
}

export default SignUp