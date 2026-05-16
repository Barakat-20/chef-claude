export default function IngredientsListItems(props) {
  const ingredientsListItems = props.ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
  ))
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredientsList">{ingredientsListItems}</ul>

      {props.ingredients.length > 3  && <div className="recipeContainer">
        <div>
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button onClick={props.getRecipe} className="getRecipe">Get a recipe</button>
      </div>}
    </section> 
  )
}