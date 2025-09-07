// import React from 'react';
// import Layout from '../Component/Layout';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
//  // Images for the project
// import reactimage from "../images/reactjs.png";
// import mongodbimage from "../images/mongodb.png";
// import githubimage from "../images/github.png";
// import expressjsimage from "../images/expressjs.png";
// import nodejsimage from "../images/node.png";
// import awsimage from "../images/aws.png";
// import dockerimage from "../images/docker.png";
// import numpyimage from "../images/NumPy.png";
// import pandaimage from "../images/Pandas.png";
// import uiuximage from "../images/uiux.png";
// import powerbiimage from "../images/powerBI.png";
// import "../styles/Skill.css";// Custom CSS for styling

// const Skills = () => {
//   return (
//     <Layout>
//       <div className='Timeline ' style={{ borderRadius:"10px" }}> 
//         <div className='container left-container'>
//         <img className="circular"  src={mongodbimage} alt="MongoDB"  />
        
//           <div className='text-box display-4'>
//             <h1>MongoDB</h1>
            
//               <p>
//             Used MongoDB as a NoSQL document database, created, queried, and managed collections and documents. Experienced usage of the MongoDB aggregation framework in data analysis and transformation.
//             </p>
          
//             <span className='left-container-arrow'></span>
//           </div>
//         </div>

//         <div className=  'container right-container'>
//         <img className="circular"  src={expressjsimage} alt="ExpressJS"  />
//           <div className='text-box display-4'>
//             <h1>ExpressJS</h1>
//             <p>
//             Developed RESTful APIs with Express.js as a Node.js web application framework. Experienced with handling HTTP requests, routing, middleware, and database integration.
//             </p>
//             <span   className='right-container-arrow'></span>
//           </div>
//         </div>

//         <div className='container left-container'>
//         <img className="circular" style={{ zIndex:'2'}} src={nodejsimage} alt="NodeJS"  />
//           <div className='text-box display-4'>
//             <h1>NodeJS</h1>
//             <p>
//             Knowledgeable in using Node.js as a JavaScript runtime environment for the development of server-side applications. Experienced in dealing with asynchronous operations, working inside the Node.js event loop, and making services scalable and efficient at the backend.
//             </p>
//             <span className='left-container-arrow'></span>
//           </div>
//         </div>

//         <div className=  'container right-container'>
//         <img className="circular"  src={reactimage} alt="ReactJS"  />
//           <div className='text-box display-4'>
//             <h1>ReactJS</h1>
//             <p>
//             Experienced in developing and maintaining React applications, including component-based architecture, state management (e.g., Redux, Context API), and API integrations.
//             </p>
//             <span   className='right-container-arrow'></span>
//           </div>
//         </div>

//         <div className='container left-container'>
        
//           <div className='text-box display-4'>
//             <h1>UI/UX</h1>
//             <img className="circular"  src={uiuximage} alt="NodeJS"  />
//             <p>
//             General understanding of the principles of UI/UX design, such as user-centered design, information architecture, and usability. Creating usable and aesthetically pleasing interfaces.
//             </p>
//             <span className='left-container-arrow'></span>
//           </div>
//         </div>

//         <div className=  'container right-container'>
//         <img className="circular"  src={powerbiimage} alt="ReactJS"  />
//           <div className='text-box display-4'>
//             <h1>Microsoft PowerBI</h1>
//             <p>
//             Skilled in Power BI for data visualization and business intelligence. Highly skilled in connecting to different sources, creating interactive dashboards, and performing analysis with the help of Power BI features.
//             </p>
//             <span   className='right-container-arrow'></span>
//           </div>
//         </div>

//         <div className='container left-container'>
//         <img className="circular" style={{ zIndex:'3'}} src={numpyimage} alt="ReactJS"  />
        
//           <div className='text-box display-4'>
//             <h1>Numpy</h1>
//             <p>
//             Know how to use NumPy for numerical computations in Python. Experienced in multidimensional arrays and linear algebra algorithms, as well as advanced techniques for manipulating arrays.
//             </p>
//             <span className='left-container-arrow'></span>
//           </div>
//         </div>

//         <div className=  'container right-container'>
//         <img className="circular"  src={pandaimage} alt="ReactJS"  />
//           <div className='text-box display-4'>
//             <h1>Pandas</h1>
//             <p>
//             Experienced in applying Pandas for data manipulation and analysis in Python. Proficient with DataFrames and handling missing data, data cleaning, and exploratory data analysis.
//             </p>
//             <span   className='right-container-arrow'></span>
//           </div>
//         </div>

