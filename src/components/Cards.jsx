import { NavLink } from "react-router-dom"
import { accommodationsList } from "../datas/accommodationsList"
import "../styles/Cards.css"

function Cards() {
  return (
    <div>
      <div className="galleryContainer">
        {accommodationsList.map(({ id, cover, title }) => (
          <NavLink to="/Accomodations" className="cards">
            <div key={id} className="cardsImg">
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
