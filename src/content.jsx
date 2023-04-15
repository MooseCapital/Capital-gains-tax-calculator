import {useState} from "react";
import tax from "./tax-rates.js";
function Content(props) {
    const [image, setImage] = useState("public/close.svg")

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
            </main>
        </div>
    )
}

export default Content