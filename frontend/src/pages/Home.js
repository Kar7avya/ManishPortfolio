// import React from "react";
// import Layout from "../Component/Layout";
// import "../styles/Home.css"
// function Home(){
//     return(
//         <Layout>
//             <div className="container home_container">
//                 <div className="home_innerdiv">
//                     <div className="left_div">
//                     <h2>
//     Welcome to <br></br><span class="auto-type" style={{ color:'#495579', fontSize: '50px',fontFamily:"Baskerville" }}>KARTAVYA SRIVASTAVA</span>
//     <p style={{color:"#263159",fontWeight:"lighter",fontSize:'20px'}}>Lorem ipsum dolor sit amet, consectet null a ante et Lorem ipsum dolor sit amet Lorem et  dolor  sit amet
//     </p>
// </h2>

//                     </div>
//                     <div className="right_div">
//                     <img src="profile.jpg"  width="500px" height="333px"/>
//                     </div>
//                 </div>
//             </div>
// <script>
//     var typed = new Typed(".auto-type",{
//         strings:["Coder","Developer","Data Analyst"],
//         typeSpeed: 100,
//         backSpeed: 100,
//         loop: true,
//         });
    

// </script>
//             </Layout>
//     );
// }

// export default Home;
import React, { useEffect } from "react";
import Layout from "../Component/Layout";
import "../styles/Home.css";
import profileimage from "../images/profile.png";
import Typed from "typed.js"; // Import Typed.js

function Home() {
  useEffect(() => {
    // Initialize Typed.js when the component mounts
    const options = {
      strings: ["KARTHAVYA", "Developer", "DataScientist"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };
    const typed = new Typed(".auto-type", options);

    // Cleanup to destroy the Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Layout>
      <div className="home_container">
        <div className="home_innerdiv">
          <div className="left_div">
            <h2>
              Welcome to <br />
              <span
                className="auto-type"
                style={{
                  color: "#495579",
                  fontSize: "50px",
                  fontFamily: "Baskerville",
                }}
              ></span>
              <p
                style={{
                  color: "#263159",
                  fontWeight: "lighter",
                  fontSize: "20px",
                  
                }}
              >I am a Fullstack Developer skilled in building dynamic web applications using technologies like ReactJS, Node.js, and MongoDB. With expertise in AWS, I create scalable, secure solutions leveraging services like S3 and Lambda. As I transition into Data Science, I aim to harness the power of data to solve real-world problems. My passion lies in combining development and data to drive impactful insights and decisions.
      
              </p>
            </h2>
          </div>
          <div className="right_div">
            <img
              style={{
                zIndex: 2,
                height: "620px",
                borderRadius: "83% 17% 84% 16% / 16% 74% 26% 84%",
              }}
              src={profileimage}
              alt="profile"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;