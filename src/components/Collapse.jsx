import { useState } from "react"
import vectorUp from "../assets/vectorUp.svg"
import vectorDown from "../assets/vectorDown.svg"
import "../styles/Collapse.css"

function Collapse({ name, children }) {
  const [open, setOPen] = useState(false)

  const handleCollapse = () => {
    setOPen(!open)
  }

  return (
    <div className="collapseContainer">
      <button onClick={handleCollapse} className="collapseButton">
        {name}{" "}
        {open ? (
          <img src={vectorUp} alt="icon-vecteur" className="vectorButton" />
        ) : (
          <img src={vectorDown} alt="icon-vecteur" className="vectorButton" />
        )}
      </button>
      {open && <div>{children}</div>}
    </div>
  )
}

export default Collapse
