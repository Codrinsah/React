export function Recipe(props) {
  const name = props.recipe.label
  const ingredients = props.recipe.ingredients
  const link = props.recipe.url
  const image = props.recipe.image
  const color = ingredients.length < 4 ? 'has-background-primary-light' : ingredients.length < 7 ? 'has-background-warning-light' : 'has-background-danger-light'
  function generateDivs(inputs) {
    var newInputs = inputs.map(i => {
      console.log(i)
      return (<span class="tag is-warning is-light">{i.text}</span>);
    });
    return <div> {newInputs} </div>
  }

  return (
    <div class="column is-one-third">
      <div class="card m-5">
        <div class="card-image p-2">
          <figure class="image is-256x256">
            <img src={image} alt = {""}/>
          </figure>
        </div>
        <div class={color}>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4"><a href = {link}> {name} </a> </p>
              </div>
            </div>

            <div class="content">
              <p> Ingredients: {ingredients.length} </p>
              {generateDivs(ingredients)} 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}