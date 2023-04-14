import { useState, useEffect } from 'react'
import './App.css'
import tax from "./tax-rates.js";
import Sidebar from "./Sidebar.jsx";
import Content from "./content.jsx";

function App() {

  return (
    <div id={"app"}>
        <Sidebar></Sidebar>
        <Content></Content>
    </div>
  )
}

export default App
