/* eslint-disable node/no-path-concat */
import fs from 'fs'
import BaseController from './server/utils/BaseController'
import { logger } from './server/utils/Logger'

export class Paths {
  static get Public() {
    return `${__dirname}/client/`
  }

  static get Server() {
    return `${__dirname}/server`
  }

  static get Controllers() {
    return this.Server + '/controllers'
  }

  static get Handlers() {
    return this.Server + '/handlers'
  }
}

export function RegisterControllers(router) {
  const controllers = fs.readdirSync(Paths.Controllers)
  controllers.forEach(loadController)
  async function loadController(controllerName) {
    try {
      if (!controllerName.endsWith('.js')) return
      const fileHandler = await import(Paths.Controllers + '/' + controllerName)
      let ControllerClass = fileHandler[controllerName.slice(0, -3)]
      if (ControllerClass.default) {
        ControllerClass = ControllerClass.default
      }
      const controller = new ControllerClass()
      if (controller instanceof BaseController) {
        router.use(controller.mount, controller.router)
      }
    } catch (e) {
      logger.error(
        '[CONTROLLER ERROR] unable to load controller, potential duplication, review mount path and controller class name, and see error below',
        controllerName,
        e
      )
    }
  }
}

const HANDLERS = []

export async function RegisterSocketHandlers() {
  const directory = Paths.Handlers
  const handlers = fs.readdirSync(directory)
  handlers.forEach(async(handlerName) => {
    try {
      if (!handlerName.endsWith('.js')) { return }
      const fileHandler = await import(directory + '/' + handlerName)
      let HandlerClass = fileHandler[handlerName.slice(0, -3)]
      if (HandlerClass.default) {
        HandlerClass = HandlerClass.default
      }
      HANDLERS.push(HandlerClass)
    } catch (e) {
      logger.error(
        '[SOCKET_HANDLER_ERROR] unable to attach socket handler, potential duplication, review mount path and controller class name, and see error below',
        handlerName,
        e
      )
    }
  })
}

export async function attachHandlers(io, socket, user, profile) {
  HANDLERS.forEach(Handler => {
    try {
      const handler = new Handler(io, socket, user, profile)
      logger.log('Attached', handler)
    } catch (e) {
      logger.error(
        '[SOCKET_HANDLER_ERROR] unable to attach socket handler, potential duplication, review mount path and controller class name, and see error below',
        e
      )
    }
  })
}
