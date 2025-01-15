// import React, { useState } from "react";
// import Layout from "../Component/Layout";
// import "../styles/SignUp.css";
// import axios from "axios";
// function Signup() {
//   const [Username, setUsername] = useState();
//   const [Email, setEmail] = useState();
//   const [Password, setPassword] = useState();
//   const [RePassword, setRepassword] = useState();
//   const handleSubmit = (event) => {
//     let inputObj = { Username, Email, Password, RePassword };
//     console.log(inputObj);
//     let url ="http://localhost:4000/createuser";
//     axios.post(url,inputObj).then((res)=>{
//     console.log(res);
//     }).catch((err)=>{
//       console.log(err);
//     })
//     event.preventDefault();
//   };
//   return (
//     <Layout>
//       <div className="Container">
//         <h1>Signup page</h1>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="UserName"
//             id="i1"
//             placeholder="UserName"
//             onChange={(e) => {
//               setUsername(e.target.value);
//             }}
//           ></input>

//           <input
//             type="email"
//             name="Email"
//             id="i2"
//             placeholder="Email"
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//           ></input>

//           <input
//             type="text"
//             name="Password"
//             id="i3"
//             placeholder="Password"
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//           ></input>

//           <input
//             type="text"
//             name="RePassword"
//             id="i4"
//             placeholder="RePassword"
//             onChange={(e) => {
//               setRepassword(e.target.value);
//             }}
//           ></input>

//           {/* <input type="submit" value="SignUp">SignUp</input> */}
//           <input type="submit" value="SignUp" />
//         </form>
//       </div>

      
//     </Layout>
//   );
// }

// export default Signup;

/* From Uiverse.io by Prince4fff */ 

// import React from 'react';
// import Layout from "../Component/Layout";
// import "../styles/SignUp.css";
// import "../images/skyscrapper.png";
// const Card = () => {
//   return (
//     <Layout>
       
//     <div className='card-page'    style={{ backgroundImage: "url('skyscrapper.png')" }}>
//       <div className="form">
//       <form>
//         <h2 className='text-center'>Contact Us</h2>
//         <div className='formcontainer'>
//           <label for='fname'><b>First Name</b></label>
//           <input type='text' id='fname' name='fname' placeholder='Your name' required/>
//           <label for='lname'><b>Last Name</b></label>
//           <input type='text' id='lname' name='lname' placeholder='Your last name' required/>
//           <label for='email'><b>Email</b></label>
//           <input type='email' id='email' name='email' placeholder='Your email'
//           required/>
//           <label for='subject'><b>Subject</b></label>
//           <textarea id='subject' name='subject' placeholder='Write something..'
//           style={{height: '200px'}} required></textarea>
//           <input type='submit' value='Submit' />
//         </div>

//         </form>
//       </div>
//       </div>
//       </Layout>
//   );
// }


  

// export default Card;

// import React, { useState } from "react";
// import Layout from "../Component/Layout";
// import "../styles/SignUp.css";
// import skyscrapper from "../images/skyscrapper.png"; // Import the image

// const Card = () => {

//   const[inputValue,setInputValue]=useState({
//     fname:"",
//     lname:"",
//     email:"",
//     subject:""
//   });
//   const getValue = (e)=>{
//     const {name,value} =e.target;
//     setInputValue((prev)=>{
//       return{
//         ...prev,
//         [name]:value,
//       };
//     });
//   };
// };
// const sentUserdata =(e)=>{
//   e.preventDefault();
//   const {fname,lname,email,subject} = inputValue;
//    if(fname===""){
//     alert("Please enter your first name");
//    }else if(lname===""){
//     alert("Please enter your last name");
//    }else if(email===""){
//     alert("Please enter your email");
//    }else if (!email.includes("@")){
//     alert("Please enter valid email");
//    }else{
//     alert("Your data has been sent");
//    }
  
//   return (
//     <Layout>
//       <div
//         className="card-page"
//         style={{
//           backgroundImage: `url(${skyscrapper})`, // Use the imported image
//           backgroundSize: "cover", // Make the image cover the entire background
//           backgroundPosition: "center", // Center the image
//           height: "100vh", // Make the background cover the full viewport height
//           width: "100%", // Full width
//         }}
//       >
//         <div className="form">
//           <form>
//             <h2 className="text-center">Contact Us</h2>
//             <div className="form-container">
//               <label for="fname">
//                 <b>First Name</b>
//               </label>
//               <input
//                 type="text"
//                 id="fname"
//                 name="fname"
//                 placeholder="Your name"
//                 onChange={getValue}
//                 required
//               />
//               <label for="lname">
//                 <b>Last Name</b>
//               </label>
//               <input
//                 type="text"
//                 id="lname"
//                 name="lname"
//                 placeholder="Your last name"
//                 onChange={getValue}
//                 required
//               />
//               <label for="email">
//                 <b>Email</b>
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Your email"
//                 onChange={getValue}
//                 required
//               />
//               <label for="subject">
//                 <b>Subject</b>
//               </label>
//               <textarea
//                 id="subject"
//                 name="subject"
//                 placeholder="Write something.."
//                 onChange={getValue}
//                 style={{ height: "200px" }}
//                 required
//               ></textarea>
//               <input type="submit" value="Submit"  onClick={sentUserdata}/>
//             </div>
//           </form>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Card;

