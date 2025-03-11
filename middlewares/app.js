import express from 'express'

let app = express()

app.use(express.json())
app.use('/uploads', express.static('./uploads'));
app.use(express.urlencoded({ extended: true }));


import userRoute from '../routes/users.routes.js'
import blogRoute from '../routes/blog.routes.js'

app.use(userRoute)
app.use(blogRoute)

export { app }