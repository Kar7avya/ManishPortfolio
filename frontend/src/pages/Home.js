// import React, { useEffect } from "react";
// import Layout from "../Component/Layout";
// import "../styles/Home.css";
// import profileimage from "../images/profile.png";
// import Typed from "typed.js";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// function Home() {
//   useEffect(() => {
//     const options = {
//       strings: ["KARTHAVYA", "Developer", "DataScientist"],
//       typeSpeed: 100,
//       backSpeed: 100,
//       loop: true,
//     };
//     const typed = new Typed(".auto-type", options);

//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <Layout>

// <div class="row">
//   <div class="col-5 col-s-12 menu">
//     <div class name="info ">
//     <div className="left_div  col-6" >

//             <div className="title">
//               <p>
//                 Welcome to <br />
//                 </p>
//             </div>
//             <h2>
//               <span
//                 className="auto-type"
//                 style={{
//                   color: "#495579",
//                   fontFamily: "Baskerville",
//                 }}
//               ></span>
//               <p
//                 className="bordered mx-auto"

//               >
//                 I am a Fullstack Developer skilled in building dynamic web
//                 applications using technologies like ReactJS, Node.js, and
//                 MongoDB. With expertise in AWS, I create scalable, secure
//                 solutions leveraging services like S3 and Lambda. As I
//                 transition into Data Science, I aim to harness the power of data
//                 to solve real-world problems. My passion lies in combining
//                 development and data to drive impactful insights and decisions.
//               </p>
//             </h2>
//           </div>

//   </div>
//   </div>

//   <div class="col-7 col-s-9">
//     <img
//               className="profileimage"
//               src={profileimage}
//               alt="profile"
//               style={{
//                 zIndex: 2,

//               }}
//             />
//   </div>

//   <div class="col-12 col-s-12">
//     <div class="aside">
//        <div className="card educard1">
//               <div className="card-body">
//                 <h5 className="card-title">DPS<br /> Raipur</h5>
//                 <p className="card-text medium">
//                   Class 10
//                   <br />
//                   91.4%
//                 </p>
//                 <div className="go-corner">
//                   <div className="go-arrow">→</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="mb-4">
//             <div className="card educard1">
//               <div className="card-body">
//                 <h5 className="card-title">Gyan Ganga Educ. Academy</h5>
//                 <p className="card-text medium">
//                   Class 12
//                   <br />
//                   80%
//                 </p>
//                 <div className="go-corner">
//                   <div className="go-arrow">→</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="mb-4">
//             <div className="card educard1">
//               <div className="card-body">
//                 <h5 className="card-title">VIT <br /> Vellore</h5>
//                 <p className="card-text medium">
//                   CGPA
//                   <br />
//                   7.5
//                 </p>
//                 <div className="go-corner">
//                   <div className="go-arrow">→</div>
//                 </div>
//               </div>
//             </div>
//     </div>
//   </div>
// </div>

//     </Layout>
//   );
// }

// export default Home;
// import React, { useEffect } from "react";
// import Layout from "../Component/Layout";
// import "../styles/Home.css"; // Ensure you have the correct path to your custom CSS file
// import Typed from "typed.js";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
// import profilephoto from "../images/profile.png";

// function Home() {
//   useEffect(() => {
//     const options = {
//       strings: ["KARTHAVYA", "Developer", "DataScientist"],
//       typeSpeed: 100,
//       backSpeed: 100,
//       loop: true,
//     };
//     const typed = new Typed(".auto-type", options);

