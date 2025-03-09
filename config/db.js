import mongoose from "mongoose";

let connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB)
        console.log("Datbase Connected!")
    }catch(err) {
        console.log("MongoDB connection error", err.message)
    }
}

export { connectDB }
