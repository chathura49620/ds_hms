import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, FormGroup } from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import swal from 'sweetalert';
import axios from "axios";

export class EditReservationsModal extends Component {
    constructor(props) {
        super(props);
        this.state = { snackbaropen: false, snackbarmsg: '', categories:[] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    snackbarClose = (event) => {
        this.setState({ snackbaropen: false });
    };

    componentDidMount() {
        
    }

    handleSubmit(event, props) {
        event.preventDefault();
        //alert(event.target.name.value);

        fetch('http://localhost:8082/updateReservation', { 
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'username': 'chathura'
            },
            body: JSON.stringify({
                id: event.target.id.value,
                customerName: event.target.customerName.value,
                roomNo: event.target.roomNo.value,
                price: event.target.price.value
            })
        })
            .then(res => res.json())
            .then((result) => {
                swal({
                    title: "Reservation Updated Succesfully",
                    icon: "success",
                    button: "Done",
                  });
            }, (error) => {
                this.setState({ snackbaropen: true, snackbarmsg: 'Failed' })
            }

            )
    }

    render() {
        return (
            <div className="container">

                <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    open={this.state.snackbaropen}
                    autoHideDuration={6000}
                    onClose={this.snackbarClose}
                    message={<span id="message-id">{this.state.snackbarmsg}</span>}
                    action={[
                        <IconButton key="close" aria-label="Close" color="inherit" onClick={this.snackbarClose}></IconButton>
                    ]}
                />
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"

                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit Reservation
              </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="id">
                                        <Form.Label>ID</Form.Label>
                                        <Form.Control type="text" name="id" required disabled defaultValue={this.props.id} hidden/>
                                    </Form.Group>
                                    <Form.Group controlId="customerName">
                                        <Form.Label>Customer Name</Form.Label>
                                        <Form.Control type="text" name="customerName" required placeholder="Customer Name" defaultValue={this.props.customerName} />
                                    </Form.Group>
                                    <Form.Group controlId="name">
                                        <Form.Label>Room No</Form.Label>
                                        <Form.Control type="text" name="roomNo" required placeholder="Room No" defaultValue={this.props.roomNo} />
                                    </Form.Group>
                                    <Form.Group controlId="name">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="text" name="price" required placeholder="Price" defaultValue={this.props.price} />
                                    </Form.Group>
                                    <br />
                                    <Form.Group>
                                        <Button style={{ backgroundColor: "#7121AD", color: "white" }} variant="primary" type="submit" >
                                            Edit Product Code
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