//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <Layout>
//       <div className="section">
//         <div className="container">
//           <div className="content-section">
//             <div className="title">
//               <h1>Karthavya</h1>
//             </div>
//             <div className="content">
//               <h3>
//                 <span className="auto-type"></span>
//               </h3>
//               <p>
//                 I am a Fullstack Developer skilled in building dynamic web
//                 applications using technologies like ReactJS, Node.js, and
//                 MongoDB. With expertise in AWS, I create scalable, secure
//                 solutions leveraging services like S3 and Lambda. As I
//                 transition into Data Science, I aim to harness the power of data
//                 to solve real-world problems. My passion lies in combining
//                 development and data to drive impactful insights and decisions.
//               </p>
//             </div>
//             <div className="image-section">
//               <img
//                 src={profilephoto}
//                 alt="Profile"
//                 style={{
//                  // Forces the image to fill the specified width/height
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default Home;
// import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Layout from "../Component/Layout";
// import profileimage from "../images/profile.png";
// import Typed from "typed.js";

// function Home() {
//   useEffect(() => {
//     const options = {
//       strings: ["KARTHAVYA", "Developer", "DataScientist"],
//       typeSpeed: 100,
//       backSpeed: 100,
//       loop: true,
//     };
//     const typed = new Typed(".auto-type", options);

//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <Layout>
//       <div className="container text-center my-5">
//         <div className="row align-items-center">
//           <div className="col-md-5">
//             <h2>Welcome to</h2>
//             <h2 className="auto-type text-primary" style={{ fontFamily: "Baskerville" }}></h2>
//             <p className="border p-3 bg-light rounded shadow">
//               I am a Fullstack Developer skilled in building dynamic web
//               applications using technologies like ReactJS, Node.js, and
//               MongoDB. With expertise in AWS, I create scalable, secure
//               solutions leveraging services like S3 and Lambda. As I
//               transition into Data Science, I aim to harness the power of data
//               to solve real-world problems.
//             </p>
//           </div>
//           <div className="col-md-7 text-center">
//             <img 
//               className="img-fluid rounded-circle shadow" 
//               src={profileimage} 
//               alt="profile" 
//               style={{ width: "100%", maxWidth: "300px", height: "auto" }} 
//             />
//           </div>
//         </div>
//       </div>

//       <div className="container my-5">
//         <h2 className="text-center">Our Team</h2>
//         <div className="row">
//           {teamMembers.map((member, index) => (
//             <div key={index} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
//               <div className="card shadow-sm" style={{ width: "100%", maxWidth: "22rem", height: "30rem" }}>
//                 <img src={member.image} alt={member.name} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} />
//                 <div className="card-body">
//                   <h5 className="card-title">{member.name}</h5>
//                   <p className="text-muted">{member.title}</p>
//                   <p>{member.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Layout>
//   );
// }

// const teamMembers = [
//   {
//     name: "Amazon Web Services",
//     title: "Service",
//     description: "Experienced in leveraging AWS services like S3, Lambda, and EC2 to create scalable, secure, and efficient cloud-based applications.",
//     image: "../images/awsflowchart.png",
//   },
//   {
//     name: "MERN Certificate",
//     title: "Web Development",
//     description: "Skilled in building dynamic, user-centric web applications using MongoDB, Express.js, ReactJS, and Node.js, delivering seamless fullstack solutions.",
//     image: "../images/merncertificate.png",
//   },
//   {
//     name: "BOLT 2.0",
//     title: "Hackathon Certificate",
//     description: "Participated in the BOLT 2.0 Hackathon, showcasing innovative problem-solving and collaborative skills to develop impactful tech solutions.",
//     image: "/w3images/team3.jpg",
//   },
// ];

// export default Home;
// import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Layout from "../Component/Layout";
// import profileimage from "../images/profile.png";
// import Typed from "typed.js";
// import "../styles/Home.css"; // Import the SCSS file
// import manish from "../images/manish.jpg";

// function Home() {
//   useEffect(() => {
//     const options = {
//       strings: ["Manish Kumar", "O&M Head", "Commissioning Manager","Maintenance Head","Associate Vice President","General Manager","Electrical Manager","Sr. DGM Electrical (HOD)","Lead Manager Electrical"],
//       typeSpeed: 100,
//       backSpeed: 100,
//       loop: true,
      
