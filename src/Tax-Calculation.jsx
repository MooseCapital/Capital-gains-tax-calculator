import {useState} from "react";
import tax from "./tax-rates.js";
const closeImg = new URL('/public/close.svg', import.meta.url).href
const closePrelightImg = new URL('/public/close_prelight.svg', import.meta.url).href

function Tax_calculation(props) {
    const [image, setImage] = useState(closeImg)




    return (
        <div className="tax-calculation">
                    <div className={props.taxTerm === "shortTermTaxRate" ? "tax-term short-term-red" : "tax-term long-term-green"}></div>
                    <div className={"tax-1"}>{props.grossCapitalGains}</div>
                    <div className={"tax-2"}>{`${props.taxRate}%`}</div>
                    <div className={"tax-3"}>{props.taxPaid}</div>
                    <div className={"tax-4"}>{props.NetGains}</div>
                    <img
                        onMouseEnter={() => setImage(prevImg => closePrelightImg)}
                        onMouseLeave={() => setImage(prevState =>   closeImg )}
                        onClick={props.deleteTaxDiv}
                        className={"close"} src={image} alt=""
                    />
                </div>
    )
}

export default Tax_calculation