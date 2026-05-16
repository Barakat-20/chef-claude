import ReactMarkdown from 'react-markdown'
export default function Recipe(props) {
    console.log(props.recipe)
    return(
        <section className="recipe" ariel-live="polite">
            <h2>Chef Claude Recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}