//     };
    
//     const typed = new Typed(".auto-type", options);

//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <Layout>
//  <div className="row my-5">
//   {/* First Column (Text on large, below image on small) */}
//   <div className="col-lg-8 col-md-8 col-sm-12 order-lg-1 order-2">
//     <span className="display-1 fw-bolder auto-type"></span>
//     <br />

//     {/* Contact info for large screens */}
//     <p className="fullstack-text display-3 d-none d-lg-block">
//       <b>Phone No</b> - 7747013556 (Work)<br />
//       <b>Mail Id</b> - srivastavamanishk@rediffmail.com
//     </p>
//   </div>

//   {/* Second Column (Image) */}
//   <div className="col-lg-6 col-md-4 col-sm-12 text-center order-lg-2 order-1 mb-4 mb-lg-0">
//     <img src={manish} alt="Profile" className="img-fluid rounded-5 w-50 h-auto" />

//     {/* List visible only on small screens */}
//     <ul className="list-unstyled mt-4 d-block d-lg-none text-start">
//       <li>Commissioning Manager for <strong>2×800 MW mega projects</strong>, delivered within schedule.</li>
//       <li>Head of Maintenance for the same plant, ensuring smooth operations and reliability.</li>
//       <li>Implemented <strong>Continuous Improvement Projects</strong> in <strong>3000 TPD urea unit</strong>, achieving one-time savings and continuous revenue.</li>
//       <li>Led commissioning of <strong>Captive Power Plant</strong> & <strong>Polypropylene Plant electrical systems</strong>, achieving zero electrical tripping for 3 years.</li>
//       <li>Head of Department – Electrical Systems for <strong>2×600 MW & 2×685 MW supercritical power plants</strong>.</li>
//       <li>Strong team player with expertise in <strong>mentoring, grooming, and delegating responsibilities</strong>.</li>
//       <li>Reviewed technical specifications and contracts for BTG & BOP in coal-based thermal projects.</li>
//       <li>Key role in <strong>contract closure</strong> of 400 kV Switchyard (Siemens) & 400 kV Transmission Line Package (L&T) at GCEL.</li>
//       <li>Coordinated with statutory government bodies: CEA, CSIDC, Govt. of Chhattisgarh, and PGCIL.</li>
//       <li>Handled extra claims, delay analysis, and documentation for <strong>Liquidated Damages</strong> on EPC contractors.</li>
//       <li>Developed a <strong>second line of leadership</strong> via mentoring, delegation, training, and group decision-making.</li>
//     </ul>
//   </div>

//   {/* List visible only on large screens */}
//   <div className="col-lg-12 d-none d-lg-block">
//     <ul className="list-unstyled mt-4 text-start display-1">
//       <li>Commissioning Manager for <strong>2×800 MW mega projects</strong>, delivered within schedule.</li>
//       <li>Head of Maintenance for the same plant, ensuring smooth operations and reliability.</li>
//       <li>Implemented <strong>Continuous Improvement Projects</strong> in <strong>3000 TPD urea unit</strong>, achieving one-time savings and continuous revenue.</li>
//       <li>Led commissioning of <strong>Captive Power Plant</strong> & <strong>Polypropylene Plant electrical systems</strong>, achieving zero electrical tripping for 3 years.</li>
//       <li>Head of Department – Electrical Systems for <strong>2×600 MW & 2×685 MW supercritical power plants</strong>.</li>
//       <li>Strong team player with expertise in <strong>mentoring, grooming, and delegating responsibilities</strong>.</li>
//       <li>Reviewed technical specifications and contracts for BTG & BOP in coal-based thermal projects.</li>
//       <li>Key role in <strong>contract closure</strong> of 400 kV Switchyard (Siemens) & 400 kV Transmission Line Package (L&T) at GCEL.</li>
//       <li>Coordinated with statutory government bodies: CEA, CSIDC, Govt. of Chhattisgarh, and PGCIL.</li>
//       <li>Handled extra claims, delay analysis, and documentation for <strong>Liquidated Damages</strong> on EPC contractors.</li>
//       <li>Developed a <strong>second line of leadership</strong> via mentoring, delegation, training, and group decision-making.</li>
//     </ul>
//   </div>
// </div>

