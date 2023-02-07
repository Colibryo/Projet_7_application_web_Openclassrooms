import "../styles/Home.css"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Cards from "../components/Cards"
import imgBannerHome from "../assets/imgBannerHome.png"

//affichage de la page d'accueil
function Home() {
  return (
    <div>
      <div className="bodyContainer">
        <Banner>
          <div className="bannerContainer">
            <img
              src={imgBannerHome}
              alt="paysage-au-bord-de-l'océan"
              className="bannerImg"
            />
            <div className="bannerBackground"></div>
          </div>
          <h1 className="bannerTitle">Chez vous, partout et ailleurs</h1>
        </Banner>
        <Cards />
      </div>
      <Footer />
    </div>
  )
}

export default Home
