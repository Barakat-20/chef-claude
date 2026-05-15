import React from "react"
import './Main.css'
import IngredientsListItems from "../IngredientsListItems.jsx"

export default function Main() {

  const [ingredients, setIngredients] = React.useState([])


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

      {ingredients.length > 0 && <IngredientsListItems ingredients={ingredients} />}

    </main>
  )
}