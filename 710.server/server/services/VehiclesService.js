import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class VehiclesService {
  // This edit allows for vehicle to be deleted (archived) and does not allow for a PUT to change archived value back to False

  // This also allows for ownerId to be changed in order to transfer the cars between owners
  async editVehicle(id, userId, body) {
    const vehicle = await dbContext.Vehicle.findByIdAndUpdate({ _id: id, creatorId: userId }, body, { new: true })
    if (!vehicle) {
      throw new BadRequest('Invalid ID')
    }
    if (vehicle.archived) {
      throw new BadRequest('Cannot edit this Archived Vehicle')
    }
    return vehicle
  }

  async deleteVehicleById(id, body) {
    return await dbContext.Vehicle.findByIdAndUpdate(id, body)
  }

  // body.ownerId = body.creatorId was created in order to duplicate creatorId for the ability to edit the id
  async createVehicle(body) {
    body.ownerId = body.creatorId
    return await dbContext.Vehicle.create(body)
  }

  async find(query = {}) {
    const vehicles = await dbContext.Vehicle.find(query).populate('creator')
    return vehicles
  }

  async findVehicleById(id) {
    const vehicle = await dbContext.Vehicle.findById(id)
    if (!vehicle) {
      throw new BadRequest('Invalid Vehicle ID')
    }
    return vehicle
  }
}

export const vehiclesService = new VehiclesService()
