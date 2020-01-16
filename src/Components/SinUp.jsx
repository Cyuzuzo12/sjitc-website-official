import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class SinUp extends Component {
    state = {  }
program = () =>{
    return(<Link to="/program"></Link>);
    // alert("submitted")
}
    render() { 
        return ( 
            <div>
                <section className="SinUp">
          <div className="container ">   
           
             <div className="row p-4"> 
             <div className="col-md-4 col-sm-12 ">
             <p className="purple p-5 font-weight-bold"><em>Already have an Account</em><i className="fa fa-question fa-lg text-white"></i>
             </p>     
             <Link to="/log-in"> <button  className="bg-warning font-weight-bold login-button">
                        Login
                      </button></Link>
                      
             </div>
              <div className="col-md-7 col-sm-12 SinUpForm ">
                <form onSubmit={this.program} className="p-4">
                <h5 className="text-center ">Create Account</h5>
                <div className="form-row p-3">
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Enter phone number" id="name" />
                    </div>
                    <div className="col">
                      <input type="email" className="form-control " placeholder="Enter email" id="name" />
                    </div>
                  </div>
                  <div className="form-row p-3">
                    <div className="col-md-6">
                      <input type="password" className="form-control " placeholder="Enter password" id="name" />
                    </div>
                    <div className="col-md-6">
                      <input type="password" className="form-control  " placeholder="Confirm password" id="name" />
                    </div>
                  </div>
                  <div className="form-row p-5 justify-content-end">
                    <div className="col-md-4 ">
                      <button
                        type="submit"
                        className="font-weight-bold sinup-button"
                      >
                        Sign Up
                      </button>
                    </div>
                   
                  </div>
                </form>
                </div>
                
              
            </div>
          </div>
        </section>
            </div>
         );
    }
}
 
export default SinUp;