import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
// import { BadRequest } from '../utils/Errors'

class MaintenanceService {
  async editMaintenance(id, body) {
    const maintenance = await dbContext.Maintenance.findByIdAndUpdate(id, body)
    if (!maintenance) {
      throw new BadRequest('INVALID ID')
    }
    if (maintenance.archived) {
      throw new BadRequest('This is archived you cannot edit this')
    }
    return maintenance
  }

  async createMaintenance(body) {
    return await dbContext.Maintenance.create(body)
  }

  async findById(id) {
    return await dbContext.Maintenance.findById(id).populate('creator')
  }

  async find(query = {}) {
    return await dbContext.Maintenance.find(query).populate('creator')
  }

  async findMaintenanceByVehicleId(id) {
    return await dbContext.Maintenance.findById(id)
  }

  async deleteMaintenance(id, body) {
    if (body) {
      body.archived = true
      return await dbContext.Maintenance.findByIdAndUpdate(id, body)
    }
  }
}

export const maintenanceService = new MaintenanceService()

// async deleteVehicleById(body){
//   return await dbContext.Vehicle.findByIdAndUpdate({_id: body.id, creatorId: body.creatorId, closed: false}, {closed: true}, {new: true} )
// }
