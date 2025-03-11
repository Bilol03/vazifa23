import blogSchema from '../modules/blog.module.js'

let  getPosts = async(req, res) => {
    try {
        let blogs = await blogSchema.find()
        res.send(blogs)
    } catch (error) {
        next(error)
    }
}
let  getPostById = (req, res) => {

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