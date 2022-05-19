import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Modal, Button, Row, Col, Form, FormGroup } from "react-bootstrap";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import { Redirect } from "react-router-dom";

export class AddTaxiReservationsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbaropen: false,
      snackbarmsg: "",
      taxies: [],
      productCodeError: "",
      productCategoryError: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  snackbarClose = (event) => {
    this.setState({ snackbaropen: false });
  };

  componentDidMount() {
      axios
        .get("http://localhost:8089/gettaxies")
        .then((result) => {
          const taxies = result.data;

          this.setState({ taxies: taxies });
        })
        .catch((err) => console.log(err.message));
    }

  handleSubmit(event) {
    console.log("test 1");
    console.log(event.target.customerName.value);
    console.log("test 1");
    event.preventDefault();
    // const isValid = this.validate(event);
    // if(isValid){
    fetch("http://localhost:8089/addtaxi", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        username: "chathura",
      },
      body: JSON.stringify({  
        customerName: event.target.customerName.value,
        place: event.target.place.value,
        mobile: event.target.mobile.value,
        vehicalNo: event.target.taxi_no.value,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          swal({
            title: "Taxi Reservation Added Succesfully",
            icon: "success",
            button: "Done",
          });
          this.setState({
            productCodeError: "",
            productCategoryError: "",
          });
          setTimeout(
            function () {
              window.location.reload();
            }.bind(this),
            1500
          );
        },
        (error) => {
          this.setState({ snackbaropen: true, snackbarmsg: "Failed" });
        }
      );
    // }
  }

  validate(event) {
    let productCodeError = "";
    let productCategoryError = "";

    if (!event.target.productCode.value) {
      productCodeError = "Product Code Cannot Be Blank";
    }
    if (!event.target.productCategory.value) {
      productCategoryError = "Please Select Product Category";
    }

    if (productCodeError) {
      this.setState({
        productCodeError: productCodeError,
        productCategoryError: productCategoryError,
      });
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <div className="container">
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={this.state.snackbaropen}
          autoHideDuration={6000}
          onClose={this.snackbarClose}
          message={<span id="message-id">{this.state.snackbarmsg}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="danger"
              onClick={this.snackbarClose}
            ></IconButton>,
          ]}
        />
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
        //centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Reservation
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="customerName">
                    <Form.Label>Customer Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="customerName"
                      placeholder="Customer Name"
                    />
                    <div style={{ background: "#f8d7da" }}>
                      {this.state.productCodeError}
                    </div>
                  </Form.Group>
                  <Form.Group controlId="roomNo">
                    <Form.Label>Place</Form.Label>
                    <Form.Control
                      type="text"
                      name="place"
                      placeholder="Place"
                    />
                    <div style={{ background: "#f8d7da" }}>
                      {this.state.productCodeError}
                    </div>
                  </Form.Group>
                  <Form.Group controlId="price">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="mobile"
                      placeholder="Mobile Number"
                    />
                    <div style={{ background: "#f8d7da" }}>
                      {this.state.productCodeError}
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Taxi No</Form.Label>
                    <Form.Control as="select" required name="taxi_no">
                      {this.state.taxies.map((i) => (
                        <option key={i.id}
                        >{i.vehicalNo}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <br />
                  <Form.Group>
                    <Button
                      style={{ backgroundColor: "#7121AD", color: "white" }}
                      variant="primary"
                      type="submit"
                    >
                      Add Taxi Reservation
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
