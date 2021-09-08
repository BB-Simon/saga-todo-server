import mongoose from "mongoose";
// Connect with Local DB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/saga-todo");
    console.log(`MongoDB connected on: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Connection failed with MongoDB, error: ${error}`);
  }
};

export default connectDB;
