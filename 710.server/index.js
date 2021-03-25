require('dotenv').config()
// @ts-ignore
// eslint-disable-next-line no-global-assign
require = require('esm')(module)
module.exports = require('./server/main')
