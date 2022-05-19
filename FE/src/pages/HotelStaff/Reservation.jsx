import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { AddReservationsModal } from '../../components/HotelStaff/Modals/AddReservationsModal';
import {ReservationTable} from "../../components/HotelStaff/Tables/ReservationTable";


class Reservations extends Component {
  state = {
    reservations: [],
    addModalShow: false
  };

  componentDidMount() {
    axios
      .get("http://localhost:8083/reservations")
      .then((result) => {
        const reservations = result.data;

        this.setState({ reservations: reservations });
      })
      .catch((err) => console.log(err.message));
  }

  render(){
    let AddModelClose = () => this.setState({ addModalShow: false })
  return (
    <React.Fragment>
        <h1 className="mb-5">Reservation</h1>
        <ButtonToolbar>
                    <Button style={{ backgroundColor: "#7121AD", color: "white" }}
                    className="btn btn-lg"
                        onClick={() => this.setState({ addModalShow: true })}
                    >Add Reservation
                    </Button>
                    <AddReservationsModal
                        show={this.state.addModalShow}
                        onHide={AddModelClose}
                    />
        </ButtonToolbar>
        <div className="row">
          <div className="col-1"></div>
          <div className="col">
            <ReservationTable reservations={this.state.reservations} />
          </div>
        </div>
      </React.Fragment>
  );
  }
};

export default Reservations;
