import { NavLink } from "react-router-dom"
import logoHeader from "../assets/logoHeader.svg"
import "../styles/Header.css"

//Function renvoyant la barre de navigation commune aux pages et logo du site
function Header() {
  return (
    <header className="headerContainer">
      {/* partie avec logo*/}
      <img src={logoHeader} alt="logo kasa" className="logoHeader" />
      <nav className="navigationContainer">
        <ul className="navigationList">
          <li className="listElements">
            {/* liens vers les pages du site*/}
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li className="listElements">
            <NavLink to="/about">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
