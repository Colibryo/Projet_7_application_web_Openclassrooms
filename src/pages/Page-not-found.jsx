import { NavLink } from "react-router-dom"
import "../styles/Page-note-found.css"
//fonction pour l'affichage de la page d'erreur
function Error() {
  return (
    <div className="pageErrorContainer">
      <h1 className="titlePageError">404</h1>
      <h2 className="subtitlePageError">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      {/* lien pour rediriger vers la page d'accueil  */}
      <div>
        <NavLink to="/" className="linkToHome">
          Retour à la page d'accueil
        </NavLink>
      </div>
    </div>
  )
}

export default Error
