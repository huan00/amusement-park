import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateRide = (props) => {
  const [addRide, setaddRide] = useState({
    name: '',
    description: '',
    maxCapacity: '',
    yearBuilt: '',
    rideLength: '',
    park: '',
    img: ''
  })
  let navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:3001/rides', addRide)
      .then((res) => console.log('successful'))
      .catch((err) => console.log(err.data))
    navigate('/')
  }

  const disableBtn = () => {
    if (
      !addRide.name &
      !addRide.description &
      !addRide.maxCapacity &
      !addRide.yearBuilt &
      !addRide.rideLength &
      !addRide.park &
      !addRide.img
    ) {
      return true
    }
  }

  return (
    <div className="createRide">
      <h1>Add Ride</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Ride"
          value={addRide.name}
          placeholder="Name"
          onChange={(e) => setaddRide({ ...addRide, name: e.target.value })}
          required
        ></input>
        <input
          type="text"
          name="Description"
          value={addRide.description}
          placeholder="Description"
          required
          onChange={(e) =>
            setaddRide({ ...addRide, description: e.target.value })
          }
        ></input>
        <input
          type="number"
          required
          name="Ride"
          value={addRide.maxCapacity}
          placeholder="Max Capacity"
          onChange={(e) =>
            setaddRide({ ...addRide, maxCapacity: e.target.value })
          }
        ></input>
        <input
          type="number"
          required
          min="1950"
          max="2022"
          name="Year Built"
          value={addRide.yearBuilt}
          placeholder="Year Built"
          onChange={(e) =>
            setaddRide({ ...addRide, yearBuilt: e.target.value })
          }
        ></input>
        <input
          type="number"
          required
          name="Ride Length"
          value={addRide.rideLength}
          placeholder="Ride Length"
          onChange={(e) =>
            setaddRide({ ...addRide, rideLength: e.target.value })
          }
        ></input>
        <input
          type="text"
          required
          name="Ride"
          value={addRide.park}
          placeholder="Park"
          onChange={(e) => setaddRide({ ...addRide, park: e.target.value })}
        ></input>
        <input
          type="text"
          required
          name="Ride"
          value={addRide.img}
          placeholder="Image URL"
          onChange={(e) => setaddRide({ ...addRide, img: e.target.value })}
        ></input>
        <button className="submitButton" disabled={disableBtn} text="Submit">
          Add Ride
        </button>
      </form>
    </div>
  )
}
export default CreateRide
