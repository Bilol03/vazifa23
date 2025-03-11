import blogSchema from '../modules/blog.module.js'

let  getPosts = async(req, res, next) => {
    try {
        let blogs = await blogSchema.find()
        res.send(blogs)
    } catch (error) {
        next(error)
    }
}
let  getPostById = async (req, res, next) => {
    try {
        let data = await blogSchema.findById(req.params.id).exec()
        if (!data) return res.status(404).json({ message: "User not found" })
        res.status(200).json({message: "Success", data})  
    } catch (error) {
        next(err)
    }
}
let  postPost = async(req, res, next) => {
    try {
        const body = JSON.parse(req.body.body)
        body.image = "/uploads/"+ req.file.filename
        console.log(req.file);
        
        let post = await blogSchema.create(body)
        res.status(201).json({message: "Succes", data: post})
    } catch (error) {
        next(error)
    }
    // blogSchema.create()

}
let  updatePost = (req, res) => {

}
let  deletePost = (req, res) => {

}

export default {
    getPosts,
    getPostById,
    postPost,
    updatePost,
    deletePost,
}