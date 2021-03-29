import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { vehiclesService } from '../services/VehiclesService'
import { maintenanceService } from '../services/MaintenanceService'

export class VehiclesController extends BaseController {
  constructor() {
    super('api/vehicles')
    this.router
      .get('/:id/maintenance', this.getAllMaintenanceByVehicleId)
    // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAllVehicles)
      .get('/:id', this.getVehicleById)
      .post('', this.createVehicle)
      .put('/:id', this.editVehicle)
      .delete('/:id', this.deleteVehicle)
  }

  async getAllMaintenanceByVehicleId(req, res, next) {
    try {
      res.send(await maintenanceService.find({ vehicleID: req.params.id }))
    } catch (error) {
      next(error)
    }
  }

  async editVehicle(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      delete req.body.archived
      res.send(await vehiclesService.editVehicle(req.params.id, req.userInfo.id, req.body))
    } catch (error) {
      next(error)
    }
  }

  async deleteVehicle(req, res, next) {
    try {
      if (req.body) {
        req.body.archived = true
        res.send(await vehiclesService.deleteVehicleById(req.params.id, req.body))
      }
    } catch (error) {
      next(error)
    }
  }

  async getVehicleById(req, res, next) {
    try {
      return res.send(await vehiclesService.findVehicleById(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async getAllVehicles(req, res, next) {
    try {
      return res.send(await vehiclesService.find({ creatorId: req.userInfo.id }))
    } catch (error) {
      next(error)
    }
  }

  async createVehicle(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorId = req.userInfo.id
      return res.send(await vehiclesService.createVehicle(req.body))
    } catch (error) {
      next(error)
    }
  }
}
