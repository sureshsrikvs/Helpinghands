import React from "react";
import "./AdminDashboard.css";
import logo from "../Admin/Adminimage/logo.png"
import dashboard from "../Admin/Adminimage/dashboard.png"
import gallery from "../Admin/Adminimage/gallery.png"
import event from "../Admin/Adminimage/event.png"
import contact from "../Admin/Adminimage/contact.png"
import volunteer from "../Admin/Adminimage/volunteer.png"
import donors from "../Admin/Adminimage/donors.png"
import Annualreport from "../Admin/Adminimage/Annualreport.png"
import Adnotification from "./Adnotification";
import Adgallery from "./Adgallery";
import Adupcomingevents from "./Adupcomingevents";
import Adform from "./Adminform";
import Admincontact from "./Admincontact";

const AdminDashboard = () => {
  return (
    <div className="page-container">
      <div className="sidebar">
        <div className="logocontainer">
        <img src={logo} alt="" />
        </div>
        <ul className="lists">
          <div className="icon">
            <img src={dashboard} alt="" />
            <li>Dashboard</li>
          </div>
          <div className="icon">
            <img src={gallery} alt="" />
            <li>Gallery</li>
          </div>
          <div className="icon">
            <img src={event} alt="" />
            <li>Events</li>
          </div>
          <div className="icon">
            <img src={contact} alt="" />
            <li>Contacts</li>
          </div>
          <div className="icon">
            <img src={volunteer} alt="" />
            <li>Volunteer</li>
          </div>
          <div className="icon">
            <img src={donors} alt="" />
            <li>Donors</li>
          </div>
          <div className="icon">
            <img src={Annualreport} alt="" />
            <li>Annual report</li>
          </div>
         
          
          
          
        </ul>
      </div>
      <div className="topbar">
          <div className="topbar-header">
              <h1>helping hands charity</h1>
          </div>
          <div className="topbar-content">
              {/* <Adnotification/> */}
              {/* <Adgallery/> */}
              {/* <Adupcomingevents/> */}
              {/* <Adform/> */}
              <Admincontact/>
          </div>
      </div>

      

      
    </div>
  );
};

export default AdminDashboard;
