import { AppState } from '../AppState'
import { logger } from './utils/Logger'
import { api } from './AxiosService'

class MaintenanceService {
  async getAllMaintenance() {
    try {
      const res = await api.get('api/maintenance')
      AppState.maintenance = res.data
    } catch (error) {
      logger.log(error)
    }
  }

  async getMaintenance(id) {
    try {
      const res = await api.get('api/vehicles/' + id + '/maintenance')
      AppState.maintenance = res.data
    } catch (error) {
      logger.log(error)
    }
  }

  async createMaintenance(maintenanceData) {
    try {
      const res = await api.post('api/maintenance', maintenanceData)
      AppState.maintenance.push(res.data)
    } catch (error) {
      logger.log(error)
    }
  }

  async editMaintenance(editedMaintenanceData, id) {
    try {
      const res = await api.put('api/maintenance/' + id, editedMaintenanceData)
      AppState.activeMaintenance = res.data
      this.getMaintenance(id)
    } catch (error) {
      logger.log(error)
    }
  }

  async archiveMaintenance(id) {
    await api.delete(`api/maintenance/${id}`)
  }
}
export const maintenanceService = new MaintenanceService()
