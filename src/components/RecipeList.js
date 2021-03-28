export function RecipeList(props) {
  const recipes = props.recipes

  return (
  <div class="columns is-multiline" align = "center" >
    {recipes}
  </div>
  )
}