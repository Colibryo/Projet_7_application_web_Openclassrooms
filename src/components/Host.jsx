import "../styles/Host.css"
/*Function permettant de renvoyer l'image et le nom du propriétaire
Prend en paramètre les props nom et image du prorpiétaire issus de la page "logement"*/
export default function Host({ host, hostImage }) {
  return (
    <div className="hostContainer">
      <p className=" hostName "> {host}</p>
      <img src={hostImage} alt="le propriétaire" className="hostImage" />
    </div>
  )
}
