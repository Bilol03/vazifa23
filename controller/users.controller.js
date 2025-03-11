import userSchema from "../modules/users.module.js"


let getUsers = async (req, res, next) => {
    let blogs = await userSchema.find()
    res.send(blogs)
}
let getUserById = async(req, res, next) => {
    let data = await userSchema.findById(req.params.id).exec()
    if (!data) return res.status(404).json({ message: "User not found" })
    res.status(200).json({message: "Success", data})  
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