// import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import "../styles/SignUp.css"; // Ensure you have the correct path to your custom CSS file
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
// import Layout from "../Component/Layout";
// import Swal from 'sweetalert2'

// function Contact() {
//   const [result, setResult] = useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "218244c8-36f4-4636-943f-897f6e5a0ee0");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       Swal.fire({
//         title: "Good job!",
//         text: "You clicked the button!",
//         icon: "success"
//       });
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };

//   return (
//     <Layout>
//       {/* Centering the form */}
//       <div className="d-flex justify-content-center align-items-center vh-100 w-100">
//         <div className="col-lg-4 col-md-8 col-sm-10">
//           <form className="p-5 border rounded shadow bg-light" onSubmit={onSubmit}>
//             <div className="text-center mb-5">
//               <h1 className="display-2">Contact Me</h1>
//             </div>

//             <div className="form-group mb-4">
//               <label className="display-6" htmlFor="name">Name:</label>
//               <input type="text" className="form-control form-control-lg" id="name" placeholder="Enter your name" name="name" required />
//             </div>

//             <div className="form-group mb-4">
//               <label className="display-6" htmlFor="age">Age:</label>
//               <input type="number" className="form-control form-control-lg" id="age" placeholder="Enter your age" name="age" required />
//             </div>

//             <div className="form-group mb-4">
//               <label className="display-6" htmlFor="mail">Mail:</label>
//               <input type="email" className="form-control form-control-lg" id="mail" placeholder="Enter your mail" name="mail" required />
//             </div>

//             <div className="form-group mb-4">
//               <label className="display-6" htmlFor="message">Message:</label>
//               <textarea className="form-control form-control-lg" id="message" rows="4" placeholder="Enter your message" name="message" required></textarea>
//             </div>

//             <button type="submit" className="btn btn-success btn-lg w-75">Send</button>
//           </form>
//           <div className="text-center mt-3">
//             <span>{result}</span>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </Layout>
//   );
// }

// export default Contact;
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/SignUp.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../Component/Layout";
import Swal from 'sweetalert2';

