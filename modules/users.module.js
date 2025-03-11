import { mongoose } from "mongoose";

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        unique: true,
        required: true
    }
})
let users = mongoose.model("users", userSchema)

export default users