import blogController from "../controller/blog.controller.js";
import { Router } from "express";
import multer from "multer";
import path from "path"

let route = Router()
const uploadDir = path.join(process.cwd(), 'uploads');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir); 
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

route
    .get('/posts', blogController.getPosts)
    .get('/posts/:id', blogController.getPostById)
    .post('/posts', upload.single("file"), blogController.postPost)
    .put('/posts/:id', blogController.updatePost)
    .delete('/posts/:id', blogController.deletePost)

export default route
