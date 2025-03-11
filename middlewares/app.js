import express from 'express'

let app = express()

import userRoute from '../routes/users.routes.js'
app.use(userRoute)

export { app }