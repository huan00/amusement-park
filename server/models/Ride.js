const { Schema } = require('mongoose')

const Ride = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    maxCapacity: { type: Number, required: true },
    yearBuilt: { type: Number, required: true },
    rideLength: { type: Number, required: true },
    park: { type: String, required: true },
    img: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Ride
