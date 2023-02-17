import { NavLink } from "react-router-dom"
import { accommodationsList } from "../datas/accommodationsList"
import "../styles/Cards.css"
//Cartes de la page logement
function Cards() {
  return (
    <div>
      <div className="galleryContainer">
        {/* récupération de la data et lien vers les 
         pages du logement en fonction de l'id*/}
        {accommodationsList.map(({ id, cover, title }) => (
          <NavLink key={id} to={`/Accomodations/${id}`} className="cards">
            <div className="cardsImg">
              <img src={cover} alt={title} className="cardsImg" />
              <h2 className="cardTitle"> {title}</h2>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}
export default Cards
