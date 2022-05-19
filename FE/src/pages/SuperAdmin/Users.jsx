import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { AddUserModal } from '../../components/SuperAdmin/Modals/AddUserModal';
import {StaffUserTable} from "../../components/SuperAdmin/Tables/StaffUserTable";


class Users extends Component {
  state = {
    users: [],
    addModalShow: false
  };

  componentDidMount() {
    axios
      .get("http://localhost:8083/users")
      .then((result) => {
        const users = result.data;

        this.setState({ users: users });
      })
      .catch((err) => console.log(err.message));
  }

  render(){
    let AddModelClose = () => this.setState({ addModalShow: false })
  return (
    <React.Fragment>
        <h1 className="mb-5">Users</h1>
        <ButtonToolbar>
                    <Button style={{ backgroundColor: "#7121AD", color: "white" }}
                    className="btn btn-lg"
                        onClick={() => this.setState({ addModalShow: true })}
                    >Add System User
                    </Button>
                    <AddUserModal
                        show={this.state.addModalShow}
                        onHide={AddModelClose}
                    />
        </ButtonToolbar>
        <div className="row">
          <div className="col-1"></div>
          <div className="col">
            <StaffUserTable users={this.state.users} />
          </div>
        </div>
      </React.Fragment>
  );
  }
};

export default Users;
