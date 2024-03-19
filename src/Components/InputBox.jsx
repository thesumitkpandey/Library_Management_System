export default function InputBox({
    label, 
    className,
    amount,
    onAmountChange,
    currencyOptions,
    selectCurrency,
    amountDisabled=false,
    currencyDisabled,
    amountId
}){
    return (
        <div className="row">
            <label htmlFor="currency-input">{label}</label>
            <input
                type="number"
                placeholder="Amount"
                disabled={amountDisabled}
                value={amount}
                onChange={onAmountChange}
                id={amountId}
            />
            <select value={selectCurrency} onChange={(e)=>onCurrencyChange(e.target.value)} disabled={currencyDisabled}>
                {currencyOptions.map(keys=>
                    <option value={keys} key={keys}>{keys}</option>
                )}
            </select>
        </div>
    )

}