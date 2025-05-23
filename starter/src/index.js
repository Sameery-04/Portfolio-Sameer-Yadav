import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import {BrowserRouter} from  "react-router-dom";
import { Toaster } from "react-hot-toast";

  

         //  WE are starting 
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
        <Provider store={store}>
          <App />   
          <Toaster position="top-center" reverseOrder={false}  />
        </Provider>
    </BrowserRouter>

  
    
 
);
export default App;

