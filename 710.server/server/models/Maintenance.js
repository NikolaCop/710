import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.SchemaTypes.ObjectId

const Maintenance = new Schema(
  {
    vehicleID: { type: ObjectId, ref: 'Vehicle', required: true },
    name: { type: String, required: true },
    DOS: { type: String, required: true },
    mileageAtDOS: { type: Number, required: true },
    archived: { type: Boolean, default: false },
    mileageDue: { type: Number },
    additionalInfo: { type: String },
    dateDue: { type: String }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Maintenance.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Maintenance
