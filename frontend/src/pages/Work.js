import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../Component/Layout";
import "../styles/project.css";
import merncard from "../images/merncertificate.png";
import awscard from "../images/awsflowchart.png";
import boltcard from "../images/Bolt.png";

function Work() {
  return (
    <Layout>
      <div className="row text-center my-5">
        <h1 className="display-4">Certificates</h1>
      </div>
      <div className="row mt-4 mx-2">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card rounded-5 h-100">
            <img src={merncard} className="card-img-top" alt="MERN Certificate" />
            <div className="card-body">
              <h5 className="card-title display-4">MERN Certificate</h5>
              <p className="card-text display-5">
                This is a certificate for the completion of the MERN stack course.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card rounded-5 h-100">
            <img src={awscard} className="card-img-top" alt="AWS Certificate" />
            <div className="card-body">
              <h5 className="card-title display-4">AWS Certificate</h5>
              <p className="card-text display-5">
                This is a certificate for the completion of the AWS course.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card rounded-5 h-100">
            <img src={boltcard} className="card-img-top" alt="BOLT Certificate" />
            <div className="card-body">
              <h5 className="card-title display-4">BOLT Certificate</h5>
              <p className="card-text display-5">
                This is a certificate for the completion of the BOLT 2.0 Hackathon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Work;