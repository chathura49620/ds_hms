import React from 'react'

const TableViewReservedRooms = ({filteredItems, onModalView, onRemove}) => {
    return (  

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Room No</th>
      <th scope="col">Type</th>
      <th scope="col">Customer Name</th>
      <th scope="col">Passport</th>
      <th scope="col">Start Date</th>
      <th scope="col">End Date</th>
    </tr>
  </thead>
  <tbody>

{
    
    filteredItems.map((room) => (


   <tr key={room.id}>
      <th scope="row">{filteredItems.indexOf(room)+1}</th>
      <td>{room.roomNo}</td>
      <td>{room.type}</td>
      <td>{room.customerName}</td>
      <td>{room.customerId}</td>
      <td>{room.startDate}</td>
      <td>{room.endDate}</td>
      <td><button onClick={() => onModalView(room)}  className='btn btn-sm btn-primary'>Book</button></td>
      <td><button onClick={() => onRemove(room.id)}  className='btn btn-sm btn-danger'>Cansel</button></td>
      
    </tr>


    ))
}
  </tbody>
</table>

    );
}
 
export default TableViewReservedRooms