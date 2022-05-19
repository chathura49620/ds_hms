import React from 'react'

const TableViewAvailableRooms = ({filteredItems, onModalView}) => {
    return (  

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Room No</th>
      <th scope="col">Type</th>
      <th scope="col">Status</th>
      <th scope="col">Hourly Rate</th>
      <th scope="col">Daily Rate</th>
    </tr>
  </thead>
  <tbody>

{
    
    filteredItems.map((room) => (


   <tr key={room.id}>
      <th scope="row">{filteredItems.indexOf(room)+1}</th>
      <td>{room.roomNo}</td>
      <td>{room.type}</td>
      <td>{room.status}</td>
      <td>{room.perHour}</td>
      <td>{room.perDay}</td>
      <td><button onClick={() => onModalView(room)}  className='btn btn-sm btn-primary'>Book</button></td>
      {/* <td><button onClick={() => onRemove(room._id)} className='btn btn-sm btn-danger'>remove</button></td> */}
      
    </tr>


    ))
}
  </tbody>
</table>

    );
}
 
export default TableViewAvailableRooms