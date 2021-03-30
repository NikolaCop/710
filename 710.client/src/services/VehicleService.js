import { AppState } from '../AppState'
import { logger } from './utils/Logger'
import { api } from './AxiosService'

class VehicleService {
  async getAllVehicles() {
    try {
      const res = await api.get('api/vehicles')
      AppState.vehicles = res.data.filter(a => a.archived === false)
    } catch (error) {
      logger.log(error)
    }
  }

  async getAllArchivedVehicles() {
    try {
      const res = await api.get('api/vehicles')
      AppState.archivedVehicles = res.data.filter(a => a.archived === true)
    } catch (error) {
      logger.log(error)
    }
  }

  async getAllMaintenanceByVehicleId(id) {
    try {
      const res = await api.get(`api/vehicles/${id}/maintenance`)
      AppState.maintenance = res.data
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

  async addImage(editedVehicle, vehicleId) {
    try {
      const res = await api.put('api/vehicles/' + vehicleId, editedVehicle)
      AppState.activeVehicle = res.data
      logger.log(AppState.activeVehicle)
    } catch (error) {
      logger.log(error)
    }
  }
}
export const vehicleService = new VehicleService()
