import {useState} from "react";
import tax from "./tax-rates.js";

function Tax_calculation() {
    const [image, setImage] = useState("public/close.svg")

    function deleteTax() {

    }


    return (
        <div className="tax-calculation">
                    <div className={"tax-1"}>$20,000</div>
                    <div className={"tax-2"}>%15</div>
                    <div className={"tax-3"}>$4,000</div>
                    <div className={"tax-4"}>$16,000</div>
                    <img
                        onMouseEnter={() => setImage(prevImg => "public/close_prelight.svg")}
                        onMouseLeave={() => setImage(prevState =>   "public/close.svg" )}
                        onClick={deleteTax}
                        className={"close"} src={image} alt=""
                    />
                </div>
    )
}

export default Tax_calculation