import blogSchema from '../modules/blog.module.js'

let  getPosts = async(req, res) => {
    try {
        let blogs = await blogSchema.find()
        res.send(blogs)
    } catch (error) {
        next(error)
    }
}
let  getPostById = async (req, res) => {
    try {
        let data = await blogSchema.findById(req.params.id).exec()
        if (!data) return res.status(404).json({ message: "User not found" })
        res.status(200).json({message: "Success", data})  
    } catch (error) {
        next(err)
    }
}
let  postPost = (req, res) => {
    const body = req.body.body
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