import {useState} from 'react'

import {Prices} from '../components/Prices'

export function LivePricePage() {

  const [gbp, setGbp] = useState(null)

  function refreshPrices () {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json',)
    .then((response) => response.json())  
    .then((json) => setGbp(json.bpi.GBP.rate))
  }
  return (
    <div>
      <h1> Live Bitcoin price </h1>
      <Prices usd = {123} eur = {130} gbp = {gbp} />
      <button onClick = {refreshPrices} > Refresh Prices </button>
    </div>
  );
}