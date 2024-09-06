import React, { useState } from "react";
import "./Adminform.css";

const Adform = () => {
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ eventName, date, location, description, image });
  };
  return (
    <div className="adminform">
      <div className="adminform-container">
        <div className="adminform-heading">
          <h2 className="adf-form-header">Upcoming events</h2>
        </div>
        <div className="adf-form-container">
          <form onSubmit={handleSubmit}>
            <div className="adf-form-group">
              <div>
                <label>*Event Name:</label>
                <input
                  type="text"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label>*Date:</label>
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <div>
                <label>*Location:</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="adf-form-group">
              <div>
                <label>*Description:</label>
                <textarea
                  rows="4"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className="adf-upload-section">
                <label>*Image:</label>
                <input type="file" onChange={handleImageUpload} required />
                <button type="submit">Upload Image</button>
              </div>
            </div>

            <div className="adf-submit-button">
              <button type="submit">Create Event</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Adform;
