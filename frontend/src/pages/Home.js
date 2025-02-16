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
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../Component/Layout";
import profileimage from "../images/profile.png";
import Typed from "typed.js";
import "../styles/Home.css"; // Import the SCSS file

function Home() {
  useEffect(() => {
    const options = {
      strings: ["KARTHAVYA", "Developer", "Data Scientist"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };
    
    const typed = new Typed(".auto-type", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Layout>
      <div className="row my-5">
        {/* First Column */}
        <div className="text-center  col-lg-8 col-md-8 col-sm-12">
          <span className=" display-1 fw-bolder auto-type"></span>
          <br />
          <p className="fullstack-text navy-text">
  I am a <b>Fullstack Developer</b> skilled in building dynamic web applications using technologies like <b>ReactJS, Node.js, and MongoDB</b>. With expertise in <b>AWS</b>, I create scalable, secure solutions leveraging services like <b>S3</b> and <b>Lambda</b>. As I transition into <b>Data Science</b>, I aim to harness the power of data to solve real-world problems.
</p>
<br/>
<p className="fullstack-text "><b>Phone No</b> - +917869953565</p>

<p className="fullstack-text "><b>Mail Id</b> - karthavyasrivastava@gmail.com</p>

        </div>
        
        {/* Second Column */}
        <div className="text-center col-lg-3 col-md-4 col-sm-12">
          <img src={profileimage} alt="Profile" className="img-fluid rounded-5 w-50 h-auto" />
        </div>
      </div>
      
      <div className="row margin-left">
        {/* First Column */}

        <div className="text-center col-lg-4 col-md-10 col-sm-10">
          <div className="card" style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-title navy-text">VIT Vellore</h5>
              <h6 className="card-subtitle text-success">CGPA</h6>
              <p className="card-text">7.5</p>
            </div>
          </div>
        </div>

        <div className="text-center col-lg-3 col-md-10 col-sm-10">
          <div className="card" style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-title navy-text">Gyan Ganga</h5>
              <h6 className="card-subtitle text-success">Class 12</h6>
              <p className="card-text">80%</p>
            </div>
          </div>
        </div>



        <div className="text-center col-lg-3 col-md-10 col-sm-10">
          <div className="card" style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-title navy-text">DPS Raipur</h5>
              <h6 className="card-subtitle text-success">Class 10</h6>
              <p className="card-text">91.4%</p>
            </div>
          </div>
        </div>
        
        
      </div>
    </Layout>
  );
}

export default Home;