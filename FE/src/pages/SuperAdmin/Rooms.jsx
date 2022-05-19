import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { AddRoomsModel } from '../../components/SuperAdmin/Modals/AddRoomsModel';
import {RoomsTable} from "../../components/SuperAdmin/Tables/RoomsTable";


class Rooms extends Component {
  state = {
    rooms: [],
    addModalShow: false
  };

  componentDidMount() {
    axios
      .get("http://localhost:8089/rooms")
      .then((result) => {
        const rooms = result.data;

        this.setState({ rooms: rooms });
      })
      .catch((err) => console.log(err.message));
  }

  render(){
    let AddModelClose = () => this.setState({ addModalShow: false })
  return (
    <React.Fragment>
        <h1 className="mb-5">Rooms</h1>
        <ButtonToolbar>
                    <Button style={{ backgroundColor: "#7121AD", color: "white" }}
                    className="btn btn-lg"
                        onClick={() => this.setState({ addModalShow: true })}
                    >Add Rooms
                    </Button>
                    <AddRoomsModel
                        show={this.state.addModalShow}
                        onHide={AddModelClose}
                    />
        </ButtonToolbar>
        <div className="row">
          <div className="col-1"></div>
          <div className="col">
            <RoomsTable rooms={this.state.rooms} />
          </div>
        </div>
      </React.Fragment>
  );
  }
};

export default Rooms;
