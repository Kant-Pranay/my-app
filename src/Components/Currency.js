import React, { useEffect } from "react"
import Nav from './Nav'
import axios from "axios"
import { useObserver } from "mobx-react"
import { useStore } from '../Contexts/Context'

function Currency() {
  const Store = useStore()
  const handleChange = (event) => {
    const { name, value } = event.target
    Store[name] = value
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    axios.get(Store.currencyURL())
      .then(res => res.data[`${Store.from_currency}_${Store.to_currency}`])
      .then(rate => {
        Store.output_currency = rate * Store.input_currency
      })
  }

  useEffect(() => {
    Store.from_currency = ""
    Store.to_currency = ""
    Store.input_currency = ""
    Store.output_currency = ""
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return useObserver(() => (
    <div className="currency-box">
      <h2>Currency Convertor</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>From: </label>
        <select
          value={Store.from_currency}
          name="from_currency"
          onChange={(e) => handleChange(e)}
        >
          <option value="">Select Currency</option>
          {
            Store.list.map(curr => (
              <option value={curr["currency"]}
                key={curr["currency"]}
              >
                {curr["name"]} {curr["symbol"]}
              </option>
            ))
          }
        </select> <br />
        <label>To: </label>
        <select
          value={Store.to_currency}
          name="to_currency"
          onChange={(e) => handleChange(e)}
        >
          <option value="">Select Currency</option>
          {
            Store.list.map(curr => (
              <option value={curr["currency"]}
                key={curr["currency"]}
              >
                {curr["name"]} {curr["symbol"]}
              </option>
            ))
          }
        </select> <br />
        <input
          name="input_currency"
          value={Store.input_currency}
          onChange={(e) => handleChange(e)}
          placeholder="Amount"
        /> <br />
        <button>Convert</button>
      </form>
      <p>Ans: {Store.output_currency}</p>
      <Nav prev='/data' next='/home' />
    </div>
  ))
}

export default Currency

