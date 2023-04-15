import { useState, useEffect } from 'react'
import './App.css'
import tax from "./tax-rates.js";
import Sidebar from "./Sidebar.jsx";
import Content from "./content.jsx";

function App() {
    const [formData, setFormData] = useState({
        capitalGains: "", stateTaxRate: "0", shortOrLongTax: "shortTermTaxRate"
    })

    const [taxDivs, setTaxDivs] = useState(() => {})


     function submitForm(event) {
        event.preventDefault()
        let gains = Math.round(parseFloat(formData.capitalGains))
        let stateTax = Math.round(parseFloat(formData.stateTaxRate)) / 100;
        let term = formData.shortOrLongTax;
        let taxPaid;
        let taxRate;
        let netGains;

        if (term === "shortTermTaxRate") {
            taxPaid = tax.getShortTermTaxInfo(gains, stateTax).taxPaid
            taxRate = tax.getShortTermTaxInfo(gains, stateTax).taxRate

        } else {
            taxPaid = tax.getLongTermTaxInfo(gains, stateTax).taxPaid
            taxRate = tax.getLongTermTaxInfo(gains, stateTax).taxRate

        }
        console.log(formData, taxPaid, taxRate)

    }
    //on form submit, have function call tax, then get data and pass in to content to generate tax-calculation holders

  return (
    <div id={"app"}>
        <Sidebar
            formData={formData}
            setFormData={setFormData}
            submitForm={submitForm}
        ></Sidebar>
        <Content
            formData={formData}
            setFormData={setFormData}
        ></Content>
    </div>
  )
}

export default App
