import "../styles/Home.css"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Cards from "../components/Cards"
import HomeBannerImg from "../assets/homeBannerImg.png"

//affichage de la page d'accueil
function Home() {
  return (
    <div>
      <div className="bodyContainer">
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
        <Cards />
      </div>
      <Footer />
    </div>
  )
}

export default Home
