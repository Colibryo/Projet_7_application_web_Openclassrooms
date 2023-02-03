import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import styles from "../styles/Header.module.css"
//barre de navigation commune aux pages
function Header() {
    return (
        <header className = {styles.header}>
            <Logo className = {styles.logo } />
        <nav className = {styles.navigation}>
            <ul>
                <li className = {styles.HomeNavigation}>< NavLink to="/" >Accueil</ NavLink></li> 
                <li className = {styles.aboutNavigation}>< NavLink to="/About">A propos</ NavLink></li>
            </ul>
        </nav>
        </header>
    )
}

export default Header