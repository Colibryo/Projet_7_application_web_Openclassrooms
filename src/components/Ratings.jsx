import redStar from "../assets/redStar.svg"
import greyStar from "../assets/greyStar.svg"
import "../styles/Ratings.css"

export default function Ratings({ numberRedStar }) {
  let starsTab = [0, 1, 2, 3, 4]

  const greyStarName = "grey"
  const redStarName = "red"

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

  const sliceGreyStarsTab = greyStarstab.slice(numberRedStar)

  const sliceRedStarsTab = redStarstab.slice(5 - numberRedStar)

  return (
    <div className="ratingsContainer">
      {numberRedStar === 0
        ? greyStarstab
        : sliceRedStarsTab.concat(sliceGreyStarsTab)}
    </div>
  )
}
