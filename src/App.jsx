import { useState, useEffect } from 'react'
import './App.css'
import tax from "./tax-rates.js";
import Sidebar from "./Sidebar.jsx";
import Content from "./content.jsx";

function App() {
    const [formData, setFormData] = useState({
        capitalGains: "", stateTaxRate: "0", shortOrLongTax: "shortTermTaxRate"
    })


  return (
    <div id={"app"}>
        <Sidebar
            formData={formData}
            setFormData={setFormData}
        ></Sidebar>
        <Content
            formData={formData}
            setFormData={setFormData}
        ></Content>
    </div>
  )
}

export default App
