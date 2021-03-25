import { logger } from './Logger'
import io from 'socket.io-client'
import { baseURL } from '../services/AxiosService'
export class SocketHandler {
  /**
   * @param {String} url
   */
  constructor(url) {
    this.socket = io(url || baseURL)
    this.authenticated = false
    this.queue = []
    this
      .on('connected', this.onConnected)
      .on('authenticated', this.onAuthenticated)
      .on('error', this.onError)
  }

  on(event, fn) {
    this.socket.on(event, fn.bind(this))
    return this
  }

  onConnected(connection) {
    logger.log('[SOCKET_CONNECTION]', connection)
  }

  onAuthenticated(auth) {
    logger.log('[SOCKET_AUTHENTICATED]', auth)
    this.authenticated = true
    const playback = [...this.queue]
    this.queue = []
    playback.forEach(e => {
      this.emit(e.action, e.payload)
    })
  }

  onError(error) {
    logger.error('[SOCKET_ERROR]', error)
  }

  emit(action, payload = undefined) {
    if (!this.authenticated) {
      logger.log('[ENQUEING_ACTION]', { action, payload })
      return this.queue.push({ action, payload })
    }
    this.socket.emit(action, payload)
  }
}
