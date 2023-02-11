//import { useState } from "react"
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
          <p className="slidePageNumber">
            {compteur + 1}/{lengthTabPictures + 1}
          </p>
        </div>
        <div className="arrowContainer">
          <button onClick={handleClickPrevious} className="previousArrow">
            <img src={previousArrow} alt="previous-arrow" />
          </button>
          <button onClick={handleClickNext} className="nextArrow">
            <img src={nextArrow} alt="next-arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SlideShow
