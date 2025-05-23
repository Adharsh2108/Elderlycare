import React, { useState } from "react"; 
import "./Services.css"; 
import {  
  FaHome,  
  FaHeartbeat,  
  FaPhone,  
  FaUtensils,  
  FaUserNurse,  
  FaHandsHelping, 
  FaArrowLeft 
} from "react-icons/fa"; 
 
const Services = () => { 
  const [selectedService, setSelectedService] = useState(null); 
  const [formSubmitted, setFormSubmitted] = useState(false); 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    setFormSubmitted(true); 
  }; 
 
  const resetForm = () => { 
    setSelectedService(null); 
    setFormSubmitted(false); 
  }; 
 
  const renderServiceForm = () => { 
    if (formSubmitted) { 
      return ( 
        <div className="submission-success"> 
          <h2>Thank You!</h2> 
          <p>All information will be sent to your phone number.</p> 
          <button onClick={resetForm} className="back-button"> 
            <FaArrowLeft /> Back to Services 
          </button> 
        </div> 
      ); 
    } 
 
    switch (selectedService) { 
      case "Home Assistance": 
        return ( 
          <form className="service-form" onSubmit={handleSubmit}> 
            <h2>Home Assistance Request</h2> 
            <div className="form-group"> 
              <label>Address:</label> 
              <input type="text" placeholder="Enter your address" required /> 
            </div> 
            <div className="form-group"> 
              <label>Date Needed:</label> 
              <input type="date" required /> 
            </div> 
            <div className="form-group"> 
              <label>Time Needed:</label> 
              <input type="time" required /> 
            </div> 
            <div className="form-group"> 
              <label>Medical Condition:</label> 
              <input type="text" placeholder="Describe your condition" required /> 
            </div> 
            <div className="form-group"> 
              <label>Required Medication:</label> 
              <input type="text" placeholder="List required medicines" required /> 
            </div> 
            <div className="form-group"> 
              <label>Upload Prescription:</label> 
              <input type="file" required /> 
            </div> 
            <div className="form-group"> 
              <label>Additional Requirements:</label> 
              <textarea placeholder="Describe any extra needs"></textarea> 
            </div> 
            <button type="submit" className="submit-button">Submit Request</button> 
          </form> 
        ); 
 
      case "Medical Support": 
        return ( 
          <form className="service-form" onSubmit={handleSubmit}> 
            <h2>Medical Support Request</h2> 
            <div className="form-group"> 
              <label>Address:</label> 
              <input type="text" placeholder="Enter your address" required /> 
            </div> 
            <div className="form-group"> 
              <label>Date Needed:</label> 
              <input type="date" required /> 
            </div> 
            <div className="form-group"> 
              <label>Medical Condition:</label> 
              <input type="text" placeholder="Describe your condition" required /> 
            </div> 
            <div className="form-group"> 
              <label>Required Medication:</label> 
              <input type="text" placeholder="List required medicines" required /> 
            </div> 
            <div className="form-group"> 
              <label>Upload Prescription:</label> 
              <input type="file" required /> 
            </div> 
            <button type="submit" className="submit-button">Submit Request</button> 
          </form> 
        ); 
 
      case "Emergency Helpline": 
        return ( 
          <form className="service-form" onSubmit={handleSubmit}> 
            <h2>Emergency Helpline</h2> 
            <div className="emergency-numbers"> 
              <div className="emergency-item"> 
                <span role="img" aria-label="ambulance">          </span> 
                <strong>Ambulance:</strong> 108 
              </div> 
              <div className="emergency-item"> 
                <span role="img" aria-label="police">            </span> 
                <strong>Police:</strong> 100 
              </div> 
              <div className="emergency-item"> 
                <span role="img" aria-label="fire">  </span> 
                <strong>Fire:</strong> 101 
              </div> 
              <div className="emergency-item"> 
                <span role="img" aria-label="phone">  </span> 
                <strong>Our Helpline:</strong> 1800-123-456 
              </div> 
            </div> 
            <div className="form-group"> 
              <label>Your Contact Number:</label> 
              <input type="tel" placeholder="Enter your phone number" required /> 
            </div> 
            <div className="form-group"> 
              <label>Emergency Description:</label> 
              <textarea placeholder="Describe your emergency" required></textarea> 
            </div> 
            <button type="submit" className="submit-button">Request Callback</button> 
          </form> 
        ); 
 
      case "Meal Assistance": 
        return ( 
          <form className="service-form" onSubmit={handleSubmit}> 
            <h2>Meal Assistance Request</h2> 
            <div className="form-group"> 
              <label>Address:</label> 
              <input type="text" placeholder="Enter your address" required /> 
            </div> 
            <div className="form-group"> 
              <label>Date Needed:</label> 
              <input type="date" required /> 
            </div> 
            <div className="form-group"> 
              <label>Food Needed:</label> 
              <input type="text" placeholder="Specify food items" required /> 
            </div> 
            <div className="form-group"> 
              <label>Meal Time:</label> 
              <select required> 
                <option value="">Select meal time</option> 
                <option>Breakfast</option> 
                <option>Lunch</option> 
                <option>Dinner</option> 
              </select> 
            </div> 
            <div className="form-group"> 
              <label>Veg/Non-Veg:</label> 
              <select required> 
                <option value="">Select preference</option> 
                <option>Veg</option> 
                <option>Non-Veg</option> 
              </select> 
            </div> 
            <div className="form-group"> 
              <label>Food Allergies:</label> 
              <input type="text" placeholder="Mention allergies (if any)" /> 
            </div> 
            <div className="form-group"> 
              <label>Do you have ingredients?</label> 
              <select required> 
                <option value="">Select option</option> 
                <option>Yes</option> 
                <option>No, please purchase</option> 
              </select> 
            </div> 
            <div className="form-group"> 
              <label>Additional Requests:</label> 
              <textarea placeholder="Specify special requests"></textarea> 
            </div> 
            <button type="submit" className="submit-button">Submit Request</button> 
          </form> 
        ); 
 
      case "Caregiver Support": 
        return ( 
          <form className="service-form" onSubmit={handleSubmit}> 
            <h2>Caregiver Support Request</h2> 
            <div className="form-group"> 
              <label>Address:</label> 
              <input type="text" placeholder="Enter your address" required /> 
            </div> 
            <div className="form-group"> 
              <label>Date Needed:</label> 
              <input type="date" required /> 
            </div> 
            <div className="form-group"> 
              <label>Time Needed:</label> 
              <input type="time" required /> 
            </div> 
            <div className="form-group"> 
              <label>Volunteers Needed:</label> 
              <input type="number" placeholder="Number of volunteers" required /> 
            </div> 
            <div className="form-group"> 
              <label>Support Required:</label> 
              <input type="text" placeholder="Describe the type of support" required /> 
            </div> 
            <div className="form-group"> 
              <label>Time Duration (hours):</label> 
              <input type="number" placeholder="Specify duration in hours" required /> 
            </div> 
            <div className="form-group"> 
              <label>Additional Comments:</label> 
              <textarea placeholder="Any special requirements"></textarea> 
            </div> 
            <button type="submit" className="submit-button">Submit Request</button> 
          </form> 
        ); 
 
      case "Community Engagement": 
        return ( 
          <form className="service-form" onSubmit={handleSubmit}> 
            <h2>Community Engagement</h2> 
            <div className="upcoming-events"> 
              <h3>             Upcoming Events for Elderly:</h3> 
              <div className="event"> 
                <h4>   Art Workshop</h4> 
                <p>April 10, 10:00 AM - 12:00 PM</p> 
                <p>Community Center, Main Hall</p> 
              </div> 
              <div className="event"> 
                <h4>                                   Yoga Sessions</h4> 
                <p>April 12, 8:00 AM - 9:00 AM</p> 
                <p>Park Amphitheater</p> 
              </div> 
              <div className="event"> 
                <h4>    Music Therapy</h4> 
                <p>April 15, 3:00 PM - 4:30 PM</p> 
                <p>Senior Citizens Club</p> 
              </div> 
            </div> 
            <div className="form-group"> 
              <label>Your Name:</label> 
              <input type="text" placeholder="Enter your name" required /> 
            </div> 
            <div className="form-group"> 
              <label>Contact Number:</label> 
              <input type="tel" placeholder="Enter your phone number" required /> 
            </div> 
            <div className="form-group"> 
              <label>Events Interested In:</label> 
              <select multiple> 
                <option>Art Workshop</option> 
                <option>Yoga Sessions</option> 
                <option>Music Therapy</option> 
              </select> 
            </div> 
            <div className="form-group"> 
              <label>Additional Comments:</label> 
              <textarea placeholder="Any special requirements"></textarea> 
            </div> 
            <button type="submit" className="submit-button">Register Interest</button> 
          </form> 
        ); 
 
      default: 
        return <div className="select-prompt">Select a service to proceed.</div>; 
    } 
  }; 
 
  return ( 
    <div className="services-container"> 
      {!selectedService ? ( 
        <> 
          <h1>Our Services</h1> 
          <p className="services-description">We provide dedicated assistance to ensure elderly 
well-being.</p> 
           
          <div className="services-grid"> 
            <div className="service-card" onClick={() => setSelectedService("Home Assistance")}> 
              <FaHome className="icon" /> 
              <h3>Home Assistance</h3> 
              <p>Help with daily activities and medical needs at home</p> 
            </div> 
            <div className="service-card" onClick={() => setSelectedService("Medical Support")}> 
              <FaHeartbeat className="icon" /> 
              <h3>Medical Support</h3> 
              <p>Medical assistance and prescription services</p> 
            </div> 
            <div className="service-card" onClick={() => setSelectedService("Emergency Helpline")}> 
              <FaPhone className="icon" /> 
              <h3>Emergency Helpline</h3> 
              <p>Immediate help in emergency situations</p> 
            </div> 
            <div className="service-card" onClick={() => setSelectedService("Meal Assistance")}> 
              <FaUtensils className="icon" /> 
              <h3>Meal Assistance</h3> 
              <p>Nutritional support and meal delivery</p> 
            </div> 
            <div className="service-card" onClick={() => setSelectedService("Caregiver Support")}> 
              <FaUserNurse className="icon" /> 
              <h3>Caregiver Support</h3> 
              <p>Trained caregivers for personal assistance</p> 
            </div> 
            <div className="service-card" onClick={() => setSelectedService("Community Engagement")}> 
              <FaHandsHelping className="icon" /> 
              <h3>Community Engagement</h3> 
              <p>Social activities and events</p> 
            </div> 
          </div> 
        </> 
      ) : ( 
        <div className="service-details"> 
          <button onClick={resetForm} className="back-button"> 
            <FaArrowLeft /> Back to Services 
          </button> 
          {renderServiceForm()} 
        </div> 
      )} 
    </div> 
  ); 
}; 
 
export default Services; 