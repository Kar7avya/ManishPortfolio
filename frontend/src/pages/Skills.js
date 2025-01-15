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
import "../styles/Skill.css";// Custom CSS for styling

const Skills = () => {
  return (
    <Layout>
      <div className='Timeline' style={{ backgroundColor: '#3E5879', borderRadius:"10px" }}> 
        <div className='container left-container'>
        <img className="circular" style={{ zIndex:'2'}} src={mongodbimage} alt="MongoDB"  />
          <div className='text-box'>
            <h2>MongoDB</h2>
            <p>
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
            </p>
            <span className='left-container-arrow'></span>
          </div>
        </div>

        <div className='container right-container'>
        <img className="circular" style={{ zIndex:'2'}} src={expressjsimage} alt="ExpressJS"  />
          <div className='text-box'>
            <h2>ExpressJS</h2>
            <p>
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
            </p>
            <span className='right-container-arrow'></span>
          </div>
        </div>

        <div className='container left-container'>
        <img className="circular" style={{ zIndex:'2'}} src={nodejsimage} alt="NodeJS"  />
          <div className='text-box'>
            <h2>NodeJS</h2>
            <p>
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
            </p>
            <span className='left-container-arrow'></span>
          </div>
        </div>

        <div className='container right-container'>
        <img className="circular" style={{ zIndex:'2'}} src={reactimage} alt="ReactJS"  />
          <div className='text-box'>
            <h2>ReactJS</h2>
            <p>
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
            </p>
            <span className='right-container-arrow'></span>
          </div>
        </div>

        <div className='container left-container'>
        
          <div className='text-box'>
            <h2>UI/UX</h2>
            <p>
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
            </p>
            <span className='left-container-arrow'></span>
          </div>
        </div>

        <div className='container right-container'>
        <img src="" className="circular"alt="Microsoft PowerBI"  />
          <div className='text-box'>
            <h2>Microsoft PowerBI</h2>
            <p>
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
            </p>
            <span className='right-container-arrow'></span>
          </div>
        </div>

        <div className='container left-container'>
        <img src="" className="circular" alt="Numpy"  />
          <div className='text-box'>
            <h2>Numpy</h2>
            <p>
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
            </p>
            <span className='left-container-arrow'></span>
          </div>
        </div>

        <div className='container right-container'>
        <img src="" className="circular" alt="Panda"  />
          <div className='text-box'>
            <h2>Panda</h2>
            <p>
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
            </p>
            <span className='right-container-arrow'></span>
          </div>
        </div>

        <div className='container left-container'>
        <img className="circular" style={{ zIndex:'2'}} src={githubimage} alt="ReactJS"  />
          <div className='text-box'>
            <h2>GitHub</h2>
            <p>
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
            </p>
            <span className='left-container-arrow'></span>
          </div>
        </div>

        <div className='container right-container'>
        <img className="circular" style={{ zIndex:'2'}} src={awsimage} alt="ReactJS"  />
          <div className='text-box'>
            <h2>AWS </h2>
            <p>
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
            </p>
            <span className='right-container-arrow'></span>
          </div>
        </div>

        <div className='container left-container'>
        <img className="circular" style={{ zIndex:'2'}} src={dockerimage} alt="ReactJS"  />
          <div className='text-box'>
            <h2>Docker Container</h2>
            <p>
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
              Loren impsummary for MongoDB Loren impsummary for MongoDB Loren impsummary for MongoDB
            </p>
            <span className='left-container-arrow'></span>
          </div>
        </div>

        
      </div>
    </Layout>
  );
};

export default Skills;