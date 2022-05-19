import React, { useState } from "react";
import Joi from "joi-browser";
import axios from "axios";
import swal from "sweetalert";
import FormSuper from './../reusables/formsuper';
import { Link } from "react-router-dom";
import moment from "moment"



class AskReserveDetails extends FormSuper {
  
  state = {

    isPayamentDone:'no',
    data: {
      roomNo: "",
      type: "",
      customerName: "",
      customerId: "",
      startDate: "",
      endDate: "",

    },
    errors: {},
    reservedData: [],

  }

  schema = {
    roomNo: Joi.string(),
    type: Joi.string(),
    customerName: Joi.string().required(),
    customerId: Joi.string().required(),
    startDate: Joi.string().required(),
    endDate: Joi.string().required(),


  };

  async componentDidMount() {


    const response = await fetch("http://localhost:8082/reservedRooms", {
      method: "GET",
    });

    const reservedData = await response.json();


    const room = this.props.room;
    const data = {

      roomNo: room.roomNo,
      type: room.type,
      customerName: "",
      customerId: "",
      startDate: "",
      endDate: "",


    }

    this.setState({ data, reservedData });
    console.log(data, reservedData, "ok");

  }


  onChangeValue = (event) => {
    console.log(event.target.value);
    this.setState({isPayamentDone: event.target.value});
    // var amount = 100;
    // var customerName = this.state.data.customerName;
    // var customerId = this.state.data.customerId;
    // var startDate = this.state.data.startDate;
    // var endDate = this.state.data.endDate;
    // var type = this.state.data.type;
    // var room_no = this.state.data.roomNo;
    // if(event.target.value == 'yes'){
    //   window.location.href = 'http://localhost:3000/payment?amount=' + amount +'&resavation-id=10' + '&customerName=' + customerName + '&customerId=' + customerId + '&startDate=' + startDate + '&endDate=' + endDate  + '&type=' + type + '&room_no=' + room_no ;
   // }
    // this.setState({isPayamentDone : 'yes'});
    // console.log("test" , this.state.isPayamentDone);
  }

  async doSubmit() {


    const { reservedData } = this.state;

    const jsonOb = this.state.data;
    console.log("submitted")
    console.log(jsonOb)

    let dateFrom = jsonOb.startDate;
    let dateTo = jsonOb.endDate;

    let dateBetween = "2022-05-19";

    let from = Date.parse(dateFrom);
    let to = Date.parse(dateTo);
    let check = Date.parse(dateBetween);

    let d1 = moment(from).format("MM-DD-YYYY");
    let d2 = moment(to).format("MM-DD-YYYY");
    let d3 = moment(check).format("MM-DD-YYYY");

    console.log(d1, d2, d3);
    //console.log(check);

    let reservedStartDate;
    let reservedEndDate;



    for (let i = 0; i < reservedData.length; i++) {
      console.log(reservedData[i].startDate, "hello", reservedData[0].endDate)

      reservedStartDate = moment(Date.parse(reservedData[i].startDate)).format("MM-DD-YYYY");
      reservedEndDate = moment(Date.parse(reservedData[i].endDate)).format("MM-DD-YYYY");


      console.log(reservedStartDate);



      if ((reservedStartDate <= d2 && reservedStartDate >= d1) || (reservedEndDate <= d2 && reservedEndDate >= d1)) {


        swal({
          text: "You have reserved a another reservation between   " + dateFrom + "-" + dateTo,
          icon: "warning",
          timer: "2000",
        });

        break;
      }
      else {
          console.log(this.state.isPayamentDone);
           const {isPayamentDone} = this.state;


          const response = await fetch("http://localhost:8082/addReservedRoom", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(jsonOb),
          });
  
          const data = await response.json();
  
           console.log(data);


           if(isPayamentDone === 'yes'){

    let amount = 100;
    let customerName = this.state.data.customerName;
    let customerId = this.state.data.customerId;
    let startDate = this.state.data.startDate;
    let endDate = this.state.data.endDate;
    let type = this.state.data.type;
    let room_no = this.state.data.roomNo;
  
       window.location.href = 'http://localhost:3000/payment?amount=' + amount +'&resavation-id=10' + '&customerName=' + customerName + '&customerId=' + customerId + '&startDate=' + startDate + '&endDate=' + endDate  + '&type=' + type + '&room_no=' + room_no ;
  
            console.log("rama in the way")
           }
  
    swal({
            text: "Room Reserved successfully.",
            icon: "success",
            timer: "2000",
    });
    this.props.onClose();
        
        

        break;

      }  //end of else    




    }


    // if((d3 <= d2 && d3 >= d1)){


    //   swal({
    //     text: "You have reserved a another reservation between "+ dateFrom + "-"+ dateTo,
    //     icon: "warning",
    //     timer: "2000",
    //   });
    // }


  }

 

  render() {
    return (
      <React.Fragment>


        <div className="col" style={{ backgroundColor: "#F2F3F4" }}>
          {/* <h1 className="mb-4">Reserve your room</h1> */}
          <form onSubmit={this.handleSubmit}>
            <div className="my-2">
              {this.renderInput("customerName", "Your Name")}
            </div>
            <div className="mb-2">
              {this.renderInput("customerId", "Passport No")}
            </div>
            <div className="mb-2">
              {this.renderInput("startDate", "Start Date", "date")}
            </div>
            <div className="mb-2">
              {this.renderInput("endDate", "End Date", "date")}
            </div>
            Are You done payement by creadit card
            <div onChange={this.onChangeValue}>
              <input type="radio" value="yes" name="isPayamentDone" /> Yes
              <input type="radio" value="no" name="isPayamentDone" /> No
            </div>

            {this.renderButton("Make Reservation")}


          </form>


        </div>



      </React.Fragment>

    );
  }
}

export default AskReserveDetails;
