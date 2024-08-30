import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
   try {
      const connectionInstances = await mongoose.connect(
         `${process.env.MONGODB_URI}/${DB_NAME}`
      );
      console.log(
         `\nMongoDB connected !! DB HOST: ${connectionInstances.connection.host}`
      );
   } catch (err) {
      console.log("MongoDB connection FAILED", err);
      process.exit(1);
   }
};

export default connectDB;
