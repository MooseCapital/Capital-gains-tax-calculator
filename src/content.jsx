import {useState} from "react";
import tax from "./tax-rates.js";
import Tax_calculation from "./Tax-Calculation.jsx";
function Content(props) {

    // const TaxDivs

    function deleteTax() {

    }
    //make a state to hold array of tax-calculations, we likely need a component of it, to render it with map
    //for each calculation
    return (
        <div className="content">
            <header className="header">
                <p>Capital gains</p>
                <p>Tax rate</p>
                <p>Tax paid</p>
                <p>Net gain</p>
            </header>
            <main className="main">
                <Tax_calculation></Tax_calculation>
                <Tax_calculation></Tax_calculation>
            </main>
        </div>
    )
}

export default Content