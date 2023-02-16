import { NavLink } from "react-router-dom"
import logoHeader from "../assets/logoHeader.svg"
import "../styles/Header.css"

//barre de navigation commune aux pages
function Header() {
  return (
    <header className="headerContainer">
      <img src={logoHeader} alt="logo kasa" className="logoHeader" />
      <nav className="navigationContainer">
        <ul className="navigationList">
          <li className="listElements">
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
