import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { maintenanceService } from '../services/MaintenanceService'
import { recordsService } from '../services/RecordsService'
export class MaintenanceController extends BaseController {
  constructor() {
    super('api/maintenance')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getMaintenanceById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id/records', this.getAllRecordsByMaintenanceId)
      .post('', this.createMaintenance)
      .put('/:id', this.editMaintenance)
      .delete('/:id', this.deleteMaintenance)
  }

  async getAll(req, res, next) {
    try {
      return res.send(await maintenanceService.find(req.query))
    } catch (error) {
      next(error)
    }
  }

  async getMaintenanceById(req, res, next) {
    try {
      return res.send(await maintenanceService.findById(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async createMaintenance(req, res, next) {
    try {
      return res.send(await maintenanceService.createMaintenance(req.body))
    } catch (error) {
      next(error)
    }
  }

  async editMaintenance(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      delete req.body.archived
      delete req.body.vehicleID
      return res.send(await maintenanceService.editMaintenance(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }

  async deleteMaintenance(req, res, next) {
    try {
      return res.send(await maintenanceService.deleteMaintenance(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }

  async getAllRecordsByMaintenanceId(req, res, next) {
    try {
      res.send(await recordsService.find({ maintenanceID: req.params.id }))
    } catch (error) {
      next(error)
    }
  }
}
