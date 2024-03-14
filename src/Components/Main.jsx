import useCurrencyRates from "../hooks/useCurrencyRates.js";
import {useState, useEffect} from "react";
export default function Main(){
    let [inputValue, setInputValue]=useState("");
    let [selectedCountries, setSelectedCountries]=useState(null);
    function handleCurrencyChange(e) {
        setSelectedCountries(e.target.value);
        useCurrencyRates(e.target.value)
    }
    function inputChange(e){
        setInputValue(e.target.value);
    } 
    return (
        <div className="main-container">
            <label htmlFor="input-value">From</label>
            <input
                type="number"
                placeholder="Enter value"
                value={inputValue}
                onChange={inputChange}
                id="input-value"
            />
            <select id="dropdown1" onChange={handleCurrencyChange}>
                <option value="inr">inr</option>
                <option value="all">all</option>
            </select>
        </div>
    )
}