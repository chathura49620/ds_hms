import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SuperAdminSideNav from '../components/SuperAdmin/sideNav/Sidebar';
import HotelStaffSideNav from '../components/HotelStaff/sideNav/Sidebar';
import TravellerSideNav from '../components/Traveller/sideNav/Sidebar';


import SuperAdminDashboard from './SuperAdmin/Dashboard'
import TravellerDashboard from './Traveller/Dashboard'


//super admin routers
import Users from './SuperAdmin/Users';
import Rooms from './SuperAdmin/Rooms';
import login from "../components/Traveller/forms/loginUser";
import  RegisterTraveller  from '../components/Traveller/forms/registerTraveller';

//super admin routers
import Reservation from './HotelStaff/Reservation';
import ViewAvailableRooms from './Traveller/viewAvailableRooms';
import ViewReservedRooms from './Traveller/viewReservedRooms';
import MyProfile from './Traveller/myProfile';


import Payment from './Traveller/Payment';










class Dashboard extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            superAdmin: false
        }
        this.renderSideNavigation = this.renderSideNavigation.bind(this);
        this.renderDashboard = this.renderDashboard.bind(this);
    }

    renderSideNavigation(){
        const user_role = localStorage.getItem('user_role');
        const is_login = localStorage.getItem('is_login');
        if(is_login != '1'){
                return false;
        }else{
            if(user_role == 'Super Admin'){
                return (
                    <SuperAdminSideNav/> 
                );
            }
            if(user_role == 'Hotel Staff'){
                return (
                    <HotelStaffSideNav/> 
                );
            }
            if(user_role == 'Traveller'){
                return (
                    <TravellerSideNav/> 
                );
            }
        }
    }



    renderDashboard(){
        const user_role = localStorage.getItem('user_role')
        const is_login = localStorage.getItem('is_login')
        if(is_login != '1'){
            return (
                <div>
                    <Route path= '/' exact component={login} />
                    <Route path= '/registerTraveller' exact component={RegisterTraveller} />
                </div>
            );
        }else{
           if(user_role == 'Super Admin'){
                return (
                    <div>
                        <Route path='/' exact component={SuperAdminDashboard} />
                        <Route path='/staff-users' exact component={Users} />
                        <Route path='/hotel-rooms' exact component={Rooms} />
                    </div>
                );
            }
            if(user_role == 'Traveller'){
                return (
                    <div>
                        <Route path='/' exact component={TravellerDashboard} />
                        <Route path='/payment' exact component={Payment} />
                         <Route path='/availableRooms' exact component={ViewAvailableRooms} />
                         <Route path='/reservedRooms' exact component={ViewReservedRooms} />
                         <Route path='/myprofile' exact component={MyProfile} />
                         

                    </div>
                );
            }
            if(user_role == 'Hotel Staff'){
                return (
                    <div>
                        <Route path='/' exact component={Reservation} />
                        <Route path='/resavations' exact component={Reservation} />
                    </div>
                );
            }
            else{
                return false;
            }
        }
    }

    render(){
       return(
           <div>
                 {this.renderSideNavigation()}
                 {this.renderDashboard()}
           </div> 
       );
    }
}

export default Dashboard;
