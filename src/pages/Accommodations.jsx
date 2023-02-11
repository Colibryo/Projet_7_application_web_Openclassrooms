import { useState } from "react"
import { useParams } from "react-router-dom"
import { accommodationsList } from "../datas/accommodationsList"
import Collapse from "../components/Collapse"
import SlideShow from "../components/SlideShow"
import Footer from "../components/Footer"

function Accommodations() {
  const { id } = useParams()

  //state
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

      <Collapse />
      <Footer />
    </div>
  )
}

export default Accommodations
