import { useState } from "react"
import upArrow from "../assets/upArrow.svg"
import downArrow from "../assets/downArrow.svg"
import "../styles/Collapse.css"
/*fonction avec bouton pour la création du collapse
 * prenant en paramètre les props "nom" et "contenu" de la page */
function Collapse({ name, children }) {
  const [open, setOPen] = useState(false)
  //fonction qui passe la valeur à true
  const handleCollapse = () => {
    setOPen(!open)
  }

  return (
    <div className="wrapperCollapse">
      {/* bouton avec changement de direction de son icone flèche */}
      <button
        onClick={handleCollapse}
        className="collapseButton"
        aria-expanded="false"
      >
        {name}
        {open ? (
          <img
            src={upArrow}
            alt="flèche du bouton tournée vers le haut"
            className="buttonArrow"
          />
        ) : (
          <img
            src={downArrow}
            alt="flèche du bouton tournée vers le bas"
            className="buttonArrow"
          />
        )}
        {/* partie accordéon permettant de faire apparaître le contenu */}
      </button>
      <div className={!open ? "collapseOff" : "collapseOn"}>
        <div className="collapseHeight">{children}</div>
      </div>
    </div>
  )
}

export default Collapse
