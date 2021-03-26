import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class RecordsService {
  async find(query) {
    return await dbContext.Record.find(query).populate('creator')
  }

  async findById(id) {
    return await dbContext.Record.findById(id).populate('creator')
  }

  async createRecord(body) {
    return await dbContext.Record.create(body)
  }

  async editRecord(id, body) {
    const record = await dbContext.Record.findByIdAndUpdate(id, body)
    if (!record) {
      throw new BadRequest('INVALID ID')
    }
    if (record.archived === true) {
      throw new BadRequest('This is archived you cannot edit this')
    }
    return record
  }

  async deleteRecord(id, body) {
    if (body) {
      body.archived = true
      return await dbContext.Record.findByIdAndUpdate(id, body)
    }
  }
}
export const recordsService = new RecordsService()
