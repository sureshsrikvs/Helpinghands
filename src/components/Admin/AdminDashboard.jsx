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
// import Adform from "./Adminform";
import Admincontact from "./Admincontact";
import Adminvol from "./Adminvol";
import Admindonner from "./Admindonner";
import AdminARP from "./AdminARP";
import { Link } from "react-router-dom";

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
            <li><Link to="/" >Dashboard</Link></li>
          </div>
          <div className="icon">
            <img src={gallery} alt="" />
            <li><Link to="/gallery" >Gallery</Link></li>
          </div>
          <div className="icon">
            <img src={event} alt="" />
            <li><Link to="/events" >Events</Link></li>
          </div>
          <div className="icon">
            <img src={contact} alt="" />
            <li><Link to="/contact" >Contacts</Link></li>
          </div>
          <div className="icon">
            <img src={volunteer} alt="" />
            <li><Link to="/volunteer" >Volunteer</Link></li>
          </div>
          <div className="icon">
            <img src={donors} alt="" />
            <li><Link to="/donors" >Donors</Link></li>
          </div>
          <div className="icon">
            <img src={Annualreport} alt="" />
            <li><Link to="/annual-report" >Annual report</Link></li>
          </div>
         
          
          
          
        </ul>
      </div>
      <div className="topbar">
          <div className="topbar-header">
              <h1>helping hands charity</h1>
          </div>
          
      </div>
      <div className="topbar-content">
              <Adnotification/>
              {/* <Adgallery/> */}
              {/* <Adupcomingevents/> */}
              
              {/* <Admincontact/> */}
              {/* <Adminvol/> */}
              {/* <Admindonner/> */}
              {/* <AdminARP/> */}
          </div>
      

      
    </div>
  );
};

export default AdminDashboard;
