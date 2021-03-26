import mongoose from 'mongoose'
import VehicleSchema from '../models/Vehicle'
import AccountSchema from '../models/Account'
import MaintenanceSchema from '../models/Maintenance'
import RecordSchema from '../models/Record'

class DbContext {
  Vehicle = mongoose.model('Vehicle', VehicleSchema);
  Account = mongoose.model('Account', AccountSchema);

  Maintenance = mongoose.model('Maintenance', MaintenanceSchema);
  Record = mongoose.model('Record', RecordSchema)
}

export const dbContext = new DbContext()
