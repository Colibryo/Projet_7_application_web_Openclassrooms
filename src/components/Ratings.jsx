import redStar from "../assets/redStar.svg"
import greyStar from "../assets/greyStar.svg"
import "../styles/Ratings.css"
/*Function renvoyant les étoiles pour les avis
Prend en parampètre le nombre d'avis favorables de la page logements*/
export default function Ratings({ numberRedStar }) {
  let starsTab = [0, 1, 2, 3, 4]

  const greyStarName = "grey"
  const redStarName = "red"
  /* Création d'un premier tableau avec uniquement les étoiles grises */
  const greyStarstab = starsTab.map(
    (greyStars, index) =>
      (greyStars = (
        <img
          key={`${greyStarName}-${index}`}
          src={greyStar}
          alt={`${numberRedStar} avis favorables`}
          className="stars"
        />
      ))
  )
  /* Création d'un second tableau avec uniquement les étoiles rouges */
  const redStarstab = starsTab.map(
    (redStars, index) =>
      (redStars = (
        <img
          key={`${redStarName}-${index}`}
          src={redStar}
          alt={`${numberRedStar} avis favorables`}
          className="stars"
        />
      ))
  )
  /*Soustraction d'étoiles grises du tableau en fonction du nombre d'avis favroables*/
  const sliceGreyStarsTab = greyStarstab.slice(numberRedStar)
  /*Création du tableau d'étoiles rouges pour un maximum de 5 avis favorables */
  const sliceRedStarsTab = redStarstab.slice(5 - numberRedStar)
  //retourne retourne le nombre d'étoiles en fonction du nombre d'avis
  return (
    <div className="ratingsContainer">
      {numberRedStar === 0
        ? greyStarstab
        : sliceRedStarsTab.concat(sliceGreyStarsTab)}
    </div>
  )
}
