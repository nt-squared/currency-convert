import React from 'react'

export default function CurrencyRow(props) {
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount,
    } = props;

    return (
        <div>
            <input type="number" className="input" value={amount.toString()} onChange={onChangeAmount} />
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map((option, index) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}
