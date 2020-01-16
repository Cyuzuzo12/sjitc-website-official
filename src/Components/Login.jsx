import React, { Component } from 'react';
import Program from './program';
import {Link} from 'react-router-dom';
import diploma from '../images/diploma.jpg';
class LogIn extends Component {
    state = {  }
program = () =>{
    return(<Link to="/program"></Link>);
    // alert("submitted")
}
    render() { 
        return ( 
            <div>
                <section className="login">
          <div className="container">   
           
             <h1 className="text-center text-white">Log In</h1>
            
             <div className="row justify-content-center"> 
             
              <div className="col-md-4 col-sm-12 border bg-light loginForm p-4">
                <form onSubmit={this.program}>
                <h5 className="text-center ">Account Details</h5>
                    
                    <div className="form-group">
                        <label for="exampleInputEmail1" >Email address</label>
                        <input type="email" className="form-control " id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1" >Password</label>
                        <input type="password" className="form-control  " id="email" aria-describedby="emailHelp" />
                    </div>
                    
                    <Link to="/program"><button type="submit" className="bg-warning form-control font-weight-bold ">Log In</button></Link>
                    <div class="form-check form-check-inline p-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox3"
                      value="option3"
                    />
                    <label className="form-check-label " for="inlineCheckbox3">
                      Remember me
                    </label>

                  </div>
                  <Link>Forgot password?</Link>
                </form>
                <Link to="/sin-up" className="text-dark">don't you have an account? <span className="font-weight-bold">Sign Up</span></Link>
                </div>
                <div className="col-md-3 col-sm-12 login-image">
                </div>
              
            </div>
          </div>
        </section>
            </div>
         );
    }
}
 
export default LogIn;