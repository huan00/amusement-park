const { Schema } = require('mongoose')

const Category = new Schema(
  {
    name: { type: String, required: true },
    parks: [{ type: Schema.Types.ObjectId, ref: 'parks' }],
    img: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Category
