import React, { Component } from 'react'
import TableViewAvailableRooms from '../../components/Traveller/tables/tableViewAvailableRooms';
import { Modal, Button } from 'react-bootstrap';
import AskReserveDetails from '../../components/Traveller/forms/askReserveDetails';
import { Link } from 'react-router-dom';
import TableViewReservedRooms from '../../components/Traveller/tables/tableViewReservedRooms';


class ViewReservedRooms extends Component {
    state = { 

        reservedRooms : [],
        openModal: false,
        editMember: {},
        show: false,
        editOb: {},
     }
    

    handleRemove = async(id) => {

      console.log("handle remove", id);

      const  reservedRooms = this.state.reservedRooms.filter(room => room.id !== id);
      this.setState({reservedRooms});

      const response = await fetch("http://localhost:8083/delete/reserved/"+id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

     // const data = await response.json();
      console.log(response);
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

        const response = await fetch("http://localhost:8083/reservedRooms", {
            method: "GET",
          });

          const data = await response.json();
          
          this.setState({reservedRooms: data})
          console.log(data);


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
            reserved rooms
            
           <TableViewReservedRooms filteredItems={this.state.reservedRooms} onModalView={this.handleShow} onRemove={this.handleRemove}/>
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
 
export default ViewReservedRooms;