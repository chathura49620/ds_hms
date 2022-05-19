import React, { useState } from "react";
import Joi from "joi-browser";
import axios from "axios";
import swal from "sweetalert";


import FormSuper from '../reusables/formsuper';



class RegisterTraveller extends FormSuper {
  state = { 


    data: {
      fullName: "",
      country: "",
      email: "",
      contact: "",
      type: "Traveller",
      password: "",
    },
    errors: {},
    memberTypes: [{id: 1, type: 'Panel Member'}, {id: 2, type: 'Supervisor'}]

   } 

   schema = {
    fullName: Joi.string().required(),
    country: Joi.string().required(),
    email: Joi.string().required(),
    contact: Joi.string().required(),
    type: Joi.string(),
    password: Joi.string().required(),
  };

  componentDidMount(){




  }

   async doSubmit(){

    
    const ob = this.state.data;
    const jsonOb = {

      fullName: ob.fullName,
      country: ob.country,
      email: ob.email,
      contact: ob.contact,
      type: ob.type,
      age: ob.age,
      password: ob.password,
    }
    


    console.log("submitted")

    const response = await fetch("http://localhost:8083/adduser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonOb),
    });

    const data = await response.json();

    console.log(data);

    if(data){

      window.location.href = "/";
    }



  }

  render() { 
    return (
      <React.Fragment>
    
    <div className="row mt-4">
      <div className="col-3"></div>
      <div className="col" style={{backgroundColor:"#F2F3F4"}}>
      <h1>Register Me</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("fullName", "Full Name")}
            {this.renderInput("country", "Country")}
            {this.renderInput("email", "Email Address")}
            {this.renderInput("contact", "Contact Number")}
            {this.renderInput("password", "Password")}
            {this.renderButton("Register Me")}
          </form>
        

      </div>
      <div className="col-4"></div>
    </div>
          
        
    </React.Fragment>

    );
  }
}
 
export default RegisterTraveller;
