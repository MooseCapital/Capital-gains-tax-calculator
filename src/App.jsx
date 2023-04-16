import React, { useState, useEffect } from 'react'
import './App.css'
import tax from "./tax-rates.js";
import Sidebar from "./Sidebar.jsx";
import Content from "./content.jsx";

function App() {
    const [formData, setFormData] = useState({
        capitalGains: "", stateTaxRate: "0", shortOrLongTax: "shortTermTaxRate"
    })

    const [taxDivs, setTaxDivs] = useState(() => JSON.parse(localStorage.getItem("taxDivs")) || [])

    useEffect(() => {
        localStorage.setItem("taxDivs", JSON.stringify(taxDivs))
    }, [taxDivs])



    const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        });

    function deleteTaxDiv(id) {

        setTaxDivs(prevDivs => {
            return prevDivs.filter(div => div.id !== id)
        })

    }

    function createNewTaxDiv(gross, taxPaid, taxRate, taxTerm) {
        let Net = gross - taxPaid;


        const newTaxDiv = {
            id: taxDivs.length + 1,
            grossCapitalGains: formatter.format(gross),
            taxPaid: formatter.format(taxPaid),
            taxRate: taxRate,
            NetGains: formatter.format(Net),
            taxTerm: taxTerm,
        }
        setTaxDivs(prevTax => [ ...prevTax, newTaxDiv])
        console.log(taxDivs)
    }

     function submitForm(event) {
        event.preventDefault()
        let gains = Math.round(parseFloat(formData.capitalGains))
        let stateTax = Math.round(parseFloat(formData.stateTaxRate)) / 100;
        let term = formData.shortOrLongTax;
        let taxPaid;
        let taxRate;
        if (term === "shortTermTaxRate") {
            taxPaid = tax.getShortTermTaxInfo(gains, stateTax).taxPaid
            taxRate = tax.getShortTermTaxInfo(gains, stateTax).taxRate
            createNewTaxDiv(gains, taxPaid, taxRate, term)
        } else {
            taxPaid = tax.getLongTermTaxInfo(gains, stateTax).taxPaid
            taxRate = tax.getLongTermTaxInfo(gains, stateTax).taxRate
            createNewTaxDiv(gains, taxPaid, taxRate, term)
        }
    }

  return (
    <div id={"app"}>
        <Sidebar
            formData={formData}
            setFormData={setFormData}
            submitForm={submitForm}
            formatter={formatter}
        ></Sidebar>
        <Content
            formData={formData}
            setFormData={setFormData}
            taxDivs={taxDivs}
            deleteTaxDiv={deleteTaxDiv}
        ></Content>
    </div>
  )
}

export default App