// import React, { useState } from "react";
// import Layout from "../Component/Layout";
// import "../styles/SignUp.css";
// import skyscrapper from "../images/skyscrapper.png"; // Import the image
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

// const Contact = () => {
//   const [inputValue, setInputValue] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     subject: "",
//   });

//   const getValue = (e) => {
//     const { name, value } = e.target;
//     setInputValue((prev) => {
//       return {
//         ...prev,
//         [name]: value,
//       };
//     });
//   };

//   const sentUserdata = async(e) => {
//     e.preventDefault();
//     const { fname, lname, email, subject } = inputValue;

//     if (fname === "") {
//       toast.error("First name is required");
//     } else if (lname === "") {
//       toast.error("Last name is required");
//     } else if (email === "") {
//       toast.error("Email is required");
//     } else if (!email.includes("@")) {
//       toast.error("Enter a valid email");
//     } else {
//       const res = await fetch("http://localhost:6002/register",{
//         method:"POST",
//         headers:{
//           "Content-Type":"application/json",
//           },
//           body:JSON.stringify({
//             fname,
//             lname,
//             email,
//             subject,
//           }),
//       });
//       const data =res.json();
//       console.log(data);
//       }
//     }
//   };

//   return (
//     <Layout>
//       <div
//         className="card-page"
//         style={{
//           backgroundImage: `url(${skyscrapper})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "100vh",
//           width: "100%",
//         }}
//       >
//         <div className="form">
//           <form onSubmit={sentUserdata}noValidate>
//             <h2 className="text-center">Contact Us</h2>
//             <div className="form-container">
//               <label htmlFor="fname">
//                 <b>First Name</b>
//               </label>
//               <input
//                 type="text"
//                 id="fname"
//                 name="fname"
//                 placeholder="Your name"
//                 onChange={getValue}
//                 required
//               />
//               <label htmlFor="lname">
//                 <b>Last Name</b>
//               </label>
//               <input
//                 type="text"
//                 id="lname"
//                 name="lname"
//                 placeholder="Your last name"
//                 onChange={getValue}
//                 required
//               />
//               <label htmlFor="email">
//                 <b>Email</b>
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Your email"
//                 onChange={getValue}
//                 required
//               />
//               <label htmlFor="subject">
//                 <b>Subject</b>
//               </label>
//               <textarea
//                 id="subject"
//                 name="subject"
//                 placeholder="Write something.."
//                 onChange={getValue}
//                 style={{ height: "200px" }}
//                 required
//               ></textarea>
//               <input type="submit" value="Submit" />
//             </div>
//           </form>
//         </div>
//       </div>
//       {/* Add ToastContainer here */}
//       <ToastContainer />
//     </Layout>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import Layout from "../Component/Layout";
import "../styles/SignUp.css";
import skyscrapper from "../images/skyscrapper.png"; // Import the image
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const Contact = () => {
  const [inputValue, setInputValue] = useState({
    fname: "",
    lname: "",
    email: "",
    subject: "",
  });

  const getValue = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sentUserdata = async (e) => {
    e.preventDefault();

    const { fname, lname, email, subject } = inputValue;

    // Custom Validation Logic
    if (fname === "") {
      toast.error("First name is required");
    } else if (lname === "") {
      toast.error("Last name is required");
    } else if (email === "") {
      toast.error("Email is required");
    } else if (!email.includes("@")) {
      toast.error("Invalid email");
    } else {
      try {
        const res = await fetch("http://localhost:6002/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fname,
            lname,
            email,
            subject,
          }),
        });

        const data = await res.json();

        if (res.status === 201) {
          toast.success("Your response has been submitted");
          setInputValue({
            fname: "",
            lname: "",
            email: "",
            subject: "",
          });
        } else if (res.status === 200) {
          toast.success("Email already registered, details updated successfully");
          setInputValue({
            fname: "",
            lname: "",
            email: "",
            subject: "",
          });
        } else {
          toast.error(data.error || "Failed to submit response");
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <Layout>
      <div
        className="card-page"
        style={{
          backgroundImage: `url(${skyscrapper})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <div className="form">
          <form onSubmit={sentUserdata} noValidate>
            <h2 className="text-center">Contact Us</h2>
            <div className="form-container">
              <label htmlFor="fname">
                <b>First Name</b>
              </label>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Your name"
                value={inputValue.fname}
                onChange={getValue}
              />
              <label htmlFor="lname">
                <b>Last Name</b>
              </label>
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="Your last name"
                value={inputValue.lname}
                onChange={getValue}
              />
              <label htmlFor="email">
                <b>Email</b>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                value={inputValue.email}
                onChange={getValue}
              />
              <label htmlFor="subject">
                <b>Subject</b>
              </label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something..."
                value={inputValue.subject}
                onChange={getValue}
                style={{ height: "200px" }}
              ></textarea>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default Contact;