//         <div className='container left-container'>
//         <img className="circular"  src={githubimage} alt="ReactJS"  />
//           <div className='text-box display-4'>
//             <h1>GitHub</h1>
//             <p>
//             Proficient in using Git for version control. Experienced in collaborating on projects using GitHub, creating and managing branches, resolving merge conflicts, and contributing to open-source projects.
//             </p>
//             <span className='left-container-arrow'></span>
//           </div>
//         </div>

//         <div className=  'container right-container'>
//         <img className="circular"  src={awsimage} alt="ReactJS"  />
//           <div className='text-box display-4'>
//             <h1>AWS </h1>
//             <p>
//             Familiarity with the use of AWS services such as EC2, S3, and Lambda for cloud-based deployments and infrastructure management.
//             </p>
//             <span   className='right-container-arrow'></span>
//           </div>
//         </div>

//         <div className='container left-container'>
//         <img className="circular"  src={dockerimage} alt="ReactJS"  />
//           <div className='text-box display-4'>
//             <h1>Docker Container</h1>
//             <p>
//             Experience in the use of Docker containers for packaging, deploying, and orchestrating applications. Familiarity in creating and managing Docker images, deployment of applications using Docker Compose, and understanding concepts in containerization.
//             </p>
//             <span className='left-container-arrow'></span>
//           </div>
//         </div>

        
//       </div>
//     </Layout>
//   );
// };

// export default Skills;

