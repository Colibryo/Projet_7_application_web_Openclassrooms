import { useState } from "react"
import { useParams } from "react-router-dom"
import { accommodationsList } from "../datas/accommodationsList"
import Collapse from "../components/Collapse"
import TagName from "../components/TagName"
import Ratings from "../components/Ratings"
import Host from "../components/Host"
import SlideShow from "../components/SlideShow"
import Footer from "../components/Footer"

function Accommodations() {
  const { id } = useParams()

  const dataById = accommodationsList.find((element) => {
    return element.id === id
  })

  const [compteur, setCompteur] = useState(0)

  let indexPictures = dataById.pictures[compteur]

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
      <SlideShow
        dataById={dataById}
        dataPictures={indexPictures}
        dataTitle={dataById.title}
        handleClickNext={handleClickNext}
        handleClickPrevious={handleClickPrevious}
        lengthTabPictures={lengthTabPictures}
        compteur={compteur}
      />
      <h1>{dataById.title}</h1>
      <h2>{dataById.location}</h2>

      <TagName tagName={dataById.tags} />

      <Host host={dataById.host.name} hostImage={dataById.host.picture} />

      <Ratings numberRedStar={dataById.rating} />

      <Collapse name={"Description"}>
        <div className="textContainer">
          <p className="collapseText">{dataById.description}</p>
        </div>
      </Collapse>
      <Collapse name={"Equipements"}>
        <div className="textContainer">
          <ul>
            {dataById.equipments.map((elements, index) => (
              <li key={index} className="collapseText">
                {elements}
              </li>
            ))}
          </ul>
        </div>
      </Collapse>
      <Footer />
    </div>
  )
}

export default Accommodations
