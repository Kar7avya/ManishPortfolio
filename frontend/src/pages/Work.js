// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Layout from "../Component/Layout";
// import "../styles/project.css";
// import merncard from "../images/merncertificate.png";
// // import awscard from "../images/awsflowchart.png";
// import boltcard from "../images/Bolt.png";
// import adani from "../images/Adani.jpg";

// function Work() {
//   return (
//     <Layout>
      

//         <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
//   <div className="card h-90 shadow-sm rounded-4 border-0 hover-shadow" style={{ transition: "all 0.3s ease" }}>
//     <img 
//       src={adani} 
//       className="card-img-top" 
//       alt="ADANI POWER RAJASTHAN LIMITED" 
//       style={{ height: "530px",width:"1600px", objectFit: "cover" }}
//     />
//     <div className="card-body d-flex flex-column">
//       <h5 className="card-title fw-bold text-dark display-1  mb-2">O&amp;M Head</h5>
//       <p className="card-text text-secondary tdisplay-2 mb-0">
//         ADANI POWER RAJASTHAN LIMITED<br />
//         May 2025 - Present (5 months)<br />
//         Kota, Rajasthan, India
//       </p>
//     </div>
//   </div>
// </div>

        
//         <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
//   <div className="card h-90 shadow-sm rounded-4 border-0 hover-shadow" style={{ transition: "all 0.3s ease" }}>
//     <img 
//       src={adani} 
//       className="card-img-top" 
//       alt="ADANI POWER RAJASTHAN LIMITED" 
//       style={{ height: "530px",width:"1600px", objectFit: "cover" }}
//     />
//     <div className="card-body d-flex flex-column">
//       <h5 className="card-title fw-bold text-dark display-1  mb-2">Associate Vice President</h5>
//       <p className="card-text text-secondary tdisplay-2 mb-0">
//         ADANI POWER RAJASTHAN LIMITED<br />
//         July 2021 - April 2025 (3 years 10 months)<br />
//         Godda, Jharkhand, India
//       </p>
//     </div>
//   </div>
// </div>
//     </Layout>
//   );
// }

// export default Work;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../Component/Layout";
import "../styles/project.css";
import adani from "../images/Adani.jpg";
import lanco from "../images/lanco.jpg";
import gmr from "../images/gmr.png";
import KSFL from "../images/gmr.png";

