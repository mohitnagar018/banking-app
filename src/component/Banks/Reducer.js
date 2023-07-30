



import { createSlice } from "@reduxjs/toolkit";


export const counterSlice=createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increase:(state,action)=>{
              state.value=parseInt(state.value) +parseInt(action.payload)
        },
        decrease:(state,action)=>{
            if(state.value>action.payload){
             state.value-=action.payload}
             else alert(" your account balance low")
        }
    }
    
})
export const{increase,decrease}=counterSlice.actions
export default counterSlice.reducer