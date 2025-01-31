import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Successfully connected to the mongoadb💕`)
    } catch (error) {

        console.error(`Error:${error.message}`)
        process.exit(1)
    }
}

export default connectDB


// aBgiDz04J4Ygrwytrhshs12


// mongodb+srv://kavindudasanayaka23Srilnaka:<db_password>@cluster0.xjs5w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0