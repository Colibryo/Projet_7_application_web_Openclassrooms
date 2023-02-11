export default function Host({ host, hostImage }) {
  return (
    <div>
      <h2>{host}</h2>
      <img src={hostImage} alt={host} />
    </div>
  )
}