function Work() {
  const workExperience = [
    {
      id: 1,
      position: "O&M Head",
      company: "Adani Power Rajasthan Limited",
      duration: "May 2025 - Present",
      period: "5 months",
      location: "Kota, Rajasthan, India",
      description: "Operations and maintenance leadership for large-scale power generation facilities",
      responsibilities: [
        "Leading operations and maintenance teams",
        "Ensuring plant reliability and efficiency",
        "Strategic planning for maintenance schedules",
        "Safety and compliance management"
      ],
      icon: "fas fa-cogs",
      color: "primary",
      image: adani,
      current: true
    },
    {
      id: 2,
position: "Associate Vice President",
company: "Adani Power Jharkhand Limited",
duration: "July 2021 - April 2025",
period: "3 years 10 months",
location: "Godda, Jharkhand, India",
description: "Commissioning manager and maintenance head for mega power projects",
responsibilities: [
  "Commissioning management for 2×800 MW projects",
  "Maintenance head ensuring zero downtime",
  "Team leadership and strategic planning",
  "Contract management and vendor coordination"
],
icon: "fas fa-industry",
color: "success",
image: adani,

    },
    {
      id: 3,
      position: "General Manager",
      company: "GMR Power Limited",
      duration: "2015 - 2021",
      period: "6 years",
      location: "Raipur, Chhattisgarh, India",
      description: "6+ years of operational excellence in power generation",
      responsibilities: [
        "Overall plant operations management",
        "Strategic planning and execution",
        "Performance optimization initiatives",
        "Stakeholder management and coordination"
      ],
      icon: "fas fa-bolt",
      color: "warning",
      image: gmr
    },
    {
      id: 4,
      position: "Sr. DGM Electrical (HOD)",
      company: "LANCO ANPARA",
      duration: "2011 - 2015",
      period: "4 years",
      location: "Anpara, Uttar Pradesh, India",
      description: "Head of Department for electrical maintenance across all plant systems",
      responsibilities: [
        "HOD for electrical systems maintenance",
        "Technical leadership and innovation",
        "System reliability improvements",
        "Team development and training"
      ],
      icon: "fas fa-flash",
      color: "info",
      image: lanco
    },
        {
  id: 5,
  position: "Lead Manager - Electrical",
  company: "Reliance Industries Limited",
  duration: "September 2007 - May 2011",
  period: "3 years 9 months",
  location: "Jamnagar Area, India",
  description: "Electrical commissioning and operations & maintenance in large-scale industrial facilities",
  responsibilities: [
    "Handled electrical commissioning activities",
    "Led O&M for electrical systems",
    "Ensured reliability of power distribution systems",
    "Coordinated with cross-functional teams for smooth operations"
  ],
  icon: "fas fa-bolt",
  color: "success",
  image: Reliance,   // replace with actual image variable
  current: false
},
{
  id: 6,
  position: "Electrical Manager",
  company: "KRIBHCO Shyam Fertilizer Ltd",
  duration: "1997 - 2007",
  period: "10 years",
  location: "India",
  description: "Managed electrical operations and maintenance for fertilizer manufacturing plant",
  responsibilities: [
    "Led electrical maintenance and reliability programs",
    "Ensured uninterrupted power supply for plant operations",
    "Supervised installation and commissioning of electrical equipment",
    "Implemented safety and compliance measures"
  ],
  icon: "fas fa-industry",
  color: "warning",
  image: KSFL,   // replace with actual image variable
  current: false
},
{
  id: 7,
  position: "Service Engineer",
  company: "Jyoti Ltd.",
  duration: "November 1994 - June 1997",
  period: "2 years 8 months",
  location: "New Delhi Area, India",
  description: "Handled high-voltage switchgear installations and services across Northern India",
  responsibilities: [
    "Installed and serviced HV switchgear systems",
    "Provided technical support for client sites",
    "Ensured operational efficiency of switchgear equipment",
    "Covered installations across Northern India region"
  ],
  icon: "fas fa-tools",
  color: "danger",
  image: Jyoti,   // replace with actual image variable
  current: false
}

        
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="work-header py-5 mb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-3 py-5 fw-bold text-light mb-3">Professional Experience</h1>
              <p className="lead text-light fs-4">
                30+ Years of Leadership Excellence in Power Generation & Electrical Engineering
              </p>
              <div className="header-stats d-flex justify-content-center flex-wrap gap-4 mt-4">
                <div className="stat-item text-center">
                  <div className="stat-number display-6 fw-bold text-primary">30+</div>
                  <div className="stat-label text-light">Years Experience</div>
                </div>
                <div className="stat-item text-center">
                  <div className="stat-number display-6 fw-bold text-success">4</div>
                  <div className="stat-label text-light">Major Companies</div>
                </div>
                <div className="stat-item text-center">
                  <div className="stat-number display-6 fw-bold text-warning">1600+</div>
                  <div className="stat-label text-light">MW Capacity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="work-timeline py-5">
        <div className="container-fluid">
          <div className="timeline-container position-relative">
            {workExperience.map((job, index) => (
              <div key={job.id} className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}>
                <div className="timeline-content">
                  <div className={`timeline-card bg-white rounded-4 shadow-lg border-0 overflow-hidden ${job.current ? 'current-position' : ''}`}>
                    {/* Card Header */}
                    <div className={`card-header bg-${job.color} text-white p-4 position-relative`}>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="flex-grow-1">
                          <div className="d-flex align-items-center mb-2">
                            <i className={`${job.icon} fs-3 me-3`}></i>
                            <div>
                              <h4 className="mb-0 fw-bold">{job.position}</h4>
                              {job.current && (
                                <span className="badge bg-light text-primary px-3 py-1 rounded-pill mt-1">
                                  Current Position
                                </span>
                              )}
                            </div>
                          </div>
                          <h6 className="mb-0 opacity-90">{job.company}</h6>
                        </div>
                        <div className="company-logo">
                          <img 
                            src={job.image} 
                            alt={job.company}
                            className="rounded-circle border border-white"
                            style={{ width: "90px", height: "100px", objectFit:"fill" }}
                          />
                        </div>
                      </div>
                      <div className="header-overlay"></div>
                    </div>

                    {/* Card Body */}
                    <div className="card-body p-4">
                      <div className="row mb-4">
                        <div className="col-md-6">
                          <div className="info-item mb-3">
                            <i className="fas fa-calendar-alt text-primary me-2"></i>
                            <span className="fw-semibold text-dark">{job.duration}</span>
                          </div>
                          <div className="info-item mb-3">
                            <i className="fas fa-clock text-success me-2"></i>
                            <span className="text-muted">{job.period}</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="info-item mb-3">
                            <i className="fas fa-map-marker-alt text-danger me-2"></i>
                            <span className="text-muted">{job.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-dark mb-4 lead">{job.description}</p>

                      {/* Key Responsibilities */}
                      <div className="responsibilities">
                        <h6 className="fw-bold text-dark mb-3 d-flex align-items-center">
                          <i className="fas fa-tasks text-primary me-2"></i>
                          Key Responsibilities
                        </h6>
                        <div className="row">
                          {job.responsibilities.map((responsibility, idx) => (
                            <div key={idx} className="col-md-6 mb-2">
                              <div className="responsibility-item d-flex align-items-start">
                                <i className="fas fa-check-circle text-success me-2 mt-1 flex-shrink-0"></i>
                                <span className="text-muted small">{responsibility}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="card-footer bg-light p-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="experience-badge">
                          <span className={`badge bg-${job.color}-subtle text-${job.color} px-3 py-2 rounded-pill`}>
                            {job.period} Experience
                          </span>
                        </div>
                        <div className="timeline-number">
                          <span className={`badge bg-${job.color} text-white rounded-circle`} 
                                style={{ width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {job.id}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Timeline Connector */}
                <div className={`timeline-connector bg-${job.color}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Summary Section */}
      <section className="career-summary py-5 bg-light">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-4 fw-bold text-dark mb-3">Career Highlights</h2>
              <p className="lead text-muted">Key achievements across leadership positions</p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="highlight-card bg-white rounded-4 p-4 text-center shadow-sm border-0 h-100">
                <div className="highlight-icon mb-3">
                  <i className="fas fa-trophy text-warning fs-1"></i>
                </div>
                <h5 className="fw-bold text-dark mb-2">Leadership Excellence</h5>
                <p className="text-muted small mb-0">Proven track record in managing large-scale power projects and teams</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="highlight-card bg-white rounded-4 p-4 text-center shadow-sm border-0 h-100">
                <div className="highlight-icon mb-3">
                  <i className="fas fa-chart-line text-success fs-1"></i>
                </div>
                <h5 className="fw-bold text-dark mb-2">Operational Excellence</h5>
                <p className="text-muted small mb-0">Consistent delivery of projects within schedule and budget</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="highlight-card bg-white rounded-4 p-4 text-center shadow-sm border-0 h-100">
                <div className="highlight-icon mb-3">
                  <i className="fas fa-users text-primary fs-1"></i>
                </div>
                <h5 className="fw-bold text-dark mb-2">Team Development</h5>
                <p className="text-muted small mb-0">Expert in mentoring and building high-performing teams</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="highlight-card bg-white rounded-4 p-4 text-center shadow-sm border-0 h-100">
                <div className="highlight-icon mb-3">
                  <i className="fas fa-cog text-info fs-1"></i>
                </div>
                <h5 className="fw-bold text-dark mb-2">Technical Innovation</h5>
                <p className="text-muted small mb-0">Implementation of cutting-edge solutions in power generation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Work;
