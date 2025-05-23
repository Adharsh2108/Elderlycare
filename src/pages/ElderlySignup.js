import React, { useState } from "react"; 
import "./ElderlySignup.css"; 
 
const ElderlySignup = ({ selectedService = "general", goBack }) => { 
  const [formData, setFormData] = useState({ 
    name: "", 
    contact: "", 
    address: "", 
    condition: "", 
    foodType: "", 
    mealTime: "", 
    allergies: "", 
    specialRequirements: "", 
    volunteersNeeded: 1, 
    duration: "" 
  }); 
  const [submitted, setSubmitted] = useState(false); 
 
  const handleChange = (e) => { 
    const { name, value } = e.target; 
    setFormData(prev => ({ ...prev, [name]: value })); 
  }; 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    setSubmitted(true); 
    // Here you would typically send the data to your backend 
    console.log("Form submitted:", formData); 
  }; 
 
  return ( 
    <div className="elderly-signup-page"> 
      {!submitted ? ( 
        <div className="elderly-signup-container"> 
          <h2 className="form-title"> 
            {selectedService.replace(/^\w/, (c) => c.toUpperCase())} Request 
          </h2> 
           
          <form onSubmit={handleSubmit} className="signup-form"> 
            {/* Common Fields */} 
            <div className="form-group"> 
              <label>Full Name*</label> 
              <input  
                type="text"  
                name="name"  
                value={formData.name} 
                onChange={handleChange}  
                required  
              /> 
            </div> 
 
            <div className="form-group"> 
              <label>Contact Number*</label> 
              <input  
                type="tel"  
                name="contact"  
                value={formData.contact} 
                onChange={handleChange}  
                required  
              /> 
            </div> 
 
            <div className="form-group"> 
              <label>Address*</label> 
              <input  
                type="text"  
                name="address"  
                value={formData.address} 
                onChange={handleChange}  
                required  
              /> 
            </div> 
 
            {/* Medical Support Specific Fields */} 
            {selectedService === "medical" && ( 
              <> 
                <div className="form-group"> 
                  <label>Medical Condition*</label> 
                  <input  
                    type="text"  
                    name="condition"  
                    value={formData.condition} 
                    onChange={handleChange}  
                    required  
                  /> 
                </div> 
 
                <div className="form-group"> 
                  <label>Upload Prescription*</label> 
                  <input  
                    type="file"  
                    name="prescription"  
                    onChange={handleChange}  
                    required  
                  /> 
                </div> 
              </> 
            )} 
 
            {/* Meal Assistance Specific Fields */} 
            {selectedService === "meal" && ( 
              <> 
                <div className="form-group"> 
                  <label>Food Preferences*</label> 
                  <input  
                    type="text"  
                    name="foodType"  
                    value={formData.foodType} 
                    onChange={handleChange}  
                    placeholder="E.g., Soft foods, vegetarian, etc." 
                    required  
                  /> 
                </div> 
 
                <div className="form-group"> 
                  <label>Meal Time*</label> 
                  <select  
                    name="mealTime"  
                    value={formData.mealTime} 
                    onChange={handleChange}  
                    required 
                  > 
                    <option value="">Select Meal Time</option> 
                    <option value="breakfast">Breakfast</option> 
                    <option value="lunch">Lunch</option> 
                    <option value="dinner">Dinner</option> 
                  </select> 
                </div> 
 
                <div className="form-group"> 
                  <label>Food Allergies</label> 
                  <input  
                    type="text"  
                    name="allergies"  
                    value={formData.allergies} 
                    onChange={handleChange}  
                    placeholder="List any food allergies" 
                  /> 
                </div> 
              </> 
            )} 
 
            {/* Caregiver Support Specific Fields */} 
            {selectedService === "caregiver" && ( 
              <> 
                <div className="form-group"> 
                  <label>Number of Volunteers Needed*</label> 
                  <input  
                    type="number"  
                    name="volunteersNeeded"  
                    min="1" 
                    value={formData.volunteersNeeded} 
                    onChange={handleChange}  
                    required  
                  /> 
                </div> 
 
                <div className="form-group"> 
                  <label>Support Duration (hours)*</label> 
                  <input  
                    type="text"  
                    name="duration"  
                    value={formData.duration} 
                    onChange={handleChange}  
                    placeholder="E.g., 2 hours daily for 1 week" 
                    required  
                  /> 
                </div> 
              </> 
            )} 
 
            {/* Additional Requirements */} 
            <div className="form-group"> 
              <label>Special Requirements</label> 
              <textarea  
                name="specialRequirements"  
                value={formData.specialRequirements} 
                onChange={handleChange}  
                placeholder="Any additional needs or instructions" 
              /> 
            </div> 
 
            <div className="form-actions"> 
              <button type="submit" className="submit-btn"> 
                Submit Request 
              </button> 
              <button  
                type="button"  
                onClick={goBack}  
                className="back-btn" 
              > 
                Back to Services 
              </button> 
            </div> 
          </form> 
        </div> 
      ) : ( 
        <div className="thank-you-message"> 
          <div className="checkmark">✓</div> 
          <h2>Thank You!</h2> 
          <p>Your {selectedService} request has been submitted successfully.</p> 
          <p>We'll contact you shortly at {formData.contact}.</p> 
          <button  
            onClick={goBack}  
            className="back-btn" 
          > 
            Back to Services 
          </button> 
        </div> 
      )} 
    </div> 
  ); 
}; 
 
export default ElderlySignup;