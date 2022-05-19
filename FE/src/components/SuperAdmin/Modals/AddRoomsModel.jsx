import React, { Component } from 'react';
import axios from "axios";
import swal from 'sweetalert';
import { Modal, Button, Row, Col, Form, FormGroup } from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import { Redirect } from 'react-router-dom';


export class AddRoomsModel extends Component {
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
            fetch('http://localhost:8082/addRoom', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'username': 'chathura'
                },
                body: JSON.stringify({
                    roomNo: event.target.roomNo.value,
                    type: event.target.type.value,
                    status: event.target.status.value,
                    perHour: event.target.perHour.value,
                    perDay: event.target.perDay.value
                })
            })
                .then(res => res.json())
                .then((result) => {
                    swal({
                        title: "Room Added Succesfully",
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
                            Add Room
              </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="roomNo">
                                        <Form.Label>Room No</Form.Label>
                                        <Form.Control type="text" name="roomNo"  placeholder="Room No" />
                                    </Form.Group>
                                    <Form.Group controlId="type">
                                        <Form.Label>type</Form.Label>
                                        <Form.Control type="text" name="type"  placeholder="type" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Status</Form.Label>
                                        <Form.Control as="select" required name="status">
                                            <option selected>ACTIVE</option>
                                            <option>INACTIVE</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="perHour">
                                        <Form.Label>perHour</Form.Label>
                                        <Form.Control type="text" name="perHour"  placeholder="perHour" />
                                    </Form.Group>
                                    <Form.Group controlId="perDay">
                                        <Form.Label>perHour</Form.Label>
                                        <Form.Control type="text" name="perDay"  placeholder="perDay" />
                                    </Form.Group>
                                    <br />
                                    <Form.Group>
                                        <Button style={{ backgroundColor: "#7121AD", color: "white" }} variant="primary" type="submit" >
                                            Add Room
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