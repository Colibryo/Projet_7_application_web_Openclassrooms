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
//Fonction pour afficher la page "logements"
function Accommodations() {
  //récupération de l'id du produit
  const { id } = useParams()
  //recherche du produit par son id dans les données issues du fichier local
  const dataById = accommodationsList.find((element) => {
    return element.id === id
  })
  //initilaisation d'un compteur pour afficher les images
  const [compteur, setCompteur] = useState(0)
  //redirection vers la page d'erreur si l'id récupéré avec useparams est incorrect (aucune data trouvée)
  let indexPictures = 0
  if (dataById === undefined) {
    return <Redirect to="/*" />
  } else {
    indexPictures = dataById.pictures[compteur]
  }
  //initiaisation du tableau pour l'affichage des images en fonction de leur nombre (commence à l'index 0)
  const lengthTabPictures = dataById.pictures.length - 1
  //affichage des images en fonction du compteur avec la longueur du tableau des images
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
        {/* affichage du slider   */}
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
            {/* titre du logement  */}
            <h1 className="accommodationTitle">{dataById.title}</h1>
            {/* localisation du logement  */}
            <h2 className="accommodationLocation">{dataById.location}</h2>
            {/* affichage des tagName */}
            <TagName tagName={dataById.tags} />
          </div>
          <div className="wrapperHostRating">
            {/* affichage des informations du propriétaire   */}
            <Host host={dataById.host.name} hostImage={dataById.host.picture} />
            {/* affichage des avis   */}
            <Ratings numberRedStar={dataById.rating} />
          </div>
        </div>
        {/* affichage des collapse "descriptions" et "équipements" */}
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
      {/* affichage du footer   */}
      <Footer />
    </div>
  )
}

export default Accommodations
