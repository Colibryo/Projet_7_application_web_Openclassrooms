import "../styles/Collapse.css"
import AboutBannerImg from "../assets/aboutBannerImg.png"
import Banner from "../components/Banner"
import Collapse from "../components/Collapse"
import Footer from "../components/Footer"
import "../styles/About.css"
//fonction pour l'affichage de la page "A propos"
function About() {
  //création d'un tableau contenant les noms des boutons des collapse de la page
  const nameButton = ["Fiabilité", "Respect", "Service", "Sécurité"]

  return (
    <div>
      <div className="aboutContainer">
        <div className="wrapperBanner">
          {/* affichage de la bannière */}
          <Banner>
            <div className="aboutBannerContainer">
              <img
                src={AboutBannerImg}
                alt="paysage de montagnes"
                className="aboutBannerImg"
              />
              <div className="aboutBannerBackground"></div>
            </div>
          </Banner>
        </div>
        {/* affichage des collapse - les noms des boutons issus du tableau sont envoyés en props */}
        <div className="aboutCollapseContainer">
          <Collapse name={nameButton[0]}>
            <div className="aboutCollapseTextContainer">
              <p className="aboutCollapseText">
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les
                informations sont régulièrement vérifiées par nos équipes.
              </p>
            </div>
          </Collapse>
          <Collapse name={nameButton[1]}>
            <div className="aboutCollapseTextContainer">
              <p className="aboutCollapseText">
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
              </p>
            </div>
          </Collapse>
          <Collapse name={nameButton[2]}>
            <div className="aboutCollapseTextContainer">
              <p className="aboutCollapseText">
                Nos équipes se tiennent à votre disposition pour vous fournir
                une expérience parfaite. N'hésitez pas à nous contacter si vous
                avez la moindre question.
              </p>
            </div>
          </Collapse>
          <Collapse name={nameButton[3]}>
            <div className="aboutCollapseTextContainer">
              <p className="aboutCollapseText">
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                que pour les voyageurs, chaque logement correspond aux critères
                de sécurité établis par nos services. En laissant une note aussi
                bien à l'hôte qu'au locataire, cela permet à nos équipes de
                vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos
                hôtes.
              </p>
            </div>
          </Collapse>
        </div>
      </div>
      {/* affichage du footer  */}
      <Footer />
    </div>
  )
}

export default About
