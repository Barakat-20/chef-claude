import React from "react"
import './Main.css'
import IngredientsListItems from "../IngredientsListItems.jsx"
import Recipe from "../Recipe.jsx"
import { getRecipeFromMistral } from "../../ai.js";

export default function Main() {

  const [ingredients, setIngredients] = React.useState(["flour", "butter", "egg", "milk"])

  const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
      const generatedRecipeIdea = getRecipeFromMistral(ingredients)
      setRecipe(generatedRecipeIdea)
    }

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

      {ingredients.length > 0 && <IngredientsListItems 
      ingredients={ingredients} 
      getRecipe={getRecipe} />}

      {recipe && <Recipe recipe={recipe}/>}
    </main>
  )
}