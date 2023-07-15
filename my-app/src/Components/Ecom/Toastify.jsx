import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Toast({ message }) {
  toast(message);
  return  <div style={{position:"absolute"}}>
  <ToastContainer />;

  </div>
  
}

export default Toast;
