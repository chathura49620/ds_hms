import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { AddTaxiModel } from '../../components/SuperAdmin/Modals/AddTaxiModel';
import {TaxiTable} from "../../components/SuperAdmin/Tables/TaxiTable";


class Taxi extends Component {
  state = {
    taxi: [],
    addModalShow: false
  };

  componentDidMount() {
    axios
      .get("http://localhost:8089/gettaxies")
      .then((result) => {
        const taxi = result.data;

        this.setState({ taxi: taxi });
      })
      .catch((err) => console.log(err.message));
  }

  render(){
    let AddModelClose = () => this.setState({ addModalShow: false })
  return (
    <React.Fragment>
        <h1 className="mb-5">Taxi</h1>
        <ButtonToolbar>
                    <Button style={{ backgroundColor: "#7121AD", color: "white" }}
                    className="btn btn-lg"
                        onClick={() => this.setState({ addModalShow: true })}
                    >Add Taxi
                    </Button>
                    <AddTaxiModel
                        show={this.state.addModalShow}
                        onHide={AddModelClose}
                    />
        </ButtonToolbar>
        <div className="row">
          <div className="col-1"></div>
          <div className="col">
            <TaxiTable taxi={this.state.taxi} />
          </div>
        </div>
      </React.Fragment>
  );
  }
};

export default Taxi;
