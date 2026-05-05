import './Main.css'

export default function Main() {
  return (
    <main className="main">
      <form>
        <input 
          className="ingredient" 
          aria-label="Add ingredient" 
          name="text" 
          placeholder="e.g. flour" 
        />
        <button><span>+</span> Add ingredient</button>
      </form>
    </main>
  )
}