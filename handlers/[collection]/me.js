const meOperation = require('payload/dist/auth/operations/me').default
const withPayload = require('../../middleware/withPayload')
const authenticate = require('../../middleware/authenticate')
const initializePassport = require('../../middleware/initializePassport')

async function handler(req, res) {
  const collection = req.payload.collections[req.query.collection]
  const result = await meOperation({ req, collection })
  return res.status(200).json(result)
}

module.exports = withPayload(
  initializePassport(
    authenticate(
      handler
    )
  )
)