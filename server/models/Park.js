const { Schema } = require('mongoose')

const Park = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    rides: [{ type: Schema.Types.ObjectId, ref: 'rides' }],
    location: { type: String, required: true },
    yearOpened: { type: Number, required: true },
    category: { type: String, required: true },
    img: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Park
