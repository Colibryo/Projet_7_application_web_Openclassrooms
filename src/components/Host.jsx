export default function Host({ host, hostImage }) {
  return (
    <div>
      <p>{host}</p>
      <img src={hostImage} alt="le-propriétaire" />
    </div>
  )
}
