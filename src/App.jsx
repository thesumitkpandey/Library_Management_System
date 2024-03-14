import Main from "./Components/Main.jsx";
import useCurrencyRates from "./hooks/useCurrencyRates.js";
import {useState} from "react";
export default function App(){
  let [newValue, setNewValue]=useState("");
  let apiData=useCurrencyRates("INR");
  return (
    <div className="outer-container">
        <Main/>
    </div>
  )
}