//       <div className="row margin-left">
//         {/* First Column */}

//         <div className="text-center col-lg-4 col-md-10 col-sm-10">
//           <div className="card" style={{ width: "100%" }}>
//             <div className="card-body">
//               <h5 className="card-title navy-text">U.P. Technical univ. ( Institute of engineering & technology lucknow)</h5>
//               <h6 className="card-subtitle text-success">Bachelor of Technology (B.Tech.)electrical, electrical engineering </h6>
//               <p className="card-text">(1990 - 1994)</p>
//             </div>
//           </div>
//         </div>

//         <div className="text-center col-lg-3 col-md-10 col-sm-10">
//           <div className="card" style={{ width: "100%" }}>
//             <div className="card-body">
//               <h5 className="card-title navy-text">CITY MONTESSORI SCHOOL LUCKNOW HIGHSCHOOL</h5>
//               <h6 className="card-subtitle text-success"> Lucknow  </h6>
//               <p className="card-text"> Strong academic foundation  </p>
//             </div>
//           </div>
//         </div>


// {/* 
//         <div className="text-center col-lg-3 col-md-10 col-sm-10">
//           <div className="card" style={{ width: "100%" }}>
//             <div className="card-body">
//               <h5 className="card-title navy-text">DPS Raipur</h5>
//               <h6 className="card-subtitle text-success">Class 10</h6>
//               <p className="card-text">91.4%</p>
//             </div>
//           </div>
//         </div>
//          */}
        
//       </div>
//     </Layout>
//   );
// }

// export default Home;

import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../Component/Layout";
import profileimage from "../images/profile.png";
import Typed from "typed.js";
import "../styles/Home.css";
import manish from "../images/manish.jpg";

function Home() {
  useEffect(() => {
    const options = {
      strings: [
        "Manish Kumar", 
        "O&M Head", 
        "Commissioning Manager",
        "Maintenance Head",
        "Associate Vice President",
        "General Manager",
        "Electrical Manager",
        "Sr. DGM Electrical (HOD)",
        "Lead Manager Electrical"
      ],
      typeSpeed: 80,
      backSpeed: 60,
      loop: true,
      backDelay: 2000,
      startDelay: 500,
    };
    
    const typed = new Typed(".auto-type", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section py-5">
        <div className="container-fluid">
          <div className="row align-items-center min-vh-75">
            {/* Text Content */}
            <div className="col-lg-7 col-md-12 order-lg-1 order-2">
              <div className="hero-content pe-lg-4">
                <div className="mb-4">
                  <h1 className="display-2 fw-bold text-primary mb-3">
                    <span className="auto-type text-gradient"></span>
                    <span className="cursor-blink">|</span>
                  </h1>
                  <p className="lead text-muted fs-4 mb-4">
                    Leading electrical engineering projects with 25+ years of expertise in power systems and team leadership.
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
              <p className="lead text-muted">Proven track record in large-scale electrical projects and team leadership</p>
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
                description: "Implemented improvement projects in 3000 TPD urea unit, achieving significant savings.",
                highlight: "3000 TPD"
              },
              {
                icon: "fas fa-bolt",
                title: "Zero Failure Record",
                description: "Led commissioning of Captive Power Plant achieving zero electrical tripping for 3 years.",
                highlight: "3 Years"
              },
              {
                icon: "fas fa-users",
                title: "Team Leadership",
                description: "Head of Department for 2×600 MW & 2×685 MW supercritical power plants.",
                highlight: "1285 MW"
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