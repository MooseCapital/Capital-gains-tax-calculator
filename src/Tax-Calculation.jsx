import {useState} from "react";
import tax from "./tax-rates.js";

function Tax_calculation(props) {
    const [image, setImage] = useState("public/close.svg")




    return (
        <div className="tax-calculation">
                    <div className={props.taxTerm === "shortTermTaxRate" ? "tax-term short-term-red" : "tax-term long-term-green"}></div>
                    <div className={"tax-1"}>{props.grossCapitalGains}</div>
                    <div className={"tax-2"}>{`${props.taxRate}%`}</div>
                    <div className={"tax-3"}>{props.taxPaid}</div>
                    <div className={"tax-4"}>{props.NetGains}</div>
                    <img
                        onMouseEnter={() => setImage(prevImg => "public/close_prelight.svg")}
                        onMouseLeave={() => setImage(prevState =>   "public/close.svg" )}
                        onClick={props.deleteTaxDiv}
                        className={"close"} src={image} alt=""
                    />
                </div>
    )
}

export default Tax_calculation