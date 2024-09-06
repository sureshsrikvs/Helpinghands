import React from "react";
import "./Admincontact.css"
const Admincontact = () => {
  return (
    <div className="Admincontact">
      <div className="admincon-container">
        <div className="adcon-check">
        <div className="adcon-check-container">
            <div className="adcon-check-noti-dot"></div>
            <div className="con-check-name">
              <p>name :</p>
              <h2>surya r</h2>
            </div>
            <div className="con-check-email">
              <p>email :</p>
              <h2>stark17@gmail.com</h2>
            </div>
            <div className="con-check-phone">
              <p>phone number :</p>
              <h2>7374525102</h2>
            </div>
            <div className="con-check-message">
              <p>message :</p>
              <h5>hi hello welcome to the club</h5>
            </div>
            <button className="ad-con-check-btn">DELETE</button>
          </div>
        </div>
        <div className="adcon-center-line"></div>
        <div className="adcon-completed">
          <div className="adcon-completed-container">
            <div className="adcon-completed-noti-dot"></div>
            <div className="con-completed-name">
              <p>name :</p>
              <h2>surya r</h2>
            </div>
            <div className="con-completed-email">
              <p>email :</p>
              <h2>stark17@gmail.com</h2>
            </div>
            <div className="con-completed-phone">
              <p>phone number :</p>
              <h5>7374525102</h5>
            </div>
            <div className="con-completed-message">
              <p>7374525102</p>
              <h2>hi hello welcome to the club</h2>
            </div>
            <button className="ad-con-completed-btn">DELETE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admincontact;
