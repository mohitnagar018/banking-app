import { configureStore } from "@reduxjs/toolkit";
import counter from "./Reducer";

export default configureStore({
    reducer:{
    counter:counter

}})