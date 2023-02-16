import { useState } from "react"
import upArrow from "../assets/upArrow.svg"
import downArrow from "../assets/downArrow.svg"
import "../styles/Collapse.css"

function Collapse({ name, children }) {
  const [open, setOPen] = useState(false)

  const handleCollapse = () => {
    setOPen(!open)
  }

  return (
    <div className="wrapperCollapse">
      <button onClick={handleCollapse} className="collapseButton">
        {name}
        {open ? (
          <img src={upArrow} alt="flèche du bouton" className="buttonArrow" />
        ) : (
          <img src={downArrow} alt="flèche du bouton" className="buttonArrow" />
        )}
      </button>
      {open && <div className="collapseHeight">{children}</div>}
    </div>
  )
}

export default Collapse
