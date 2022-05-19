import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, FormGroup } from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import swal from 'sweetalert';
import { Redirect } from 'react-router-dom';


export class AddUserModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            snackbaropen: false, 
            snackbarmsg: '',
            CategoryNameError:''
             
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    snackbarClose = (event) => {
        this.setState({ snackbaropen: false });
    };

    handleSubmit(event) {
        event.preventDefault();
        const isValid = this.validate();
        // if(isValid){
            fetch('http://localhost:8089/adduser', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'username': 'chathura'
                },
                body: JSON.stringify({
                    fullName: event.target.full_name.value,
                    email: event.target.email.value,
                    password: event.target.password.value,
                    country: 'sri lanka',
                    contact: event.target.contact.value,
                    type: 'Hotel Staff'
                })
            })
                .then(res => res.json())
                .then((result) => {
                    swal({
                        title: "User Added Succesfully",
                        icon: "success",
                        button: "Done",
                    }); 
                    this.setState({CategoryNameError:''})
                    setTimeout(function() {
                        window.location.reload(); 
                      }.bind(this), 1000);
                }, (error) => {
                    this.setState({ snackbaropen: true, snackbarmsg: 'Failed' })
                }

                )
        // }
    }

    validate(){
        let CategoryNameError = "";

        if(!this.state.CategoryNameError){
            CategoryNameError = "Category Name Cannot Be Blank"
        }

        if(CategoryNameError){
            this.setState({CategoryNameError:CategoryNameError})
            return false;
        }

        return true;
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
                            Add System User
              </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="full_name">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" name="full_name"  placeholder="Full Name" />
                                    </Form.Group>
                                    <Form.Group controlId="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="text" name="email"  placeholder="Email" />
                                    </Form.Group>
                                    <Form.Group controlId="contact">
                                        <Form.Label>contact</Form.Label>
                                        <Form.Control type="text" name="contact"  placeholder="contact" />
                                    </Form.Group>
                                    <Form.Group controlId="Password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="text" name="password"  placeholder="Password" />
                                    </Form.Group>
                                    <br></br>
                                    <Form.Group>
                                        <Button  style={{ backgroundColor: "#7121AD", color: "white" }} variant="primary" type="submit" >
                                            Add User
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