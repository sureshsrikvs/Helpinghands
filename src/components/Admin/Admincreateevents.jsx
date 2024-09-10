import React from 'react'
import "./Admincreateevents.css"

const Admincreateevents = () => {
  

  return (
   <div className="admincreateevents">
  <h1 class="admincreate-event-title">UPCOMING EVENTS</h1>
     <div class="admincreate-event-container">
  
  <div className="admincreate-event-form">
    <div className="admincreate-form-row">
      <div className="admincreate-form-group">
        <label for="event-name"><span className='spanred'>*</span>EVENT NAME :</label>
        <input type="text" id="event-name" name="event-name" />
      </div>

      <div className="admincreate-form-group">
        <label for="event-date"><span className='spanred'>*</span>DATE :</label>
        <input type="date" id="event-date" name="event-date" />
      </div>

      <div className="admincreate-form-group">
        <label for="event-location"><span className='spanred'>*</span>LOCATION :</label>
        <input type="text" id="event-location" name="event-location" />
      </div>
    </div>

    <div className="admincreate-form-row">
      <div className="admincreate-form-group">
        <label for="event-description"><span className='spanred'>*</span>DESCRIPTION :</label>
        <textarea id="event-description" name="event-description"></textarea>
      </div>

      <div className="admincreate-form-group admincreate-image-upload">
        <label for="event-image"><span className='spanred'>*</span>IMAGE :</label>
        <div className="admincreate-uploadbox">
        <div className="center-elements">
        <button className="admincreate-upload-btn">UPLOAD IMAGE</button>
        <button className="admincreate-submit-btn">SUBMIT</button>
        </div>
        </div>
      </div>
    </div>

    <button className="admincreate-create-event-btn">CREATE EVENT</button>
  </div>
</div>
   </div>

  );
}


export default Admincreateevents
