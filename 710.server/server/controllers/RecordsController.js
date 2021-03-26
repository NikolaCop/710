import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { recordsService } from '../services/RecordsService'

export class RecordsController extends BaseController {
  constructor() {
    super('api/records')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getRecordsById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createRecord)
      .put('/:id', this.editRecord)
      .delete('/:id', this.deleteRecord)
  }

  async deleteRecord(req, res, next) {
    try {
      return res.send(await recordsService.deleteRecord(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }

  async editRecord(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      delete req.body.archived
      return res.send(await recordsService.editRecord(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }

  async createRecord(req, res, next) {
    try {
      return res.send(await recordsService.createRecord(req.body))
    } catch (error) {
      next(error)
    }
  }

  async getRecordsById(req, res, next) {
    try {
      return res.send(await recordsService.findById(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      return res.send(await recordsService.find(req.query))
    } catch (error) {
      next(error)
    }
  }
}
