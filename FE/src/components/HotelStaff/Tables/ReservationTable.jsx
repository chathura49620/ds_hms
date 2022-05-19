import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import swal from 'sweetalert';
import { EditReservationsModal } from '../Modals/EditReservationsModal';


export class ReservationTable extends Component {
  constructor(props) {
    super(props);
    this.state = { cate: [], editModalShow: false }
  }

  deleteProCode(id){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Recode!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:8083/deleteReservation/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'username': 'chathura'
            },
        }).then(res => res.json())
        .then((result) => {
          swal({
            title: "Reservation Code Deleted Succesfully",
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

  render(){
    const {id, customerName, roomNo, price } = this.state;
    let EditModelClose = () => this.setState({ editModalShow: false })
  return (
    <div>
      <ButtonToolbar>
      <EditReservationsModal
          show={this.state.editModalShow} 
          onHide={EditModelClose}
          id={id}
          customerName={customerName}
          roomNo={roomNo}
          price={price}
      />
      </ButtonToolbar>
    <table className="table table-bordered table-sm m-2" style={{width:"1000px"}}>
      <thead>
        <tr style={{ backgroundColor: "#7121AD", color: "white" } }>
          <th scope="col">Id</th>
          <th scope="col">Customer Name</th>
          <th scope="col">Romm No</th>
          <th scope="col">Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {this.props.reservations.map((i) => (
          <tr
            key={i.id}
            
          > 
            <td>{i.id}</td>
            <td>{i.customerName}</td>
            <td>{i.roomNo}</td>
            <td>{i.price}</td>
            <td><button 
            className="btn-sm"
            style={{ backgroundColor: "#7121AD", color: "white", marginRight:"4px" }}
            onClick={() => this.setState({ editModalShow: true, id: i.id, customerName: i.customerName, roomNo: i.roomNo, price: i.price })}
            >Edit</button> 
            <button 
            className="btn-sm"
            style={{ backgroundColor: "#BA0D32 ", color: "white" }} 
            onClick={() => this.deleteProCode(i.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};
};

