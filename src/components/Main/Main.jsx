import React from "react"
import './Main.css'

export default function Main() {

  const [ingredients, setIngredients] = React.useState([])

  const ingredientsListItems = ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
  ))

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }

  return (
    <main className="main">
      <form action={addIngredient} className="addIngredientForm">
        <input 
        type="text"
          className="ingredient" 
          aria-label="Add ingredient" 
          name="ingredient" 
          placeholder="e.g. flour" 
        />
        <button className="addIngredient"><span>+</span> Add ingredient</button>
      </form>

      {ingredients.length > 0 && <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredientsList">{ingredientsListItems}</ul>

        {ingredients.length > 3  && <div className="recipeContainer">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button className="getRecipe">Get a recipe</button>
        </div>}
      </section>
}

    </main>
  )
}