import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ViewRide = (props) => {
  let { id } = useParams()
  const [rideDetails, setRideDetails] = useState('')

  useEffect(() => {
    const getRideDetails = async () => {
      const res = await axios.get(`/rides/${id}`)

      setRideDetails(res.data)
    }
    getRideDetails()
  }, [id])

  return (
    <div>
      <div className="viewCard">
        <div className="cardImg">
          <img src={rideDetails.img} alt="404 err"></img>
        </div>
        <div className="cardDes">
          <h1>Name: {rideDetails.name}</h1>
          <div>
            <p>Max Capacity: {rideDetails.maxCapacity}</p>
            <p>Ride Length: {rideDetails.rideLength}</p>
            <p>Description: {rideDetails.description}</p>
            <p>Park: {rideDetails.park}</p>
            <p>Year Built: {rideDetails.yearBuilt}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewRide
