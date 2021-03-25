import mongoose from 'mongoose'
import { logger } from '../utils/Logger'

mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)
mongoose.connection.on('error', err => {
  logger.error('[DATABASE ERROR]:', err)
})
mongoose.connection.on('connection', () => {
  logger.log('DbConnection Successful')
})

export default class DbConnection {
  static async connect(connectionstring = process.env.CONNECTION_STRING || '') {
    const status = 0
    try {
      const status = await mongoose.connect(connectionstring)
      logger.log('[CONNECTION TO DB SUCCESSFUL]')
      return status
    } catch (e) {
      logger.error(
        '[MONGOOSE CONNECTION ERROR]:',
        'Invalid connection string'
      )
      return status
    }
  }
}
