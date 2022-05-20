const ParksCard = (props) => {
  let color

  switch (props.category) {
    case 'Kids':
      color = 'purple'
      break
    case 'Amusement':
      color = 'green'
      break
    case 'Water':
      color = 'blue'
      break
  }

  return (
    <div className="parkcards" onClick={props.onClick}>
      <div className="img-wrapper">
        <img src={props.img}></img>
      </div>
      <div className="parkcards-info">
        <h3>{props.name}</h3>
        <p style={{ backgroundColor: color }}>{props.category}</p>
      </div>
    </div>
  )
}
export default ParksCard