function Contact() {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    mail: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setResult("Sending message...");
    
    const form = new FormData(event.target);
    form.append("access_key", "b0a9b682-f14d-46fd-a7b1-6ced4931403e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form
      });

      const data = await response.json();

      if (data.success) {
        await Swal.fire({
          title: "Message Sent Successfully!",
          text: "Thank you for reaching out. I'll get back to you soon.",
          icon: "success",
          confirmButtonColor: "#10b981",
          background: "#ffffff",
          backdrop: "rgba(0,0,0,0.6)"
        });
        
        // Reset form
        setFormData({ name: '', age: '', mail: '', message: '' });
        event.target.reset();
        setResult("");
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error", error);
      await Swal.fire({
        title: "Error!",
        text: "Failed to send message. Please try again.",
        icon: "error",
        confirmButtonColor: "#ef4444"
      });
      setResult("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "7747013556",
      description: "Work Number",
      color: "primary"
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "srivastavamanishk@rediffmail.com",
      description: "Professional Email",
      color: "success"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Kota, Rajasthan",
      description: "Current Location",
      color: "info"
    },
    {
      icon: "fas fa-clock",
      title: "Response Time",
      value: "24-48 Hours",
      description: "Typical Response",
      color: "warning"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="contact-hero py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-3 fw-bold text-white mb-3">Get In Touch</h1>
              <p className="lead text-white-50 fs-4 mb-0">
                Ready to discuss your next electrical engineering project?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="contact-info py-5 bg-light">
        <div className="container-fluid">
          <div className="row g-4 justify-content-center mb-5">
            {contactInfo.map((info, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className={`contact-info-card bg-white rounded-4 shadow-sm border-0 p-4 text-center h-100 border-${info.color}`}>
                  <div className={`contact-info-icon mb-3 bg-${info.color}-subtle`}>
                    <i className={`${info.icon} text-${info.color} fs-2`}></i>
                  </div>
                  <h5 className="fw-bold text-dark mb-2">{info.title}</h5>
                  <p className="text-dark mb-1 fw-semibold">{info.value}</p>
                  <small className="text-muted">{info.description}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section py-5">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="contact-form-container bg-white rounded-4 shadow-lg border-0 overflow-hidden">
                {/* Form Header */}
                <div className="form-header bg-primary text-white p-5 text-center position-relative">
                  <div className="form-header-overlay"></div>
                  <div className="position-relative">
                    <i className="fas fa-paper-plane fs-1 mb-3"></i>
                    <h2 className="display-5 fw-bold mb-3">Send Message</h2>
                    <p className="lead mb-0 opacity-90">
                      Fill out the form below and I'll respond within 24-48 hours
                    </p>
                  </div>
                </div>

                {/* Form Body */}
                <div className="form-body p-5">
                  <form onSubmit={onSubmit} className="contact-form">
                    <div className="row g-4">
                      {/* Name Field */}
                      <div className="col-md-6">
                        <div className="form-floating mb-3">
                          <input 
                            type="text" 
                            className="form-control form-control-lg border-2" 
                            id="name" 
                            name="name"
                            placeholder="Your Full Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required 
                          />
                          <label htmlFor="name">
                            <i className="fas fa-user text-primary me-2"></i>
                            Full Name
                          </label>
                        </div>
                      </div>

                      {/* Age Field */}
                      <div className="col-md-6">
                        <div className="form-floating mb-3">
                          <input 
                            type="number" 
                            className="form-control form-control-lg border-2" 
                            id="age" 
                            name="age"
                            placeholder="Your Age"
                            min="18"
                            max="100"
                            value={formData.age}
                            onChange={handleInputChange}
                            required 
                          />
                          <label htmlFor="age">
                            <i className="fas fa-calendar text-success me-2"></i>
                            Age
                          </label>
                        </div>
                      </div>

                      {/* Email Field */}
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input 
                            type="email" 
                            className="form-control form-control-lg border-2" 
                            id="mail" 
                            name="mail"
                            placeholder="your.email@example.com"
                            value={formData.mail}
                            onChange={handleInputChange}
                            required 
                          />
                          <label htmlFor="mail">
                            <i className="fas fa-envelope text-info me-2"></i>
                            Email Address
                          </label>
                        </div>
                      </div>

                      {/* Message Field */}
                      <div className="col-12">
                        <div className="form-floating mb-4">
                          <textarea 
                            className="form-control border-2" 
                            id="message" 
                            name="message"
                            style={{ height: "150px" }}
                            placeholder="Your message here..."
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                          ></textarea>
                          <label htmlFor="message">
                            <i className="fas fa-comment text-warning me-2"></i>
                            Your Message
                          </label>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="col-12 text-center">
                        <button 
                          type="submit" 
                          className={`btn btn-success btn-lg px-5 py-3 rounded-pill shadow ${isLoading ? 'disabled' : ''}`}
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                              Sending...
                            </>
                          ) : (
                            <>
                              <i className="fas fa-paper-plane me-2"></i>
                              Send Message
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>

                  {/* Result Message */}
                  {result && (
                    <div className={`alert ${result.includes('Sending') ? 'alert-info' : result.includes('Failed') ? 'alert-danger' : 'alert-success'} mt-4 rounded-pill text-center`}>
                      <i className={`fas ${result.includes('Sending') ? 'fa-spinner fa-spin' : result.includes('Failed') ? 'fa-exclamation-triangle' : 'fa-check-circle'} me-2`}></i>
                      {result}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="additional-contact py-5 bg-dark text-white position-relative overflow-hidden">
        <div className="contact-bg-animation">
          <div className="floating-orb orb-1"></div>
          <div className="floating-orb orb-2"></div>
          <div className="floating-orb orb-3"></div>
        </div>
        <div className="container-fluid position-relative z-index-2">
          <div className="row">
            <div className="col-12 text-center">
              <div className="section-badge mb-4">
                <span className="badge bg-white bg-opacity-20 text-white px-4 py-2 rounded-pill backdrop-blur">
                  <i className="fas fa-rocket me-2"></i>
                  Alternative Methods
                </span>
              </div>
              <h3 className="display-5 fw-bold mb-4">More Ways to Connect</h3>
              <p className="lead mb-5 opacity-90">Choose the platform where you're most comfortable</p>
              
              <div className="row g-4 justify-content-center">
                {/* <div className="col-lg-4 col-md-6">
                  <div className="alternative-contact-item p-5 position-relative">
                    <div className="contact-glow whatsapp-glow"></div>
                    <div className="social-icon-wrapper mb-4">
                      <i className="fab fa-whatsapp fs-1 text-success"></i>
                      <div className="icon-ring"></div>
                    </div>
                    <h5 className="fw-bold mb-3">WhatsApp Business</h5>
                    <p className="mb-3 text-white-50">Quick messages and file sharing for instant communication</p>
                    <button className="btn btn-outline-success rounded-pill px-4">
                      <i className="fab fa-whatsapp me-2"></i>
                      Message Now
                    </button>
                  </div>
                </div>
                 */}
                <div className="col-lg-4 col-md-6">
  <div className="alternative-contact-item p-5 position-relative">
    <div className="contact-glow linkedin-glow"></div>
    <div className="social-icon-wrapper mb-4">
      <i className="fab fa-linkedin fs-1 text-primary"></i>
      <div className="icon-ring"></div>
    </div>
    <h5 className="fw-bold mb-3">LinkedIn Professional</h5>
    <p className="mb-3 text-white-50">Connect professionally and expand your network</p>

    <a
      href="https://www.linkedin.com/in/manish-kumar-ba6bb08/"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-outline-primary rounded-pill px-4"
    >
      <i className="fab fa-linkedin me-2"></i>
      Connect
    </a>
  </div>
</div>

                
                {/* <div className="col-lg-4 col-md-6">
                  <div className="alternative-contact-item p-5 position-relative">
                    <div className="contact-glow calendar-glow"></div>
                    <div className="social-icon-wrapper mb-4">
                      <i className="fas fa-calendar-alt fs-1 text-warning"></i>
                      <div className="icon-ring"></div>
                    </div>
                    <h5 className="fw-bold mb-3">Schedule Consultation</h5>
                    <p className="mb-3 text-white-50">Book a dedicated time slot for detailed discussion</p>
                    <button className="btn btn-outline-warning rounded-pill px-4">
                      <i className="fas fa-calendar-alt me-2"></i>
                      Book Now
                    </button>
                  </div>
                </div> */}
              </div>

              {/* Trust Indicators */}
              <div className="row mt-5 pt-5 border-top border-white border-opacity-20">
                <div className="col-12">
                  <h5 className="fw-bold mb-4">Why Choose Professional Communication?</h5>
                  <div className="row g-4">
                    <div className="col-md-3">
                      <div className="trust-item">
                        <i className="fas fa-shield-check fs-2 text-success mb-3"></i>
                        <h6 className="fw-bold">Secure & Private</h6>
                        <small className="text-white-50">End-to-end encryption</small>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="trust-item">
                        <i className="fas fa-clock fs-2 text-info mb-3"></i>
                        <h6 className="fw-bold">Quick Response</h6>
                        <small className="text-white-50">24-48 hour guarantee</small>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="trust-item">
                        <i className="fas fa-user-tie fs-2 text-warning mb-3"></i>
                        <h6 className="fw-bold">Professional</h6>
                        <small className="text-white-50">25+ years expertise</small>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="trust-item">
                        <i className="fas fa-handshake fs-2 text-primary mb-3"></i>
                        <h6 className="fw-bold">Reliable</h6>
                        <small className="text-white-50">Proven track record</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Layout>
  );
}

export default Contact;