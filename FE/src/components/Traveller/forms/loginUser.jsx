import React, { useState } from "react";
import Joi from "joi-browser";
import axios from "axios";
import swal from "sweetalert";


import FormSuper from './../reusables/formsuper';
import { Link } from "react-router-dom";



class LoginUser extends FormSuper {
  state = { 


    data: {
      email: "",
      password: "",
    
    },
    errors: {},

   } 

   schema = {
    email: Joi.string().required(),
    password: Joi.string().required(),
    

  };

  componentDidMount(){




  }

  async doSubmit(){

    const jsonOb = this.state.data;
    console.log("submitted")
    console.log(jsonOb)
     
    try{
      const response = await fetch("http://localhost:8083/userByEmail/"+ jsonOb.email, {
        method: "GET",
      });
  
  
      const data = await response.json();
  
      console.log(data);
  
      if(data){
  
        if(data.email === jsonOb.email && data.password === jsonOb.password){
          localStorage.setItem("logged", "kk");
          localStorage.setItem("user_role", data.type)
          localStorage.setItem("is_login", "1")
          localStorage.setItem("u_name", data.fullName);
          localStorage.setItem("u_id", data.id);
          window.location.href = "/";
          
        }
  


    }
    
    }catch(ex){

      alert("invalid credentials!");
    }
    
  }

  render() { 
    return (
      <React.Fragment>
    
    <div className="row" style={{marginTop:"100px"}}>
      <div className="col-4"></div>
      <div className="col" style={{backgroundColor:"#F2F3F4"}}>
      <h1 className="mb-4">Sign in</h1>
      <form onSubmit={this.handleSubmit}>
            <div className="my-2">
            {this.renderInput("email", "Email")}
            </div>
            <div className="mb-5">
            {this.renderInput("password", "password")}
            </div>
            
           
            {this.renderButton("Sign in")}
            <Link to="/registerTraveller">Sign in as a Traveller</Link>
           
      </form>
        

      </div>
      <div className="col-4"></div>
    </div>
          
        
    </React.Fragment>

    );
  }
}
 
export default LoginUser;
