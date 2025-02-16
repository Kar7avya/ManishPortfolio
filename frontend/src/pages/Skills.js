import React from 'react';
import Layout from '../Component/Layout';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
 // Images for the project
import reactimage from "../images/reactjs.png";
import mongodbimage from "../images/mongodb.png";
import githubimage from "../images/github.png";
import expressjsimage from "../images/expressjs.png";
import nodejsimage from "../images/node.png";
import awsimage from "../images/aws.png";
import dockerimage from "../images/docker.png";
import numpyimage from "../images/NumPy.png";
import pandaimage from "../images/Pandas.png";
import uiuximage from "../images/uiux.png";
import powerbiimage from "../images/powerBI.png";
import "../styles/Skill.css";// Custom CSS for styling

const Skills = () => {
  return (
    <Layout>
      <div className='Timeline ' style={{ borderRadius:"10px" }}> 
        <div className='container left-container'>
        <img className="circular"  src={mongodbimage} alt="MongoDB"  />
        
          <div className='text-box display-4'>
            <h1>MongoDB</h1>
            
              <p>
            Used MongoDB as a NoSQL document database, created, queried, and managed collections and documents. Experienced usage of the MongoDB aggregation framework in data analysis and transformation.
            </p>
          
            <span className='left-container-arrow'></span>
          </div>
        </div>

        <div className=  'container right-container'>
        <img className="circular"  src={expressjsimage} alt="ExpressJS"  />
          <div className='text-box display-4'>
            <h1>ExpressJS</h1>
            <p>
            Developed RESTful APIs with Express.js as a Node.js web application framework. Experienced with handling HTTP requests, routing, middleware, and database integration.
            </p>
            <span   className='right-container-arrow'></span>
          </div>
        </div>

        <div className='container left-container'>
        <img className="circular" style={{ zIndex:'2'}} src={nodejsimage} alt="NodeJS"  />
          <div className='text-box display-4'>
            <h1>NodeJS</h1>
            <p>
            Knowledgeable in using Node.js as a JavaScript runtime environment for the development of server-side applications. Experienced in dealing with asynchronous operations, working inside the Node.js event loop, and making services scalable and efficient at the backend.
            </p>
            <span className='left-container-arrow'></span>
          </div>
        </div>

        <div className=  'container right-container'>
        <img className="circular"  src={reactimage} alt="ReactJS"  />
          <div className='text-box display-4'>
            <h1>ReactJS</h1>
            <p>
            Experienced in developing and maintaining React applications, including component-based architecture, state management (e.g., Redux, Context API), and API integrations.
            </p>
            <span   className='right-container-arrow'></span>
          </div>
        </div>

        <div className='container left-container'>
        
          <div className='text-box display-4'>
            <h1>UI/UX</h1>
            <img className="circular"  src={uiuximage} alt="NodeJS"  />
            <p>
            General understanding of the principles of UI/UX design, such as user-centered design, information architecture, and usability. Creating usable and aesthetically pleasing interfaces.
            </p>
            <span className='left-container-arrow'></span>
          </div>
        </div>

        <div className=  'container right-container'>
        <img className="circular"  src={powerbiimage} alt="ReactJS"  />
          <div className='text-box display-4'>
            <h1>Microsoft PowerBI</h1>
            <p>
            Skilled in Power BI for data visualization and business intelligence. Highly skilled in connecting to different sources, creating interactive dashboards, and performing analysis with the help of Power BI features.
            </p>
            <span   className='right-container-arrow'></span>
          </div>
        </div>

        <div className='container left-container'>
        <img className="circular" style={{ zIndex:'3'}} src={numpyimage} alt="ReactJS"  />
        
          <div className='text-box display-4'>
            <h1>Numpy</h1>
            <p>
            Know how to use NumPy for numerical computations in Python. Experienced in multidimensional arrays and linear algebra algorithms, as well as advanced techniques for manipulating arrays.
            </p>
            <span className='left-container-arrow'></span>
          </div>
        </div>

        <div className=  'container right-container'>
        <img className="circular"  src={pandaimage} alt="ReactJS"  />
          <div className='text-box display-4'>
            <h1>Pandas</h1>
            <p>
            Experienced in applying Pandas for data manipulation and analysis in Python. Proficient with DataFrames and handling missing data, data cleaning, and exploratory data analysis.
            </p>
            <span   className='right-container-arrow'></span>
          </div>
        </div>

        <div className='container left-container'>
        <img className="circular"  src={githubimage} alt="ReactJS"  />
          <div className='text-box display-4'>
            <h1>GitHub</h1>
            <p>
            Proficient in using Git for version control. Experienced in collaborating on projects using GitHub, creating and managing branches, resolving merge conflicts, and contributing to open-source projects.
            </p>
            <span className='left-container-arrow'></span>
          </div>
        </div>

        <div className=  'container right-container'>
        <img className="circular"  src={awsimage} alt="ReactJS"  />
          <div className='text-box display-4'>
            <h1>AWS </h1>
            <p>
            Familiarity with the use of AWS services such as EC2, S3, and Lambda for cloud-based deployments and infrastructure management.
            </p>
            <span   className='right-container-arrow'></span>
          </div>
        </div>

        <div className='container left-container'>
        <img className="circular"  src={dockerimage} alt="ReactJS"  />
          <div className='text-box display-4'>
            <h1>Docker Container</h1>
            <p>
            Experience in the use of Docker containers for packaging, deploying, and orchestrating applications. Familiarity in creating and managing Docker images, deployment of applications using Docker Compose, and understanding concepts in containerization.
            </p>
            <span className='left-container-arrow'></span>
          </div>
        </div>

        
      </div>
    </Layout>
  );
};

export default Skills;