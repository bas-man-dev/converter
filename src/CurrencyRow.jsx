import React from 'react'

export default function CurrencyRow(props) {

    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount,
    } = props
    return (
        <div>
            <input 
              type="number" 
              className="input" 
              size="10"
              value={amount}
              onChange={onChangeAmount}
            />
            <select 
              name={selectedCurrency}  
              value={selectedCurrency} 
              onChange={onChangeCurrency}
            >
                {currencyOptions.map(option => (
                    <option key={option} value={option}>
                        {option}                    
                    </option>
                ))}
               
            </select>
        </div>
    )
}
