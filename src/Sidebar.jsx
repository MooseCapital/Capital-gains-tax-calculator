import {useState} from "react";

function Sidebar(props) {



    function handleChange(event) {
        props.setFormData(prevForm => {
                return {
                    ...prevForm,
                    [event.target.name] : event.target.value,

                }
            })
    }

    function submitForm(event) {
        event.preventDefault()
        console.log(props.formData)
    }

    return (
        <div className="sidebar">
        <div className="show-tax-box">

        </div>
            <form action="" onSubmit={submitForm}>
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