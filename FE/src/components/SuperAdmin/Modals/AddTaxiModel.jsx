import React, { Component } from 'react';
import axios from "axios";
import swal from 'sweetalert';
import { Modal, Button, Row, Col, Form, FormGroup } from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import { Redirect } from 'react-router-dom';


export class AddTaxiModel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            snackbaropen: false, 
            snackbarmsg: '',
            categories: [],
            productCodeError:'',
            productCategoryError:''
         };
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    snackbarClose = (event) => {
        this.setState({ snackbaropen: false });
    };

    componentDidMount() {
        
      }

    handleSubmit(event) {
        console.log("test");
        event.preventDefault();
        // const isValid = this.validate(event);
        // if(isValid){
            fetch('http://localhost:8089/addhoteltaxi', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'username': 'chathura'
                },
                body: JSON.stringify({
                    vehicalNo: event.target.vehicalNo.value,
                    drivarName: event.target.drivarName.value,
                    mobile: event.target.mobile.value,
                   
                })
            })
                .then(res => res.json())
                .then((result) => {
                    swal({
                        title: "Taxi Added Succesfully",
                        icon: "success",
                        button: "Done",
                    });
                    this.setState({
                        productCodeError:'',
                        productCategoryError:''
                    })
                    setTimeout(function() {
                        window.location.reload(); 
                      }.bind(this), 1500);
                }, (error) => {
                    this.setState({ snackbaropen: true, snackbarmsg: 'Failed' })
                }

                )
        // }
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
                            Add Taxi
              </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="vehicalNo">
                                        <Form.Label>Vehical No</Form.Label>
                                        <Form.Control type="text" name="vehicalNo"  placeholder="vehical No" />
                                    </Form.Group>
                                    <Form.Group controlId="drivarName">
                                        <Form.Label>Drivar Name</Form.Label>
                                        <Form.Control type="text" name="drivarName"  placeholder="drivarName" />
                                    </Form.Group>
                                    <Form.Group controlId="mobile">
                                        <Form.Label>mobile</Form.Label>
                                        <Form.Control type="text" name="mobile"  placeholder="mobile" />
                                    </Form.Group>
                                    <br />
                                    <Form.Group>
                                        <Button style={{ backgroundColor: "#7121AD", color: "white" }} variant="primary" type="submit" >
                                            Add Taxi
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