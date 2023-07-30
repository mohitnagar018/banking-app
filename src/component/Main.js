import Home from "./Home";
import './main.css';
import {useState} from "react"

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Contact from "./Contact";

export default function Main() {
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[mobile,setMobile]=useState("")
  const[userdata,setUserData]=useState([])
  const [editText, setEditText] = useState('');
  return (<>
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home userdata={userdata} editText={editText} setEditText={setEditText} setUserData={setUserData}/>}/>
        <Route path="/contact" element={<Contact name={name} setName={setName} email={email} setEmail={setEmail} setMobile={setMobile} mobile={mobile} userdata={userdata} setUserData={setUserData} editText={editText} setEditText={setEditText}/>}/>
      </Routes>
      </BrowserRouter>
  </>
    
  );
}