import "../styles/Footer.css"
import logoFooter from "../assets/logoFooter.svg"
//Fonction permettant de renvoyer le footer dans les pages du site
function Footer() {
  return (
    <footer className="footerContainer">
      <img src={logoFooter} alt="logo kasa" className="logoFooter" />
      <p className="copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
