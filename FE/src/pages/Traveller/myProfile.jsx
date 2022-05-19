import React, { Component } from "react";
//import FormPopup from "../../components/storeManager/reusables/formpopup";
//import FormProfileEdit from "../../components/storeManager/forms/formprofileedit";
//import userPic from "../../pages/assets/pem56.png";
//import NewDeleteProfileFeedback from "../../components/storeManager/forms/newdeleteprofilefeedback";
import swal from "sweetalert";
import TableProfile from "../../components/Traveller/tables/tableProfile";

class MyProfile extends Component {
  state = {
    userObjectId: "611a4e2e4710cdbb4ee14fb2",

    user: {},
    openPopup: false,
    openReasonDeletePopup: false,
    deleteUserName: "",
  };

  async componentDidMount() {
    //get user details from database and set them to the state and tableprofile
    //use email of user session
    const userId = localStorage.getItem('u_id');
    const response = await fetch("http://localhost:8089/userById/"+ userId, {
        method: "GET",
      });
  
  
      const data = await response.json();
  
      console.log(data);
  

  
  }

  setOpenPopup = () => {
    this.setState({ openPopup: true });
  };

  closeOpenPopup = () => {
    this.setState({ openPopup: false });
  };

  closePopAndSetState = (jsonOb) => {
    this.setState({ user: jsonOb, openPopup: false });
  };

  setReasonDeleteOpenPopup = (name, id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result) {
        this.setState({
          openReasonDeletePopup: true,
          deleteUserName: name,
        });
      } //end of if
    });
  };

  closeOpenReasonDeletePopup = () => {
    this.setState({ openReasonDeletePopup: false });
  };

  closeOpenReasonDeletePopupAndLOGOut = () => {
    const currentUserId = this.state.user._id;
    this.setState({ openReasonDeletePopup: false });

    //now log out
  };

  render() {
    return (
      <React.Fragment>
        <div style={{ marginLeft: "120px" }}>
          <div className="row">
            <div className="col-2"></div>

            <div className="col">
              <h2 className="mt-3">My Profile</h2>
              <TableProfile/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MyProfile;
