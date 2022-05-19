import React, { useState } from "react";

const TableProfile = () => {
  return (
    <React.Fragment>
      <table
        className="table table-bordered table-sm my-3"
        style={{ width: "1000px" }}
      >
        <thead></thead>

        <tbody>
          <tr>
            <td colSpan="2" style={{ textAlign: "center", fontSize: 20 }}>
              {/* <img
                style={{
                  display: "inline-block",
                  width: "200px",
                  height: "200px",
                }}
                src={userPic}
                alt="user image"
              /> */}
            </td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>Full name</td>
            <td>{}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>Date of birth</td>
            <td>{}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>Email address</td>
            <td>{}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>Contact number</td>
            <td>{}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>Age</td>
            <td>{}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold" }}>Gender</td>
            <td>{}</td>
          </tr>

          <tr>
            <td style={{ fontWeight: "bold" }}>Address</td>
            <td>{}</td>
          </tr>

          <tr>
            <td style={{ fontWeight: "bold" }}>Designation</td>
            <td>{}</td>
          </tr>

          <tr>
            <td style={{ fontWeight: "bold" }}>Bank Name</td>
            <td>{}</td>
          </tr>

          <tr>
            <td style={{ fontWeight: "bold" }}>Account Number</td>
            <td>{}</td>
          </tr>

          <tr>
            <td style={{ fontWeight: "bold" }}>Branch</td>
            <td>{}</td>
          </tr>

          <tr>
            <td style={{ fontWeight: "bold" }}>Branch code</td>
            <td>{}</td>
          </tr>

          <tr>
            <td style={{ fontWeight: "bold" }}>Number of Family members</td>
            <td>{}</td>
          </tr>
        </tbody>
      </table>

      <div className="row">
        <div className="col-4"></div>
        <div className="col">
          <button
           
            className=" btn btn-primary m-1"
           
          >
            Edit Profile
          </button>

          <button
            className="btn btn-danger"
           
           
          >
            Delete Profile
          </button>
        </div>
        <div className="col-2"></div>
      </div>
    </React.Fragment>
  );
};

export default TableProfile;
