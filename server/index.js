import express from "express";
import "dotenv/config";
const app = express();
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
//ROOT ROUTES
app.use("/api/v1/books", booksRoute);
//CONNECTION AREA
async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connection successful : ${conn.connection.host}`);
  } catch (err) {
    console.log(`MongoDB connection failed : ${err.message}`);
    process.exit(1);
  }
}
connectDB();
app.get("*", (req, res) => {
  res
    .status(404)
    .json({ success: false, message: "This route does not exist" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at ${process.env.PORT}`);
});
