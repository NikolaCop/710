import { AppState } from '../AppState'
import { logger } from './utils/Logger'
import { api } from './AxiosService'

class VehicleService {
  async getAllVehicles() {
    try {
      const res = await api.get('api/vehicles')
      AppState.vehicles = res.data
    } catch (error) {
      logger.log(error)
    }
  }

  async getUserVehicles() {
    const res = await api.get('account')
    logger.log(res.data)
  }

  async getVehicle(id) {
    try {
      const res = await api.get('api/vehicles/' + id)
      AppState.activeVehicle = res.data
    } catch (error) {
      logger.log(error)
    }
  }

  async createVehicle(vehicleData) {
    try {
      const res = await api.post('api/vehicles', vehicleData)
      AppState.vehicle.push(res.data)
      return res.data.id
    } catch (error) {
      logger.log(error)
    }
  }

  async editVehicle(editedVehicleData, id) {
    try {
      const res = await api.put('api/vehicles/' + id, editedVehicleData)
      AppState.activeVehicle = res.data
      this.getVehicle(id)
    } catch (error) {
      logger.log(error)
    }
  }

  async archiveVehicle(id) {
    await api.delete(`api/vehicles/${id}`)
  }

  async addImage(imageData, vehicleId) {
    logger.log(imageData, vehicleId)
  }
}
export const vehicleService = new VehicleService()
