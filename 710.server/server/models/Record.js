import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.SchemaTypes.ObjectId

const Record = new Schema(
  {
    maintenanceID: { type: ObjectId, ref: 'Maintenance', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: Object },
    mfr: { type: String },
    warrantyInfo: { type: String },
    archived: { type: Boolean, default: false, required: true },
    additionalInfo: { type: String }
    // ownerId: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Record.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Record
