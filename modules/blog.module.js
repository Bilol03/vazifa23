import { mongoose } from "mongoose";

let blogSchema = new mongoose.Schema({
    title: {
        type: String
    },

    content: {
        type: String
    },

    author: {
        type: mongoose.Types.ObjectId, ref: "users"
    },

    createdAt: {
        type: String,
        required: false,
        default: Date.now 
    },

    image: {
        type: String
    },
})

let blogs = mongoose.model("blogs", blogSchema)
export default blogs
