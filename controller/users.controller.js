import userSchema from "../modules/users.module.js"


let getUsers = async (req, res, next) => {
    try {
        let blogs = await userSchema.find()
        res.send(blogs)
    } catch (error) {
        next(err)
    }
}

let getUserById = async(req, res, next) => {
    try {
        let data = await userSchema.findById(req.params.id).exec()
        if (!data) return res.status(404).json({ message: "User not found" })
        res.status(200).json({message: "Success", data})  
    } catch (error) {
        next(err)
    }
}

let postUser = async (req, res, next) => {
    try {
        let body = req.body
        let blog = await userSchema.create(body)
        res.status(201).json({message: "Succes", data: blog})
    } catch (error) {
        next(error)
    }
}
let updateUser = async(req, res, next) => {
    try {
        let id = req.params.id
        await userSchema.findByIdAndUpdate(id, req.body)
        res.status(201).json({ message: "Success", data: await userSchema.findById(id).exec()})
    } catch (error) {
        next(error)
    }
}
let deleteUser = async(req, res, next) => {
    try {
        let id = req.params.id
        let data = await userSchema.findByIdAndDelete(id)
        
        res.status(200).send( { message: "OK", data: data} )
    } catch (error) {
        next(err)
    }
}

export default {
    getUsers,
    getUserById,
    postUser,
    updateUser,
    deleteUser
}