export class SocketHandler {
  /**
   * @param {SocketIO.Server} io
   * @param {SocketIO.Socket} socket
   * @param {{id: string, email: string}} user
   * @param {{id: string, email: string}} profile
   */
  constructor(io, socket, user, profile) {
    this.io = io
    this.socket = socket
    this.user = user
    this.profile = profile
  }

  on(event, fn) {
    this.socket.on(event, fn.bind(this))
    return this
  }
}
