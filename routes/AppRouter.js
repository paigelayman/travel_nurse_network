const Router = require('express').Router()
// const UserRouter = require('./UserRouter')
// const ReviewRouter = require('./ReviewRouter')
const CityRouter = require('./CityRouter')
// const HospitalRouter = require('./HospitalRouter')
const ExperienceRouter = require('./ExperienceRouter')

// Router.use('/users', UserRouter)
// Router.use('/reviews', ReviewRouter)
Router.use('/cities', CityRouter)
// Router.use('/hospitals', HospitalRouter)
Router.use('/experiences', ExperienceRouter)
// Router.use('/auth', AuthRouter)

module.exports = Router
