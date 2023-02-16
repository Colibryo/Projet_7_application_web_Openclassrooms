import "../styles/Host.css"

export default function Host({ host, hostImage }) {
  return (
    <div className="hostContainer">
      <p className=" hostName "> {host}</p>
      <img src={hostImage} alt="le propriétaire" className="hostImage" />
    </div>
  )
}
