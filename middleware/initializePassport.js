const passport = require('passport')
const jwtStrategy = require('payload/dist/auth/strategies/jwt').default
const AnonymousStrategy = require('passport-anonymous')

module.exports = (handler) => (req, res) => {
  passport.use(new AnonymousStrategy.Strategy())
  passport.use('jwt', jwtStrategy(req.payload))

  passport.initialize()(req, res, () =>
    handler(req, res)
  )
}