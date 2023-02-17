import { useState } from "react"
import upArrow from "../assets/upArrow.svg"
import downArrow from "../assets/downArrow.svg"
import "../styles/Collapse.css"
/*fonction avec bouton pour la création du collapse
 * prenant en paramètre les props "nom" et "contenu" de la page */
function Collapse({ name, children }) {
  const [open, setOPen] = useState(false)

  const handleCollapse = () => {
    setOPen(!open)
  }

  return (
    <div className="wrapperCollapse">
      {/* bouton avec changement de direction de son icone flèche */}
      <button onClick={handleCollapse} className="collapseButton">
        {name}
        {open ? (
          <img
            src={upArrow}
            alt="flèche du bouton vers le bas"
            className="buttonArrow"
          />
        ) : (
          <img
            src={downArrow}
            alt="flèche du bouton vers le haut"
            className="buttonArrow"
          />
        )}
        {/* partie accordéon permettant de faire apparaître le contenu */}
      </button>
      {open && <div className="collapseHeight">{children}</div>}
    </div>
  )
}

export default Collapse
