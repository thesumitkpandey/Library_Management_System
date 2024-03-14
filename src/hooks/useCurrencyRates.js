import {useState, useEffect} from "react";
function  useCurrencyRates(firstCurrency){
    let [data, setData]=useState(null);
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/5bb6f5960cde1502a8cce189/latest/${firstCurrency}`)
        .then((res)=>
            res.json()
        )
        .then((resData)=>
            setData(resData)
        )
    },[firstCurrency])
    return data;
}
export default useCurrencyRates;
