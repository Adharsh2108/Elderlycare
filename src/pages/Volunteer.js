import React, { useState } from "react"; 
import "./Volunteers.css"; // Make sure to create this CSS file 
 
const Volunteer = () => { 
  const [showForm, setShowForm] = useState(false); 
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
  }); 
  const [errors, setErrors] = useState({}); 
  const [submitted, setSubmitted] = useState(false); 
 
  // Handle input change 
  const handleChange = (e) => { 
    setFormData({ ...formData, [e.target.name]: e.target.value }); 
  }; 
 
  // Validate form 
  const validate = () => { 
    let tempErrors = {}; 
    if (!formData.name.trim()) tempErrors.name = "Name is required"; 
    if (!formData.email.includes("@")) tempErrors.email = "Valid email required"; 
    if (formData.phone.length !== 10) tempErrors.phone = "Enter a 10-digit number"; 
    setErrors(tempErrors); 
    return Object.keys(tempErrors).length === 0; 
  }; 
 
  // Handle form submission 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    if (validate()) { 
      setSubmitted(true); 
    } 
  }; 
 
  return ( 
    <div className="volunteer-container"> 
      <h1>Volunteer Sign-up</h1> 
      <p>Join us to help the elderly in your community.</p> 
 
      {!showForm ? ( 
        <button className="signup-btn" onClick={() => setShowForm(true)}> 
          Sign Up 
        </button> 
      ) : submitted ? ( 
        <div className="success-message"> 
          <h2>Message will be sent to your number .</h2> 
        </div> 
      ) : ( 
        <form className="volunteer-form" onSubmit={handleSubmit}> 
          <label>Name:</label> 
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className={errors.name ? "error" : ""} 
          /> 
          {errors.name && <small>{errors.name}</small>} 
 
          <label>Email:</label> 
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className={errors.email ? "error" : ""} 
          /> 
          {errors.email && <small>{errors.email}</small>} 
 
          <label>Phone Number:</label> 
          <input 
            type="text" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            className={errors.phone ? "error" : ""} 
          /> 
          {errors.phone && <small>{errors.phone}</small>} 
 
          <button type="submit" className="submit-btn">Submit</button> 
        </form> 
      )} 
    </div> 
  ); 
}; 
 
export default Volunteer; 