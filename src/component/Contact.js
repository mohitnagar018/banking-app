import React from 'react'
import './main.css';
import { useNavigate } from "react-router-dom";

function Contact({
    name,
    setName,
    email,
    setEmail,
    mobile,
    setMobile,
    userdata,
    setUserData,
   
  
  }) {
    const navigate = useNavigate();

  let handlename = (e) => {
    setName(e.target.value);
  };

  let handleemail = (e) => {
    setEmail(e.target.value);
  };

  let handlemobile = (e) => {
    setMobile(e.target.value);
  };

  function handlesave() {
    if (name === "" || email === "" || mobile === "") {
      alert("Please fill all the details of contact");
    } else {
      let data = {
        id: new Date().getTime().toString(),
        name: name,
        email: email,
        mobile: mobile
      };
      setUserData([...userdata, data]);
      setName("");
      setEmail("");
      setMobile("");
      navigate("/");
    }
  }
  return (
    <>
      <div className="contactcontent">
        <h1>Contact Details</h1>
        <div className="inputdetails">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={handlename}
            placeholder="enter name"
          />
          <br />
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={handleemail}
            placeholder="enter email"
          />
          <br />
          <label>Mobile:</label>
          <input
            type="number"
            value={mobile}
            onChange={handlemobile}
            placeholder="enter mobile"
          />
        
        <br />
        <button onClick={handlesave}>Save</button>
        </div>
      </div>
    </>
  )
}

export default Contact