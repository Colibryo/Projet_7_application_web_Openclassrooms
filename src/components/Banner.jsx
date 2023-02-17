import "../styles/Banner.css"
//Bannière des pages "Home" et "About"
function Banner({ children }) {
  return <section className="container">{children}</section>
}

export default Banner
