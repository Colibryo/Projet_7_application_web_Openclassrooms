import { useState } from "react"
import { useParams, Redirect } from "react-router-dom"
import { accommodationsList } from "../datas/accommodationsList"
import Collapse from "../components/Collapse"
import TagName from "../components/TagName"
import Ratings from "../components/Ratings"
import Host from "../components/Host"
import SlideShow from "../components/SlideShow"
import Footer from "../components/Footer"
import "../styles/Accommodations.css"

function Accommodations() {
  const { id } = useParams()

  const dataById = accommodationsList.find((element) => {
    return element.id === id
  })

  const [compteur, setCompteur] = useState(0)
  let indexPictures = 0
  if (dataById === undefined) {
    return <Redirect to="/*" />
  } else {
    indexPictures = dataById.pictures[compteur]
  }

  const lengthTabPictures = dataById.pictures.length - 1

  const handleClickNext = () => {
    if (compteur !== lengthTabPictures) {
      setCompteur(compteur + 1)
    } else {
      setCompteur(compteur - lengthTabPictures)
    }
  }

  const handleClickPrevious = () => {
    if (compteur !== 0) {
      setCompteur(compteur - 1)
    } else {
      setCompteur(compteur + lengthTabPictures)
    }
  }

  return (
    <div>
      <div className="accommodationContainer">
        <SlideShow
          dataById={dataById}
          dataPictures={indexPictures}
          dataTitle={dataById.title}
          handleClickNext={handleClickNext}
          handleClickPrevious={handleClickPrevious}
          lengthTabPictures={lengthTabPictures}
          compteur={compteur}
        />
        <div className="containerTitlesLocationHostRating">
          <div className="accommodationTitlesContainer">
            <h1 className="accommodationTitle">{dataById.title}</h1>
            <h2 className="accommodationLocation">{dataById.location}</h2>
            <TagName tagName={dataById.tags} />
          </div>
          <div className="wrapperHostRating">
            <Host host={dataById.host.name} hostImage={dataById.host.picture} />
            <Ratings numberRedStar={dataById.rating} />
          </div>
        </div>

        <div className="accommodationCollapseWrapper">
          <Collapse name={"Description"}>
            <div className="accommodationCollapseContainer">
              <div className="accommodationCollapseTextContainer">
                <p className="accommodationCollapseText">
                  {dataById.description}
                </p>
              </div>
            </div>
          </Collapse>

          <Collapse name={"Equipements"}>
            <div className="accommodationCollapseContainer">
              <div className="accommodationCollapseTextContainer">
                <ul className="accommodationCollapseText">
                  {dataById.equipments.map((elements, index) => (
                    <li key={index}>{elements}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Accommodations
