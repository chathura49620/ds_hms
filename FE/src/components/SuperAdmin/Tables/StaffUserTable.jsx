import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import swal from 'sweetalert';
// import { EditCategoryModal } from '../Modals/EditCategoryModal';

export class StaffUserTable extends Component {
  constructor(props) {
    super(props);
    this.state = { cate: [], editModalShow: false }
  }

  deleteCat(id){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Recode!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        fetch('http://localhost:5000/api/categories', {
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
            title: "Category Deleted Succesfully",
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
    // const {id, name, status, version } = this.state;
    // let EditModelClose = () => this.setState({ editModalShow: false })
  return (
    <div>
       <ButtonToolbar>

        {/* <EditCategoryModal
            show={this.state.editModalShow}
            onHide={EditModelClose}
            id={id}
            name={name}
            status={status}
        /> */}
        </ButtonToolbar>
    <table className="table table-bordered table-sm m-2" style={{width:"1000px"}}>
      <thead>
        <tr style={{ backgroundColor: "#7121AD", color: "white" } }>
          <th scope="col">Id</th>
          <th scope="col">Full Name</th>
          <th scope="col">Email</th>
          <th scope="col">contact</th>
          <th scope="col">Password</th>
          <th scope="col">country</th>
          <th scope="col">type</th>
        </tr>
      </thead>
      <tbody>
        {this.props.users.map((i) => (
          <tr
            key={i.id}
            
          >
             <td>{i.id}</td>
            <td>{i.fullName}</td>
            <td>{i.email}</td>
            <td>{i.contact}</td>
            <td>{i.password}</td>
            <td>{i.country}</td>
            <td>{i.type}</td>
            
          </tr>
        ))}
      </tbody>
     
    </table>
    </div>
  );
};
}


