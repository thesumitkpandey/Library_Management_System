import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      unique: [true, "This email is already taken"],
      required: [true, "Email is required"],
      lowercase: true,
      match: [/.+\@.+\..+/, "Email is not in valid format"],
      max: [50, "Email length is too large"],
    },
    phone: {
      type: Number,
      unique: [true, "This phone number is already taken"],
      required: [true, "Phone number is required"],
      min: [1000000000, "Invalid phone number"],
      max: [9999999999, "Invalid phone number"],
    },
    transactions: {
      type: mongoose.Types.ObjectId,
      ref: "TRANSACTIONS",
    },
  },
  {
    timestamps: true,
  }
);
const USERS = mongoose.model("USERS", userSchema);
export default USERS;
