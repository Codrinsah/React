import '../App.css';

export function Recipe(props) {
  const name = props.recipe.label
  const ingredients = props.recipe.ingredients
  const link = props.recipe.url
  const image = props.recipe.image
  const color = ingredients.length < 4 ? 'easy' : ingredients.length < 7 ? 'medium' : 'hard'
  const difficulty = ingredients.length < 4 ? 'Easy' : ingredients.length < 7 ? 'Medium' : 'Hard'
  function generateDivs(inputs) {
    var newInputs = inputs.map(i => {
      console.log(i)
      return (<span class="tag tag__custom is-info is-light is-food-tag"> {i.text} </span>)
      
    });
    return <div class = "tags"> {newInputs} </div>
  }

  var helper = `card-image ${color} pt-3`
  return (
    <div class="column is-one-third">
    <div class = {color}>
      <div class="card m-5">
        <div class={helper}>
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
              <p class = "subtitle"> Ingredients: {ingredients.length} </p>
              <p class = 'subtitl'> Difficulty: {difficulty} </p>
              {generateDivs(ingredients)} 
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}