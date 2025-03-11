import userSchema from "../modules/users.module.js"


let getUsers = async (req, res, next) => {
    let blogs = await userSchema.find()
    res.send(blogs)
}
let getUserById = (req, res, next) => {

}
let postUser = (req, res, next) => {

}
let updateUser = (req, res, next) => {

}
let deleteUser = (req, res, next) => {

}

export default {
    getUsers,
    getUserById,
    postUser,
    updateUser,
    deleteUser
}