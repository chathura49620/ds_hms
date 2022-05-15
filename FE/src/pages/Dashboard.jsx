import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SuperAdminSideNav from '../components/SuperAdmin/sideNav/Sidebar';
import HotelStaffSideNav from '../components/HotelStaff/sideNav/Sidebar';
import TravellerSideNav from '../components/Traveller/sideNav/Sidebar';


import SuperAdminDashboard from './SuperAdmin/Dashboard'
import HotelStaffDashboard from './HotelStaff/Dashboard'
import TravellerDashboard from './Traveller/Dashboard'


//super admin routers
import BasicInfo from './SuperAdmin/BasicInfo';
import UserRoles from './SuperAdmin/UserRoles';
import UserList from './SuperAdmin/UserList';
import Categories from './SuperAdmin/Categories';
import ProductCodes from './SuperAdmin/ProductCodes';
import MaterialCodes from './SuperAdmin/MaterialCodes';
import  login  from '../components/forms/loginUser';
import  RegisterTraveller  from '../components/forms/registerTraveller';

//super admin routers
import Reservation from './HotelStaff/Reservation';








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
                        <Route path='/basic-info' exact component={BasicInfo} />
                        <Route path='/user-roles' exact component={UserRoles} />
                        <Route path='/user-list' exact component={UserList} />
                        <Route path='/categories' exact component={Categories} />
                        <Route path='/product-codes' exact component={ProductCodes} />
                        <Route path='/metirial-codes' exact component={MaterialCodes} />
                    </div>
                );
            }
            if(user_role == 'Traveller'){
                return (
                    <div>
                        <Route path='/' exact component={TravellerDashboard} />
                    </div>
                );
            }
            if(user_role == 'Hotel Staff'){
                return (
                    <div>
                        <Route path='/' exact component={HotelStaffDashboard} />
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
