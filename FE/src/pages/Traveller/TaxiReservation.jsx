import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import { AddTaxiReservationsModal } from "../../components/Traveller/Modals/AddTaxiReservationsModal";
import { TaxiReservationTable } from "../../components/Traveller/Tables/TaxiReservationTable";

class TaxiReservation extends Component {
  state = {
    reservations: [],
    addModalShow: false,
  };

  componentDidMount() {
    axios
      .get("http://localhost:8089/taxies")
      .then((result) => {
        const reservations = result.data;

        this.setState({ reservations: reservations });
      })
      .catch((err) => console.log(err.message));
  }

  render() {
    let AddModelClose = () => this.setState({ addModalShow: false });
    return (
      <React.Fragment>
        <h1 className="mb-5">Taxi Reservation</h1>
        <ButtonToolbar>
          <Button
            style={{ backgroundColor: "#7121AD", color: "white" }}
            className="btn btn-lg"
            onClick={() => this.setState({ addModalShow: true })}
          >
            Add TaxiReservation
          </Button>
          <AddTaxiReservationsModal
            show={this.state.addModalShow}
            onHide={AddModelClose}
          />
        </ButtonToolbar>
        <div className="row">
          <div className="col-1"></div>
          <div className="col">
            <TaxiReservationTable reservations={this.state.reservations} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TaxiReservation;
