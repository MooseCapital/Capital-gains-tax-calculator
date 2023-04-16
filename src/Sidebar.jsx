import {useState, useEffect} from "react";
import tax from "./tax-rates.js";
function Sidebar(props) {

    //make it so on form data input change we calculate tax paid and net income like for div but auto updating div in sidebar
        const [tax99, setTax99] = useState({tax_paid:"", tax_rate:""})
        useEffect(() => {
            let taxPaid;
            let taxRate;
            let gains = Math.round(parseFloat(props.formData.capitalGains))
            let stateTax = Math.round(parseFloat(props.formData.stateTaxRate)) / 100;
            let term = props.formData.shortOrLongTax;

            if (term === "shortTermTaxRate") {
                taxPaid = tax.getShortTermTaxInfo(gains, stateTax).taxPaid
                taxRate = tax.getShortTermTaxInfo(gains, stateTax).taxRate
                setTax99(prev => {
                    return {...prev, tax_paid: taxPaid, tax_rate: taxRate}
                })
            } else {
                taxPaid = tax.getLongTermTaxInfo(gains, stateTax).taxPaid
                taxRate = tax.getLongTermTaxInfo(gains, stateTax).taxRate
                setTax99(prev => {
                    return {...prev, tax_paid: taxPaid, tax_rate: taxRate}
                })
            }

        }, [props.formData])
        console.log(tax99.tax_paid, tax99.tax_rate, props.formData.capitalGains)

    function handleChange(event) {
        props.setFormData(prevForm => {
                return {
                    ...prevForm,
                    [event.target.name] : event.target.value,

                }
            })

    }
    let taxPaidDiv = props.formatter.format(tax99.tax_paid);
    let netGainDiv = props.formatter.format(props.formData.capitalGains - tax99.tax_paid)
    return (
        <div className="sidebar">
        <div className="show-tax-box">
            <div className="box-tax-paid">{`Tax paid: ${taxPaidDiv === "$NaN" ? "$0" : taxPaidDiv}`}</div>
            <div className="box-tax-rate">{`Tax rate: ${tax99.tax_rate || 0}%`}</div>
            <div className="box-net-gain">{`Net gain: ${netGainDiv === "$NaN" ? "$0" : netGainDiv}`}</div>
        </div>
            <form action="" onSubmit={props.submitForm}>
            <div className={"holding-length"}>Holding Length</div>
            <div className={"radio-holder"}>
                <label id={"tax-radio"} htmlFor="shortTermTaxRate">Short
                       <input
                        type="radio"
                        id="shortTermTaxRate"
                        name={"shortOrLongTax"}
                        value={"shortTermTaxRate"}
                        onChange={handleChange}
                        checked={props.formData.shortOrLongTax === "shortTermTaxRate"}
                    />
                </label>
                <label id={"tax-radio"} htmlFor="shortTermTaxRate">Long
                       <input
                        type="radio"
                        id="longTermTaxRate"
                        name={"shortOrLongTax"}
                        value={"longTermTaxRate"}
                        onChange={handleChange}
                        checked={props.formData.shortOrLongTax === "longTermTaxRate"}
                    />
                </label>
            </div>

            <label htmlFor="capitalGains">Capital Gains</label>
            <input onChange={handleChange} id={"capitalGains"} name={"capitalGains"} value={props.formData.grossIncome} type="text"/>
            <label htmlFor="stateTaxRate">State tax rate</label>
            <input onChange={handleChange} id={"stateTaxRate"} name={"stateTaxRate"} value={props.formData.stateTaxRate} type="text"/>
            <button>Calculate</button>
            </form>
        </div>
    )
}

export default Sidebar