import React, { useState } from 'react';
import Layout from '../Component/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Skill.css";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('technical');

  const skillCategories = {
    technical: {
      title: "Technical Expertise",
      icon: "fas fa-cogs",
      color: "primary",
      skills: [
        {
          id: 1,
          title: "Power Plant Systems",
          icon: "fas fa-industry",
          level: 95,
          experience: "30+ Years",
          description: "Expert in BTG, BOP, CHP, and switchyard electrical systems for supercritical thermal power plants up to 800MW capacity.",
          specializations: [
            "Boiler Turbine Generator (BTG) Systems",
            "Balance of Plant (BOP) Engineering",
            "Combined Heat & Power (CHP) Systems",
            "400kV Switchyard Operations",
            "Supercritical Power Plant Technology"
          ],
          projects: "2×800 MW, 2×600 MW, 2×685 MW Projects",
          certifications: ["Power Plant Operations", "Electrical Safety Standards"]
        },
        {
          id: 2,
          title: "Electrical Systems Management",
          icon: "fas fa-bolt",
          level: 98,
          experience: "30+ Years",
          description: "Comprehensive expertise in electrical maintenance, commissioning, and operations across all plant systems.",
          specializations: [
            "High Voltage Electrical Systems",
            "Power Distribution Networks",
            "Protective Relay Systems",
            "Motor Control Centers",
            "Emergency Power Systems"
          ],
          projects: "Zero Electrical Tripping Achievement - 3 Years",
          certifications: ["Electrical HOD Certification", "High Voltage Operations"]
        },
        {
          id: 3,
          title: "Commissioning & Testing",
          icon: "fas fa-check-double",
          level: 92,
          experience: "20+ Years",
          description: "Advanced skills in plant commissioning, system testing, and performance validation for mega power projects.",
          specializations: [
            "Pre-commissioning Activities",
            "System Integration Testing",
            "Performance Test Runs",
            "Safety System Validation",
            "Regulatory Compliance Testing"
          ],
          projects: "Commissioned Multiple 800MW+ Plants",
          certifications: ["Commissioning Management", "System Testing Protocols"]
        }
      ]
    },
    management: {
      title: "Leadership & Management",
      icon: "fas fa-users",
      color: "success",
      skills: [
        {
          id: 4,
          title: "Contract Management",
          icon: "fas fa-file-contract",
          level: 90,
          experience: "15+ Years",
          description: "Extensive experience in technical specifications review, contract documentation, and EPC contractor management including claims settlement.",
          specializations: [
            "EPC Contract Management",
            "Technical Specification Review",
            "Vendor Management & Coordination",
            "Claims & Dispute Resolution",
            "Contract Closure & Settlement"
          ],
          projects: "400kV Switchyard (Siemens) & Transmission Line (L&T)",
          certifications: ["Contract Management Professional", "Legal Documentation"]
        },
        {
          id: 5,
          title: "Team Leadership & Development",
          icon: "fas fa-user-tie",
          level: 95,
          experience: "20+ Years",
          description: "Expert in mentoring, grooming, and building high-performance teams with proven delegation and leadership skills.",
          specializations: [
            "Strategic Team Building",
            "Leadership Development",
            "Performance Management",
            "Succession Planning",
            "Cross-functional Coordination"
          ],
          projects: "Built Second Line of Leadership",
          certifications: ["Leadership Excellence", "Team Management"]
        },
        {
          id: 6,
          title: "Project Management",
          icon: "fas fa-project-diagram",
          level: 88,
          experience: "30+ Years",
          description: "Comprehensive project management expertise delivering mega projects within schedule and budget constraints.",
          specializations: [
            "Large-scale Project Execution",
            "Risk Management & Mitigation",
            "Schedule & Budget Control",
            "Stakeholder Management",
            "Quality Assurance"
          ],
          projects: "Delivered Projects Worth 1600+ MW",
          certifications: ["Project Management Professional", "Risk Management"]
        }
      ]
    },
    regulatory: {
      title: "Regulatory & Compliance",
      icon: "fas fa-shield-alt",
      color: "warning",
      skills: [
        {
          id: 7,
          title: "Regulatory Coordination",
          icon: "fas fa-balance-scale",
          level: 85,
          experience: "15+ Years",
          description: "Proven track record coordinating with CEA, CSIDC, Government bodies, and PGCIL for project approvals and compliance.",
          specializations: [
            "Central Electricity Authority (CEA) Coordination",
            "State Government Liaison",
            "PGCIL Interface Management",
            "Environmental Compliance",
            "Safety & Statutory Approvals"
          ],
          projects: "Multiple State & Central Approvals",
          certifications: ["Regulatory Compliance", "Environmental Management"]
        },
        {
          id: 8,
          title: "Safety & Standards",
          icon: "fas fa-hard-hat",
          level: 93,
          experience: "30+ Years",
          description: "Comprehensive knowledge of electrical safety standards, protocols, and implementation across power generation facilities.",
          specializations: [
            "Electrical Safety Standards",
            "Occupational Health & Safety",
            "Emergency Response Planning",
            "Safety Audit & Compliance",
            "Risk Assessment & Management"
          ],
          projects: "Zero Accident Record Maintenance",
          certifications: ["Safety Management Systems", "Electrical Safety Standards"]
        },
        {
          id: 9,
          title: "Quality Assurance",
          icon: "fas fa-award",
          level: 87,
          experience: "20+ Years",
          description: "Expert in implementing quality management systems and continuous improvement processes in power generation.",
          specializations: [
            "Quality Management Systems",
            "Process Optimization",
            "Performance Monitoring",
            "Continuous Improvement",
            "Best Practices Implementation"
          ],
          projects: "Implemented CI Projects in 3000 TPD Unit",
          certifications: ["Quality Management", "Process Excellence"]
        }
      ]
    }
  };

  const categories = Object.keys(skillCategories);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="skills-hero py-5">
        <div className="hero-background"></div>
        <div className="container-fluid position-relative">
          <div className="row align-items-center min-vh-50">
            <div className="col-12 text-center">
              <div className="hero-content">
                <div className="hero-badge mb-4">
                  <span className="badge bg-white bg-opacity-20 text-white px-4 py-2 rounded-pill backdrop-blur">
                    <i className="fas fa-medal me-2"></i>
                    Professional Expertise
                  </span>
                </div>
                <h1 className="display-3 fw-bold text-white mb-4">
                  Technical Skills & Expertise
                  <span className="hero-underline"></span>
                </h1>
                <p className="lead text-white-50 fs-4 mb-4">
                  30+ years of specialized experience in electrical engineering<br/>
                  <span className="text-white fw-bold">Power generation • Project management • Team leadership</span>
                </p>
                <div className="expertise-stats d-flex justify-content-center flex-wrap gap-4 mt-5">
                  <div className="stat-card">
                    <div className="stat-number">1600+</div>
                    <div className="stat-label">MW Capacity</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">30+</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">100+</div>
                    <div className="stat-label">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Navigation */}
      <section className="skills-navigation py-4 bg-light border-bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="nav-tabs-custom d-flex justify-content-center flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`nav-tab-btn ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    <i className={`${skillCategories[category].icon} me-2`}></i>
                    {skillCategories[category].title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Content */}
      <section className="skills-content py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="category-header text-center mb-5">
                <div className="category-icon mb-3">
                  <i className={`${skillCategories[activeCategory].icon} fs-1 text-${skillCategories[activeCategory].color}`}></i>
                </div>
                <h2 className="display-4 fw-bold text-dark mb-3">
                  {skillCategories[activeCategory].title}
                </h2>
                <p className="lead text-muted">
                  Comprehensive expertise in {skillCategories[activeCategory].title.toLowerCase()}
                </p>
              </div>

              <div className="skills-grid">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div key={skill.id} className={`skill-card-wrapper skill-${index + 1}`}>
                    <div className="skill-card h-100 bg-white rounded-4 shadow-lg border-0 overflow-hidden position-relative">
                      <div className="skill-card-header p-4 position-relative">
                        <div className="skill-gradient-bg"></div>
                        <div className="d-flex align-items-center position-relative">
                          <div className={`skill-icon me-3 bg-${skillCategories[activeCategory].color}-subtle`}>
                            <i className={`${skill.icon} text-${skillCategories[activeCategory].color} fs-3`}></i>
                          </div>
                          <div className="flex-grow-1">
                            <h4 className="fw-bold text-dark mb-1">{skill.title}</h4>
                            <div className="skill-meta d-flex align-items-center gap-3">
                              <span className="badge bg-primary-subtle text-primary px-3 py-1 rounded-pill">
                                <i className="fas fa-clock me-1"></i>
                                {skill.experience}
                              </span>
                              <div className="skill-level">
                                <span className="small text-muted me-2">Expertise:</span>
                                <span className={`fw-bold text-${skillCategories[activeCategory].color}`}>
                                  {skill.level}%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="skill-card-body p-4">
                        <p className="text-muted mb-4 lead">{skill.description}</p>

                        {/* Skill Level Progress */}
                        <div className="skill-progress mb-4">
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="fw-semibold text-dark">Proficiency Level</span>
                            <span className={`fw-bold text-${skillCategories[activeCategory].color}`}>
                              {skill.level}%
                            </span>
                          </div>
                          <div className="progress" style={{ height: '8px' }}>
                            <div 
                              className={`progress-bar bg-${skillCategories[activeCategory].color}`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>

                        {/* Specializations */}
                        <div className="specializations mb-4">
                          <h6 className="fw-bold text-dark mb-3">
                            <i className="fas fa-list-check me-2 text-success"></i>
                            Key Specializations
                          </h6>
                          <div className="row g-2">
                            {skill.specializations.map((spec, idx) => (
                              <div key={idx} className="col-12">
                                <div className="specialization-item d-flex align-items-center p-2 bg-light rounded">
                                  <i className="fas fa-check-circle text-success me-2 flex-shrink-0"></i>
                                  <span className="small text-dark">{spec}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Projects & Certifications */}
                        <div className="skill-footer">
                          <div className="row g-3">
                            <div className="col-md-6">
                              <div className="info-box bg-primary-subtle rounded p-3">
                                <h6 className="fw-bold text-primary mb-2">
                                  <i className="fas fa-project-diagram me-2"></i>
                                  Notable Projects
                                </h6>
                                <p className="small text-dark mb-0">{skill.projects}</p>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="info-box bg-success-subtle rounded p-3">
                                <h6 className="fw-bold text-success mb-2">
                                  <i className="fas fa-certificate me-2"></i>
                                  Certifications
                                </h6>
                                <div className="certifications-list">
                                  {skill.certifications.map((cert, idx) => (
                                    <span key={idx} className="badge bg-success-subtle text-success me-1 mb-1 small">
                                      {cert}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="skill-card-number">
                        {String(skill.id).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="skills-summary py-5 bg-dark text-white">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="display-4 fw-bold mb-5">Professional Achievements</h2>
              <div className="row g-4">
                <div className="col-lg-3 col-md-6">
                  <div className="achievement-stat">
                    <div className="achievement-icon mb-3">
                      <i className="fas fa-trophy text-warning fs-1"></i>
                    </div>
                    <div className="achievement-number">Zero</div>
                    <div className="achievement-label">Electrical Failures<br/>3 Years Running</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="achievement-stat">
                    <div className="achievement-icon mb-3">
                      <i className="fas fa-users text-info fs-1"></i>
                    </div>
                    <div className="achievement-number">500+</div>
                    <div className="achievement-label">Team Members<br/>Successfully Managed</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="achievement-stat">
                    <div className="achievement-icon mb-3">
                      <i className="fas fa-handshake text-success fs-1"></i>
                    </div>
                    <div className="achievement-number">50+</div>
                    <div className="achievement-label">Contracts<br/>Successfully Closed</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="achievement-stat">
                    <div className="achievement-icon mb-3">
                      <i className="fas fa-chart-line text-primary fs-1"></i>
                    </div>
                    <div className="achievement-number">100%</div>
                    <div className="achievement-label">On-time Project<br/>Delivery Record</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;