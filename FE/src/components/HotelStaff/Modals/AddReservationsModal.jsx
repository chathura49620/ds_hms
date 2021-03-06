import React, { Component } from 'react';
import axios from "axios";
import swal from 'sweetalert';
import { Modal, Button, Row, Col, Form, FormGroup } from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import { Redirect } from 'react-router-dom';


export class AddReservationsModal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            snackbaropen: false, 
            snackbarmsg: '',
            // categories: [],
            productCodeError:'',
            productCategoryError:''
         };
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    snackbarClose = (event) => {
        this.setState({ snackbaropen: false });
    };

    handleSubmit(event) {

        event.preventDefault();
        // const isValid = this.validate(event);
        // if(isValid){
            fetch('http://localhost:8089/addReservation', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'username': 'chathura'
                },
                body: JSON.stringify({
                    customerName: event.target.customerName.value,
                    customerId: event.target.customerId.value,
                    roomNo: event.target.roomNo.value,
                    type: 'test',
                    startDate: event.target.startDate.value,
                    endDate: event.target.endDate.value,
                    paymentStatus:'InComplete'
                })
            })
                .then(res => res.json())
                .then((result) => {
                    swal({
                        title: "Reservation Added Succesfully",
                        icon: "success",
                        button: "Done",
                    });
                    this.setState({
                        productCodeError:'',
                        productCategoryError:''
                    })
                    setTimeout(function() {
                        // window.location.reload(); 
                      }.bind(this), 1500);
                }, (error) => {
                    this.setState({ snackbaropen: true, snackbarmsg: 'Failed' })
                }

                )
        // }
    }

    validate(event){
        let productCodeError = "";
        let productCategoryError = "";
      
       
        if(!event.target.productCode.value){
            productCodeError = "Product Code Cannot Be Blank"
        }
        if(!event.target.productCategory.value){
            productCategoryError = "Please Select Product Category"
        }
        
       

        if(productCodeError){
            this.setState({
                productCodeError:productCodeError,
                productCategoryError:productCategoryError
            })
            return false;
        }else{
            return true;
        }

        
    }

    render() {
        return (
            <div className="container">

                <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={this.state.snackbaropen}
                    autoHideDuration={6000}
                    onClose={this.snackbarClose}
                    message={<span id="message-id">{this.state.snackbarmsg}</span>}
                    action={[
                        <IconButton key="close" aria-label="Close" color="danger" onClick={this.snackbarClose}></IconButton>
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
                                        <Form.Control type="text" name="customerName"  placeholder="Customer Name" />
                                        <div style={{background:"#f8d7da"}}>{this.state.productCodeError}</div>
                                    </Form.Group>
                                    <Form.Group controlId="customerId">
                                        <Form.Label>Customer Name</Form.Label>
                                        <Form.Control type="text" name="customerId"  placeholder="customerId" />
                                        <div style={{background:"#f8d7da"}}>{this.state.productCodeError}</div>
                                    </Form.Group>
                                    <Form.Group controlId="roomNo">
                                        <Form.Label>Room No</Form.Label>
                                        <Form.Control type="text" name="roomNo"  placeholder="Room No" />
                                        <div style={{background:"#f8d7da"}}>{this.state.productCodeError}</div>
                                    </Form.Group>
                                    <Form.Group controlId="price">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="text" name="price"  placeholder="Price" />
                                        <div style={{background:"#f8d7da"}}>{this.state.productCodeError}</div>
                                    </Form.Group>
                                    <Form.Group controlId="startDate">
                                        <Form.Label>Start Date</Form.Label>
                                        <Form.Control type="date" name="startDate"  placeholder="startDate" />
                                    </Form.Group>
                                    <Form.Group controlId="endDate">
                                        <Form.Label>End Date</Form.Label>
                                        <Form.Control type="date" name="endDate"  placeholder="endDate" />
                                    </Form.Group>

                                    <br />
                                    <Form.Group>
                                        <Button style={{ backgroundColor: "#7121AD", color: "white" }} variant="primary" type="submit" >
                                            Add Reservation
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}