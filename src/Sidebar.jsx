import {useState} from "react";

function Sidebar() {

    const [formData, setFormData] = useState({
        capitalGains: "", stateTaxRate: "0"
    })

    function handleChange(event) {
        console.log("test")
        setFormData(prevForm => {
                return {
                    ...prevForm,
                    [event.target.name] : event.target.value,

                }
            })
    }

    function submitForm(event) {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <div className="sidebar">
        <div className="show-tax-box">

        </div>
            <form action="" onSubmit={submitForm}>

                <label htmlFor="capitalGains">Capital Gains</label>
                <input onChange={handleChange} id={"capitalGains"} name={"capitalGains"} value={formData.grossIncome} type="text"/>
                <label htmlFor="stateTaxRate">State tax rate</label>
                <input onChange={handleChange} id={"stateTaxRate"} name={"stateTaxRate"} value={formData.stateTaxRate} type="text"/>
                <button>Calculate</button>
            </form>
        </div>
    )
}

export default Sidebar