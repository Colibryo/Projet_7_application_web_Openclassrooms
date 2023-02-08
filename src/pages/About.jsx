import "../styles/Collapse.css"
import Banner from "../components/Banner"
import Collapse from "../components/Collapse"
import Footer from "../components/Footer"
import imgBannerAbout from "../assets/imgBannerAbout.png"

function About() {
  const nameButton = ["Fiabilité", "Respect", "Service", "Sécurité"]

  return (
    <div>
      <div className="bodyContainer">
        <Banner>
          <div className="bannerContainer">
            <img
              src={imgBannerAbout}
              alt="paysage-au-bord-de-l'océan"
              className="bannerImg"
            />
            <div className="bannerBackground"></div>
          </div>
        </Banner>
      </div>
      <div className="wrapperCollapse">
        <Collapse name={nameButton[0]}>
          <div className="textContainer">
            <p className="collapseText">
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </div>
        </Collapse>
        <Collapse name={nameButton[1]}>
          <div className="textContainer">
            <p className="collapseText">
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </div>
        </Collapse>
        <Collapse name={nameButton[2]}>
          <div>
            <p className="collapseText">
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N'hésitez pas à nous contacter si vous avez
              la moindre question.
            </p>
          </div>
        </Collapse>
        <Collapse name={nameButton[3]}>
          <div>
            <p className="collapseText">
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </div>
        </Collapse>
      </div>
      <Footer />
    </div>
  )
}

export default About
