import "../styles/TagName.css"

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
