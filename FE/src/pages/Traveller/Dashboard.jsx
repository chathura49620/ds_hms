import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import Chart from "../charts/chart";
// import "./dashboard.css";
import hello from "../assets/hello.png";
// import clock from "../assets/clock.png";
// import Clock from "../../components/ProductionManager/common/clock";

class Dashboard extends Component {
  state = {
   
  };

  componentDidMount() {
    
  }


  logout(){
    localStorage.removeItem('user_full_name');
    localStorage.removeItem('user_email');
    localStorage.removeItem('is_login');
    window.location.reload();
  }

  render() {
    return (
      <h1>test traveller dashboard</h1>
    );
  }
};

export default Dashboard;
