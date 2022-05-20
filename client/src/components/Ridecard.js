const RideCard = (props) => {
  return (
    <div className="details-summary" onClick={props.onClick}>
      <div className="ride-img">
        <img src={props.img} alt="404 err"></img>
        <h1>Name: {props.name}</h1>
        <p>Year Built: {props.yearBuilt}</p>
      </div>
    </div>
  )
}
export default RideCard
