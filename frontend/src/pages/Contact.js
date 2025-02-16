import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import "../styles/SignUp.css"; // Ensure you have the correct path to your custom CSS file
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import Layout from "../Component/Layout";
import Swal from 'sweetalert2'

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "218244c8-36f4-4636-943f-897f6e5a0ee0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <Layout>
      {/* Centering the form */}
      <div className="d-flex justify-content-center align-items-center vh-100 w-100">
        <div className="col-lg-4 col-md-8 col-sm-10">
          <form className="p-5 border rounded shadow bg-light" onSubmit={onSubmit}>
            <div className="text-center mb-5">
              <h1 className="display-2">Contact Me</h1>
            </div>

            <div className="form-group mb-4">
              <label className="display-6" htmlFor="name">Name:</label>
              <input type="text" className="form-control form-control-lg" id="name" placeholder="Enter your name" name="name" required />
            </div>

            <div className="form-group mb-4">
              <label className="display-6" htmlFor="age">Age:</label>
              <input type="number" className="form-control form-control-lg" id="age" placeholder="Enter your age" name="age" required />
            </div>

            <div className="form-group mb-4">
              <label className="display-6" htmlFor="mail">Mail:</label>
              <input type="email" className="form-control form-control-lg" id="mail" placeholder="Enter your mail" name="mail" required />
            </div>

            <div className="form-group mb-4">
              <label className="display-6" htmlFor="message">Message:</label>
              <textarea className="form-control form-control-lg" id="message" rows="4" placeholder="Enter your message" name="message" required></textarea>
            </div>

            <button type="submit" className="btn btn-success btn-lg w-75">Send</button>
          </form>
          <div className="text-center mt-3">
            <span>{result}</span>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
}

export default Contact;