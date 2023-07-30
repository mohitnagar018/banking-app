import React, { useState } from 'react'
import './Bank.css'
import { useDispatch, useSelector } from 'react-redux';
import { increase,decrease } from './Reducer';
// import { Increase,Decrease } from './action/index';


// import {in } from './action/index';



function Banker() {
    const count=useSelector(state=>state.counter.value)
   
    const dispatch=useDispatch()




    const[Amount,setAmount]=useState("");
    const handleamount=(e)=>{
setAmount(e.target.value)


    };
    const deposit=()=>{
        dispatch(increase(Amount))
        setAmount('')
    }
    const withdraw=()=>{
        
        
            dispatch(decrease(Amount))
            setAmount('')
        }


    
   


  return (
    
    <div className='container'>
        <h1>Bank of IND</h1>
        <div className='header'>
            <h2>ABC Account Information</h2>
            </div>
        <div className='header'>
            <h3>Account No : 7484374648484747</h3>
            <h3>Email: abc@gmail.com</h3>
            </div>

    < div className='balance detail'>
        <div className='input'>
        <p id='rupee'>&#8377;</p><input type="number" placeholder='enter amount'   value={Amount} onChange={handleamount}/>
        </div>
        <div className='btn'>
            <button  id='with' onClick={withdraw}
            >Withdraw</button>
            <button id='dep' onClick={deposit}>Deposit</button>
        </div>

    </div>
    < div className='balancetotal'>
        Your Current balance:&#8377;<p id='count'>{count}</p>
    </div>
</div>
    
    
  )
};

export default Banker