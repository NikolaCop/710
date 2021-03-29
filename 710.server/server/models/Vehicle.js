import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Vehicle = new Schema(
  {
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    mileage: { type: Number, required: true },
    vin: { type: String, required: true },
    archived: { type: Boolean, default: false, required: true },
    creatorId: { type: String, required: true },
    ownerId: { type: String },
    images: { type: Object },
    avatar: { type: String }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Vehicle.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Vehicle
