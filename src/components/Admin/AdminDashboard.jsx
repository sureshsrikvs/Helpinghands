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
import Admincontact from "./Admincontact";
import Adminvol from "./Adminvol";
import Admindonner from "./Admindonner";
import AdminARP from "./AdminARP";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="admin-page-container">
      <div className="admin-sidebar">
        <div className="admin-logocontainer">
        <img src={logo} alt="" />
        </div>
        <ul className="admin-lists">
          <div className="admin-icon">
            <img src={dashboard} alt="" />
            <li>Dashboard</li>
          </div>
          <div className="admin-icon">
            <img src={gallery} alt="" />
            <li>Gallery</li>
          </div>
          <div className="admin-icon">
            <img src={event} alt="" />
            <li>Events</li>
          </div>
          <div className="admin-icon">
            <img src={contact} alt="" />
            <li>Contacts</li>
          </div>
          <div className="admin-icon">
            <img src={volunteer} alt="" />
            <li>Volunteer</li>
          </div>
          <div className="admin-icon">
            <img src={donors} alt="" />
            <li>Donors</li>
          </div>
          <div className="admin-icon">
            <img src={Annualreport} alt="" />
            <li>Annual report</li>
          </div>
         
          
          
          
        </ul>
      </div>
      <div className="admin-topbar">
          <div className="admin-topbar-header">
              <h1>helping hands charity</h1>
          </div>
          
      </div>
      <div className="admin-topbar-content">
              {/* <Adnotification/> */}
              {/* <Adgallery/> */}
              {/* <Adupcomingevents/> */}
              
              {/* <Admincontact/> */}
              {/* <Adminvol/> */}
              {/* <Admindonner/> */}
              <AdminARP/>
          </div>
      

      
    </div>
  );
};

export default AdminDashboard;
