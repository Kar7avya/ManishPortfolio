import React from "react";
import Layout from "../Component/Layout";
import "../styles/project.css";
import merncard from "../images/merncertificate.png";
import awscard from "../images/awsflowchart.png";
import boltcard from "../images/Bolt.png";
function Work(){
    return(
        <Layout>
          <div className="workbody">
          <div className="wrapper">
            <div className="card">
              <img src={merncard} alt="merncard" />
              <div className="info">
                <h1>MERN Stack</h1>
                <p>
                Skilled in building dynamic, user-centric web applications using MongoDB, Express.js, ReactJS, and Node.js, delivering seamless fullstack solutions.
                  </p>
                  
              </div>
            </div>


            <div className="card">
              <img src={awscard} alt="awscard" />
              <div className="info">
                <h1>Amazon Web Services</h1>
                <p>
                Experienced in leveraging AWS services like S3, Lambda, and EC2 to create scalable, secure, and efficient cloud-based applications.
                  </p>
                  
              </div>
            </div>

            <div className="card">
              <img src={boltcard} alt="BOLT2.0" />
              <div className="info">
                <h1>BOLT2.0</h1>
                <p>
                Participated in the BOLT 2.0 Hackathon, showcasing innovative problem-solving and collaborative skills to develop impactful tech solutions.
                  </p>
                  
              </div>
            </div>
          </div>
          </div>
</Layout>
    );
}

export default Work;