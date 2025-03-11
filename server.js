import { app } from "./middlewares/app.js";
import { config } from "dotenv";
import { connectDB } from "./config/db.js";
config()

connectDB()

app.listen(process.env.PORT, () => console.log("This server is running on http://localhost:" + process.env.PORT))
