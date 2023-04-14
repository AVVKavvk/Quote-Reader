import { configureStore } from "@reduxjs/toolkit";
import message from "./Slice/Client";

export default configureStore({
    reducer:{
        message,
       
    }

})