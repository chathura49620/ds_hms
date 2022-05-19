import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import swal from 'sweetalert';
import { EditTaxiModel } from '../Modals/EditTaxiModel';

export class TaxiTable extends Component {
  constructor(props) {
    super(props);
    this.state = { cate: [], editModalShow: false }
  }

  deleteMatCode (id){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Recode!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:8089/delete/hoteltaxies/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'username': 'chathura'
            },
            body: JSON.stringify({
                id: id
               
            })
        }).then(res => res.json())
        .then((result) => {
          swal({
            title: "Material Code Deleted Succesfully",
            icon: "success",
            button: "Done",
          });
          setTimeout(function() {
            window.location.reload(); 
          }.bind(this), 1500);
      });
      
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  }

  render() {
    const {id, vehicalNo, drivarName, mobile } = this.state;
    let EditModelClose = () => this.setState({ editModalShow: false })
  return (
    <div>
       <ButtonToolbar>
      <EditTaxiModel
          show={this.state.editModalShow}
          onHide={EditModelClose}
          id={id}
          vehicalNo={vehicalNo}
          drivarName={drivarName}
          mobile={mobile}
      />
      </ButtonToolbar>
    <table className="table table-bordered table-sm m-2" style={{width:"1000px"}}>
      <thead>
        <tr style={{ backgroundColor: "#7121AD", color: "white" } }>
          <th scope="col">Id</th>
          <th scope="col">Vehical No</th>
          <th scope="col">Drivare Name</th>
          <th scope="col">Mobile</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {this.props.taxi.map((i) => (
          <tr
            key={i.id}
          >
            <td>{i.id}</td>
            <td>{i.vehicalNo}</td>
            <td>{i.drivarName}</td>
            <td>{i.mobile}</td>
            <td>
                  <button
                    className="btn-sm"
                    style={{
                      backgroundColor: "#7121AD",
                      color: "white",
                      marginRight: "4px",
                    }}
                    onClick={() =>
                      this.setState({
                        editModalShow: true,
                        id: i.id,
                        vehicalNo: i.vehicalNo,
                        drivarName: i.drivarName,
                        mobile: i.mobile,
                      })
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="btn-sm"
                    style={{ backgroundColor: "#BA0D32 ", color: "white" }}
                    onClick={() => this.deleteMatCode(i.id)}
                  >
                    Delete
                  </button>
                </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
  }
};


