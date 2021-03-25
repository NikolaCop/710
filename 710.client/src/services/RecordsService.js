import { AppState } from '../AppState'
import { logger } from './utils/Logger'
import { api } from './AxiosService'

class RecordsService {
  async getAllRecords() {
    try {
      const res = await api.get('api/records')
      AppState.records = res.data
    } catch (error) {
      logger.log(error)
    }
  }

  async getRecords(id) {
    try {
      const res = await api.get('api/vehicles/' + id + '/records')
      AppState.records = res.data
    } catch (error) {
      logger.log(error)
    }
  }

  async createRecords(recordsData) {
    try {
      const res = await api.post('api/records', recordsData)
      AppState.records.push(res.data)
      return res.data.id
    } catch (error) {
      logger.log(error)
    }
  }

  async editRecords(editedRecordsData, id) {
    try {
      const res = await api.put('api/records/' + id, editedRecordsData)
      AppState.activeRecords = res.data
      this.getRecords(id)
    } catch (error) {
      logger.log(error)
    }
  }

  async archiveRecords(id) {
    await api.delete(`api/records/${id}`)
  }
}
export const recordsService = new RecordsService()
