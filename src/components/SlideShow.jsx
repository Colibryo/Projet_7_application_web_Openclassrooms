import "../styles/SlideShow.css"
import previousArrow from "../assets/previousArrow.svg"
import nextArrow from "../assets/nextArrow.svg"

function SlideShow({
  dataPictures,
  dataTitle,
  handleClickPrevious,
  handleClickNext,
  lengthTabPictures,
  compteur,
}) {
  return (
    <div>
      <div className="slideContainer">
        <div className="slideShowContainer">
          <img src={dataPictures} alt={dataTitle} className="slideShowImg" />
          {lengthTabPictures > 1 ? (
            <p className="slidePageNumber">
              {compteur + 1}/{lengthTabPictures + 1}
            </p>
          ) : null}
        </div>
        {lengthTabPictures > 1 ? (
          <div className="arrowContainer">
            <button onClick={handleClickPrevious} className="previousArrow">
              <img
                src={previousArrow}
                alt="flêche pour accéder à la précédente"
                className="arrowLeft"
              />
            </button>
            <button onClick={handleClickNext} className="nextArrow">
              <img
                src={nextArrow}
                alt="flêche pour accéder à la prochaine"
                className="arrowRight"
              />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default SlideShow
