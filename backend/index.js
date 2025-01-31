import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv"; 
import path from "path";

//files
import connectDB from "./config/db.js"; //Need extension if type is module in json file 
import userRoutes from "./routes/userRoutes.js"
import locationRoute from "./routes/locationRoutes.js"
import uploadRouter from "./routes/uploadRoute.js"

//configuations 
dotenv.config();
connectDB();

const app= express()


// middlewares

app.use(express. json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());


const PORT = process.env.PORT || 3000;

// routes(Dont forget first /)
app.use("/api/v1/users",userRoutes);  
app.use("/api/v1/location",locationRoute);   
app.use("/api/v1/upload",uploadRouter);   

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname + "/uploads")));

app.listen(PORT, () => console. log(`Server is running on port ${PORT}👍`));

console.log("Yeah....");

