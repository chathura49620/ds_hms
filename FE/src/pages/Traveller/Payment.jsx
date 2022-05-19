import React, { Component } from "react";
import axios from "axios";
import { Row, Table, Button, ButtonToolbar , Col, Form, FormGroup } from 'react-bootstrap';
import swal from 'sweetalert';
import { useLocation } from "react-router-dom";


class Rooms extends Component {
  state = {
    rooms: [],
    resavation_id:0,
    addModalShow: false
  };

  componentDidMount() {
    // axios
    //   .get("http://localhost:8082/rooms")
    //   .then((result) => {
    //     const rooms = result.data;

    //     this.setState({ rooms: rooms });
    //   })
    //   .catch((err) => console.log(err.message));
    const resavation_id= new URLSearchParams(this.props.location.search).get("resavation-id");
    this.setState({ resavation_id: resavation_id });
  }

  handleSubmit(event) {
   
    event.preventDefault();
    // const isValid = this.validate(event);
    // if(isValid){
    
      
    fetch('http://localhost:8082/addPaymentDetails', {
      
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'username': 'chathura'
      },
      body: JSON.stringify({
        customerName: event.target.customerName.value,
        cardNo: event.target.cardNo.value,
        exp: event.target.exp.value,
        reservationId: event.target.resavation_id.value,
        amount: event.target.amount.value
      })
    })
      .then(res => res.json())
      .then((result) => {
        swal({
          title: "Payment Succesfully",
          icon: "success",
          button: "Done",
        });
        setTimeout(function () {
          window.location.reload();
        }.bind(this), 1500);
      }, (error) => {
        // this.setState({ snackbaropen: true, snackbarmsg: 'Failed' })
      }

      )
    // }
  }

  
  render() {
    let AddModelClose = () => this.setState({ addModalShow: false })
  
    const amount= new URLSearchParams(this.props.location.search).get("amount");
    const resavation_id= new URLSearchParams(this.props.location.search).get("resavation-id");

    return (
      <React.Fragment>
        <h1 className="mb-5">Payment Gateway</h1>
        Amount = {amount} <br></br>
        resavation id = {resavation_id}
        <Row>
          <Col sm={6}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="customerName">
                <Form.Label>Card Holder Name</Form.Label>
                <Form.Control type="text" name="customerName" placeholder="Card Holder Name" />
              </Form.Group>
              <Form.Group controlId="cardNo">
                <Form.Label>Card No</Form.Label>
                <Form.Control type="text" name="cardNo" placeholder="Card No" />
              </Form.Group>
              <Form.Group controlId="perHour">
                <Form.Label>CSV</Form.Label>
                <Form.Control type="text" name="perHour" placeholder="CSV" />
              </Form.Group>
              <Form.Group controlId="exp">
                <Form.Label>Exp</Form.Label>
                <Form.Control type="text" name="exp" placeholder="exp" />
              </Form.Group>
              <Form.Group controlId="amount">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="text" name="amount" placeholder="Amount" defaultValue={amount} disabled/>
              </Form.Group>
              <Form.Group controlId="resavation_id">
                <Form.Control type="text" name="resavation_id" placeholder="resavation_id" defaultValue={resavation_id} hidden/>
              </Form.Group>
              <br />
              <Form.Group>
                <Button style={{ backgroundColor: "#7121AD", color: "white" }} variant="primary" type="submit" >
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
};

export default Rooms;
