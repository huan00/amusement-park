import React from 'react'
import ParksCard from '../components/Parkscard'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import RideCard from '../components/Ridecard'

const ViewPark = (props) => {
  let { id } = useParams()
  const [parkDetail, setParkDetails] = useState({})
  const [rides, setRides] = useState([])

  useEffect(() => {
    const getParkDetails = async () => {
      const res = await axios.get(`http://localhost:3001/parks/${id}`)

      setParkDetails(res.data)
    }
    getParkDetails()
  }, [id])

  useEffect(() => {
    const getRide = async () => {
      const res = await axios.get(`http://localhost:3001/rides`)
      setRides(res.data)
    }
    getRide()
  }, [parkDetail])

  const parkRides = rides.filter((ride) => {
    if (ride.park === parkDetail.name) {
      return ride
    }
  })

  let color
  switch (parkDetail.category) {
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
    <div park-content>
      <div>
        <div className="parkImage">
          <img src={parkDetail.img} alt="image"></img>
          <div className="discription">
            <h3 style={{ backgroundColor: color }}>{parkDetail.category}</h3>
            <h1>{parkDetail.name}</h1>
            <p>{parkDetail.location}</p>
            <p>{parkDetail.description}</p>
            <p className="parkopened">Park Opened: {parkDetail.yearOpened}</p>
          </div>
        </div>
      </div>
      <div className="parkRides">
        <h1>Rides</h1>
        <div className="rides">
          {parkRides.map((ride) => (
            <Link className="rideLink" to={`/rides/${ride._id}`} key={ride._id}>
              <RideCard img={ride.img} {...ride} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ViewPark
