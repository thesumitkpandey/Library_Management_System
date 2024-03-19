import InputBox from "./Components/InputBox.jsx";
import {useState, useEffect} from "react";
export default function App(){
  const [apiData, setApiData]=useState({});
  const [isLoading, setIsLoading]=useState(false);
  const [error, setError]=useState();
  const [amount, setAmount]=useState(1);
  const [from, setFrom]=useState("USD");
  const [to, setTo]=useState("INR");
  const [convertedAmount, setConvertedAmount]=useState();

  useEffect(()=>{
    async function fetchData(currency){
      setIsLoading(true);
      try{
        let response=await fetch(`https://v6.exchangerate-api.com/v6/5bb6f5960cde1502a8cce189/latest/${currency}`);
        let data=await response.json();
        setApiData(data.conversion_rates);
        console.log(apiData.inr);
      }catch(e){
        setError(e);
      }
      finally{
        setIsLoading(false);
      }

    }
    fetchData(from);
  },[])
  if (isLoading){
    return (
      <h1>Loading...</h1>
    )
  }
  if (error){
    return (
      <h1>Please try again after some time</h1>
    )
  }
  function change(e){
    // setAmount(e.target.value)
  }


  return (
    <>
    <InputBox label="From" onAmountChange={change} selectCurrency={from}  currencyOptions={Object.keys(apiData)}/>
    <InputBox label="To"  selectCurrency={to} currencyOptions={Object.keys(apiData)}/>
    </>
  )
}