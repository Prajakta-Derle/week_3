import React, { useState } from "react";
import Button from "../layouts/Button";
import img from "../assets/img/contact.jpg";

const Contact = () => {
  const backgroundColor = "bg-brightColor";
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userMessage: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("contactFormData", JSON.stringify(formData));

    setFormData({
      userName: "",
      userEmail: "",
      userMessage: "",
    });

    setShowPopup(true);
  };

  return (
    <div className=" container flex flex-col gap-5 md:items-center md:flex-row pb-10 pt-32">
      <div className=" flex flex-col lg:flex-row justify-between w-full">
        <form
          className=" w-full lg:w-2/5 space-y-6 bg-[#f2f2f2] p-5 rounded-xl"
          onSubmit={handleSubmit}
        >
          <h1 className=" text-4xl font-semibold text-center">Contact Form</h1>
          <div className=" flex flex-col ">
            <label htmlFor="userName">Full Name</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.34)_0px_3px_8px] transition-all"
              type="text"
              name="userName"
              id="userName"
              value={formData.userName} 
              onChange={handleInputChange}
              placeholder="Enter Your Name"
            />
          </div>
          <div className=" flex flex-col ">
            <label htmlFor="userEmail">Email</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.34)_0px_3px_8px] transition-all"
              type="text"
              name="userEmail"
              id="userEmail"
              value={formData.userEmail}
              onChange={handleInputChange}
              placeholder="Enter Your Email Id"
            />
          </div>
          <div className=" flex flex-col ">
            <label htmlFor="userMessage">Message</label>
            <textarea
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.34)_0px_3px_8px] transition-all"
              name="userMessage"
              id="userMessage"
              value={formData.userMessage}
              onChange={handleInputChange}
              placeholder="Give Your Valuable Feedback"
              cols="30"
              rows="3"
            ></textarea>
          </div>

          <div className=" flex flex-row justify-center">
            <Button title="Submit" backgroundColor={backgroundColor} />
          </div>
        </form>
        <div className=" flex flex-col items-center w-full lg:w-2/4 my-5">
          <img className=" rounded-lg" src={img} alt="img" />
          <p className=" text-center text-sm pt-4 text-[#898888]">
            We'd love to hear from you! Whether you have questions, feedback, or
            need assistance with your travel plans, please don't hesitate to
            reach out. Our team is here to assist you every step of the way.
            Simply fill out the form below, and we'll be in touch shortly.
          </p>
        </div>
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-10 rounded-md shadow-md">
            <p>Thank You...for Contacting Us.</p>
            <button
              onClick={() => setShowPopup(false)}
              className=" bg-darkBackground text-white px-8 py-2 rounded-full hover:bg-[#8482ff] hover:text-darkBackground"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
