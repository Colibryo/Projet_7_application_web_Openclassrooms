import "../styles/TagName.css"
//Fonction pour les tagName renvoyés dans la page logement
export default function TagName({ tagName }) {
  return (
    <ul className="tagNameContainer">
      {tagName.map((elements, index) => (
        <li key={index} className="tagName">
          {elements}
        </li>
      ))}
    </ul>
  )
}
