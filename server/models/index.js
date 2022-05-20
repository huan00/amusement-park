const { model } = require('mongoose')
const ParkSchema = require('./Park')
const CategorySchema = require('./Category')
const RideSchema = require('./Ride')

const Ride = model('rides', RideSchema)
const Park = model('parks', ParkSchema)
const Category = model('categories', CategorySchema)

module.exports = {
  Ride,
  Park,
  Category
}
