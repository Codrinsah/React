export function Prices(props) {
  const usd = props.usd
  const eur = props.eur
  const gbp = props.gbp
  return (
    <div>
      <p> Dollars: {usd} </p>
      <p> Euros: {eur} </p>
      <p> Pounds: {gbp} </p>
    </div>
  );
}