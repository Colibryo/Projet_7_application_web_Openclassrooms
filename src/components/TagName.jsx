//import "../styles/tagName.css"

export default function TagName({ tagName }) {
  return (
    <ul>
      {tagName.map((elements, index) => (
        <li key={index} className="tagName">
          {elements}
        </li>
      ))}
    </ul>
  )
}
