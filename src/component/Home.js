import React, { useState } from'react';
import './main.css';
import {useNavigate} from "react-router-dom";

const Home=({userdata,setUserData})=>{
  const[updateState,setUpdateState]=useState(-1)
  


  const navigate=useNavigate()


  
//delete//
const deleteItem=(index)=>{
  const updateItems=userdata.filter((item)=>{
  return index!==item.id
  });
  setUserData(updateItems)
  };
 //edit
 const  handleEdit=(id)=>{
setUpdateState(id)

 };

 //edit component//
 function Edit({item,userdata,setUserData}){
    const handleinput=(e)=>{
const  newdata=userdata.map(li=>(
    li.id===item.id?{...li,[e.target.name]:e.target.value}:li
))
setUserData(newdata)
    }

    //udate//
    const handleupdate=()=>{
        
setUpdateState(-1)
    }
    return(<tr>
        <>
      <div className="contactcontent">
        
        <div className="inputdetails">
          <label>Name</label>
          <input
            type="text"
            name='name'
            value={item.name}
            onChange={handleinput}
            placeholder="enter name"
          />
          <br />
          <label>Email</label>
          <input
            type="text"
            name='email'
            value={item.email}
            onChange={handleinput}
            placeholder="enter email"
          />
          <br />
          <label>Mobile</label>
          <input
            type="number"
            name='mobile'
            value={item.mobile}
            onChange={handleinput}
            placeholder="enter mobile no"
          />
        </div>
        <br />
        <button id="updateid" onClick={handleupdate}>update</button>
        
      </div>
    </>
    </tr>)
 }
  

  return(<>
    
    
     
       <h1>Home </h1>
       <button className="btncontact" onClick={()=>navigate("/contact")}>Go to contact</button>
      <div className='maincont'>
        
       { userdata && userdata.map((item)=>(
        updateState===item.id?<Edit item={item} userdata={userdata} setUserData={setUserData}/>:
        <div className='card' key={item.id}>
             
        <span>Name:</span><p>{item.name}</p>
        <span>Email:</span><p>{item.email}</p>
        <span>Mobile:</span><p>{item.mobile}</p>
        <button id='btn' onClick={()=>handleEdit(item.id)} >edit</button>
        <button className='btn' onClick={()=>deleteItem(item.id)}>delete</button>
        
      </div>
       ))
    }
     </div>    
       

      
       
  
  </>);
}


export default Home;