export function ColumnHeader(props) {
  const msg = props.value

  return (
    <div style = {{height: "80px"}}>
      <h4 class = "is-size-5 title"> {msg} </h4>
    </div>
  );
}