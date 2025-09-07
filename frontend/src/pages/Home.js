import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../Component/Layout";
import profileimage from "../images/profile.png";
import Typed from "typed.js";
import "../styles/Home.css";
import manish from "../images/manish.jpg";

function Home() {
  // useEffect(() => {
  //   const options = {
  //     strings: [
  //       "Manish Kumar", 
  //       "O&M Head"
  //     ],
  //     typeSpeed: 80,
  //     backSpeed: 60,
  //     loop: true,
  //     backDelay: 2000,
  //     startDelay: 500,
  //   };
    
  //   const typed = new Typed(".auto-type", options);

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section p-0">
        <div className="container-fluid">
          <div className="row align-items-center min-vh-75">
            {/* Text Content */}
            <div className="col-lg-7 col-md-12 order-lg-1 order-2">
              <div className="hero-content pe-lg-4">
                <div className="mb-4">
                  <h1 className="display-2 fw-bold text-primary mb-3">
                    {/* <span className="auto-type text-gradient"></span> */}
                    {/* <span className="cursor-blink">|</span> */}
                  </h1>
                  <div>
                  <p className=" name display-2  mb-4  text-white"><strong>Manish Kumar</strong></p>
                  <p className=" name fs-4  mb-5  text-white"><strong>O & M Head</strong></p>
                  </div>
                  <p className="lead fs-4 mb-4 text-white">
  Head of O&M Projects with over 30 years of expertise in power systems and team leadership, specializing in large-scale power plant operations.
</p>

                </div>

                {/* Contact Cards - Desktop */}
                <div className="contact-cards d-none d-lg-block">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="contact-card p-4 bg-light rounded-4 border-0 shadow-sm">
                        <div className="d-flex align-items-center">
                          <div className="contact-icon me-3">
                            <i className="fas fa-phone text-primary fs-4"></i>
                          </div>
                          <div>
                            <h6 className="mb-1 fw-semibold text-dark">Phone</h6>
                            <p className="mb-0 text-muted">7747013556</p>
                            <small className="text-success">Work</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-card p-4 bg-light rounded-4 border-0 shadow-sm">
                        <div className="d-flex align-items-center">
                          <div className="contact-icon me-3">
                            <i className="fas fa-envelope text-primary fs-4"></i>
                          </div>
                          <div>
                            <h6 className="mb-1 fw-semibold text-dark">Email</h6>
                            <p className="mb-0 text-muted small">srivastavamanishk@rediffmail.com</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="col-lg-5 col-md-12 order-lg-2 order-1 text-center mb-4 mb-lg-0">
              <div className="profile-container position-relative">
                <div className="profile-bg-circle"></div>
                <img 
                  src={manish} 
                  alt="Manish Kumar - Electrical Engineering Manager" 
                  className="profile-image img-fluid rounded-circle shadow-lg"
                />
                <div className="profile-badge position-absolute bottom-0 end-0">
                  <span className="badge bg-success px-3 py-2 rounded-pill">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="achievements-section py-5 bg-light">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-4 fw-bold text-dark mb-3">Key Achievements & Expertise</h2>
              <p className="lead text-muted">Proven track record in leading large-scale power plant projects with strong expertise in power systems and team leadership.</p>
            </div>
          </div>

          <div className="row g-4">
            {[
              {
                icon: "fas fa-industry",
                title: "Mega Project Leadership",
                description: "Commissioning Manager for 2×800 MW mega projects, delivered within schedule.",
                highlight: "2×800 MW"
              },
              {
                icon: "fas fa-tools",
                title: "Maintenance Excellence",
                description: "Head of Maintenance ensuring smooth operations and reliability for large-scale plants.",
                highlight: "Zero Downtime"
              },
              {
                icon: "fas fa-chart-line",
                title: "Continuous Improvement",
                description: "Led diverse improvement projects, both small and large, across power plants, petrochemical, and fertilizer facilities, delivering significant cost savings and operational efficiency.",
                // highlight: "3000 TPD"
              },
              {
                icon: "fas fa-bolt",
                title: "Zero Failure Record",
                description: "Led commissioning of Captive Power Plant achieving zero electrical tripping for 3 years.",
                highlight: "3 Years"
              },
              {
                icon: "fas fa-industry",
        title: "Mega Project Leadership",
        description: "Commissioning Manager for a 2×800 MW mega project, delivered on schedule.",
        highlight: "2×800 MW"
              },
              
              

              {
                icon: "fas fa-bolt",
        title: "Zero Failure Record",
        description: "Led commissioning of a Captive Power Plant, achieving zero electrical tripping for 3 years.",
        highlight: "3 Years"
              },
              {
                icon: "fas fa-users",
        title: "Team Leadership",
        description: "Head of Department for 2×600 MW & 2×685 MW supercritical power plants.",
        // highlight: "1285 MW"
              },
              
            
              {
                icon: "fas fa-graduation-cap",
                title: "Mentoring Expert",
                description: "Strong expertise in mentoring, grooming, and delegating responsibilities to build leadership.",
                highlight: "Leadership Dev"
              }
            ].map((achievement, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="achievement-card h-100 p-4 bg-white rounded-4 shadow-sm border-0 position-relative overflow-hidden">
                  <div className="achievement-icon mb-3">
                    <i className={`${achievement.icon} text-primary fs-2`}></i>
                  </div>
                  <h5 className="fw-bold text-dark mb-3">{achievement.title}</h5>
                  <p className="text-muted mb-3">{achievement.description}</p>
                  <div className="highlight-badge">
                    <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill">
                      {achievement.highlight}
                    </span>
                  </div>
                  <div className="card-accent"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Achievements */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="additional-achievements bg-white rounded-4 p-5 shadow-sm">
                <h4 className="fw-bold text-dark mb-4">Additional Professional Accomplishments</h4>
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="list-unstyled achievement-list">
                      <li className="mb-3">
                        <i className="fas fa-check-circle text-success me-3"></i>
                        Reviewed technical specifications and contracts for BTG & BOP in coal-based thermal projects
                      </li>
                      <li className="mb-3">
                        <i className="fas fa-check-circle text-success me-3"></i>
                        Key role in contract closure of 400 kV Switchyard (Siemens) & Transmission Line Package (L&T)
                      </li>
                      <li className="mb-3">
                        <i className="fas fa-check-circle text-success me-3"></i>
                        Coordinated with statutory bodies: CEA, CSIDC, Govt. of Chhattisgarh, and PGCIL
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list-unstyled achievement-list">
                      <li className="mb-3">
                        <i className="fas fa-check-circle text-success me-3"></i>
                        Handled extra claims, delay analysis, and Liquidated Damages documentation
                      </li>
                      <li className="mb-3">
                        <i className="fas fa-check-circle text-success me-3"></i>
                        Developed second line of leadership via mentoring and group decision-making
                      </li>
                      <li className="mb-3">
                        <i className="fas fa-check-circle text-success me-3"></i>
                        Expert in delegation, training, and strategic team development
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-4 fw-bold text-dark mb-3">Educational Background</h2>
              <p className="lead text-muted">Strong academic foundation in electrical engineering</p>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-lg-5 col-md-8">
              <div className="education-card bg-white rounded-4 shadow-lg border-0 overflow-hidden h-100">
                <div className="card-header bg-primary text-white p-4">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-university fs-3 me-3"></i>
                    <div>
                      <h5 className="mb-1 fw-bold">Bachelor of Technology</h5>
                      <p className="mb-0 opacity-75">Electrical Engineering</p>
                    </div>
                  </div>
                </div>
                <div className="card-body p-4">
                  <h6 className="fw-bold text-dark mb-2">
                    U.P. Technical University
                  </h6>
                  <p className="text-muted mb-3">
                    Institute of Engineering & Technology, Lucknow
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill">
                      1990 - 1994
                    </span>
                    <i className="fas fa-graduation-cap text-primary fs-4"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-8">
              <div className="education-card bg-white rounded-4 shadow-lg border-0 overflow-hidden h-100">
                <div className="card-header bg-secondary text-white p-4">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-school fs-3 me-3"></i>
                    <div>
                      <h5 className="mb-1 fw-bold">High School</h5>
                      <p className="mb-0 opacity-75">Secondary Education</p>
                    </div>
                  </div>
                </div>
                <div className="card-body p-4">
                  <h6 className="fw-bold text-dark mb-2">
                    City Montessori School
                  </h6>
                  <p className="text-muted mb-3">
                    Lucknow
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill">
                      Strong Foundation
                    </span>
                    <i className="fas fa-award text-secondary fs-4"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section for Mobile */}
      <section className="contact-mobile d-lg-none py-4 bg-primary">
        <div className="container">
          <div className="row g-3">
            <div className="col-6">
              <div className="text-center text-white">
                <i className="fas fa-phone fs-4 mb-2"></i>
                <p className="mb-1 fw-semibold">Phone</p>
                <p className="mb-0 small">7747013556</p>
              </div>
            </div>
            <div className="col-6">
              <div className="text-center text-white">
                <i className="fas fa-envelope fs-4 mb-2"></i>
                <p className="mb-1 fw-semibold">Email</p>
                <p className="mb-0 small">Contact Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
