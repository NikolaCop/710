function log(type, content) {
  if (process.env.NODE_ENV === 'dev') {
    // eslint-disable-next-line no-console
    console[type](`[${type}] :: ${new Date().toLocaleTimeString()} :: `, ...content)
  } else {
    switch (type) {
      case 'log':
      case 'assert':
        return
    }
    // TODO SEND LOGS TO EXTERNAL SERVICE
    // eslint-disable-next-line no-console
    console[type](`[${type}] :: ${new Date().toLocaleTimeString()} :: `, ...content)
  }
}

export const logger = {
  log() {
    log('log', arguments)
  },
  error() {
    log('error', arguments)
  },
  warn() {
    log('warn', arguments)
  },
  assert() {
    log('assert', arguments)
  },
  trace() {
    log('trace', arguments)
  }
}
