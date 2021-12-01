


import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import SideMenu from './components/SideMenu';




export default function App() {
  

return (
  <div>
  <SideMenu/>
   <Home/>
   </div>
 
);
}





// export default App;
