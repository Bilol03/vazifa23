import { Router } from "express";

import userController from "../controller/users.controller.js"
let route = Router()

route
    .get('/users', userController.getUsers)
    .get('/users/:id', userController.getUserById)
    .post('/users', userController.postUser)
    .put('/users', userController.updateUser)
    .delete('/users', userController.deleteUser)

export default route