import React, { Component } from 'react'
import TableViewAvailableRooms from '../../components/Traveller/tables/tableViewAvailableRooms';
import { Modal, Button } from 'react-bootstrap';
import AskReserveDetails from '../../components/Traveller/forms/askReserveDetails';
import { Link } from 'react-router-dom';


class ViewAvailableRooms extends Component {
    state = { 

        rooms : [],
        openModal: false,
        editMember: {},
        show: false,
        editOb: {},
     }
    

    handleRemove = (id) => {

console.log("handle remove", id);

      const users  = this.state.users.filter(user => user._id !== id);
      this.setState({users});


      //db delete request


    } 

    handleEditModal = (member) => {


        this.setState({openModal: true});
        console.log("edit modal", member._id)
    }
    closeOpenedModal = () => {

        this.setState({openModal: false});
    }
    

   async componentDidMount(){

        const response = await fetch("http://localhost:8082/rooms", {
            method: "GET",
          });

          const data = await response.json();
          const availableRooms = data.filter(d => d.status === "available")
          this.setState({rooms: availableRooms})
          console.log(availableRooms);


    }

    handleShow = (room) => {
        this.setState({show: true, editOb: room});
    }
    handleClose = () => {

        this.setState({show: false});
    }




    render() { 
        return (
            <>
            available rooms
             <div className="row">
                 <div className="col"></div>
                 <div className="col"></div>
                 <div className="col-2">
                 <Link className='btn btn-sm btn-primary' to="/reservedRooms">View Reserved</Link>
                 </div>
             </div>
            
            <TableViewAvailableRooms filteredItems={this.state.rooms} onRemove={this.handleRemove} onModalView={this.handleShow}/>
           {/* <TableViewMember filteredItems={this.state.users} onRemove={this.handleRemove}
            openEditModal={this.handleEditModal} */}
            {/* /> */}
            <Modal show={this.state.show}>
             <Modal.Header>

               <Modal.Title>Reserve your room</Modal.Title>
             </Modal.Header>
             <Modal.Body>


            <AskReserveDetails  room={this.state.editOb} onClose={this.handleClose}/>


             </Modal.Body>
             <Modal.Footer>
                 <Button variant='danger' onClick={this.handleClose}>
                  close
                 </Button>
                 <Button variant='primary'>
                   save
                 </Button>

             </Modal.Footer>

            </Modal>
            </>
           
        );
    }
}
 
export default ViewAvailableRooms;