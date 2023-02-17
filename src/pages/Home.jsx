import "../styles/Home.css"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Cards from "../components/Cards"
import HomeBannerImg from "../assets/homeBannerImg.png"

//fonction pour l'affichage de la page d'accueil
function Home() {
  return (
    <div>
      <div className="bodyContainer">
        {/* affichage de la bannière  */}
        <Banner>
          <div className="homeBannerContainer">
            <img
              src={HomeBannerImg}
              alt="paysage au bord de l'océan"
              className="homeBannerImg"
            />
            <div className="homeBannerBackground"></div>
          </div>
          <h1 className="bannerTitle">Chez vous, partout et ailleurs</h1>
        </Banner>
        {/* affichage des cartes des logements  */}
        <Cards />
      </div>
      {/* affichage du footer  */}
      <Footer />
    </div>
  )
}

export default Home
