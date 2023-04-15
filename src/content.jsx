import {useState} from "react";
import tax from "./tax-rates.js";
import Tax_calculation from "./Tax-Calculation.jsx";
function Content(props) {

    const TaxDivs = props.taxDivs.map((div) => {

        return <Tax_calculation
                id={div.id}
                grossCapitalGains={div.grossCapitalGains}
                taxPaid={div.taxPaid}
                taxRate={div.taxRate}
                NetGains={div.NetGains}
                key={div.id}
                deleteTaxDiv={() => props.deleteTaxDiv(div.id)}
        />
    })

    function deleteTax() {

    }

    return (
        <div className="content">
            <header className="header">
                <p>Capital gains</p>
                <p>Tax rate</p>
                <p>Tax paid</p>
                <p>Net gain</p>
            </header>
            <main className="main">
                {TaxDivs}
            </main>
        </div>
    )
}

export default Content