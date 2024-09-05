import mongoose, { mongo, MongooseError } from "mongoose";
const transactionsSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "USERS",
    },
    book: {
      type: mongoose.Types.ObjectId,
      ref: "BOOKS",
    },
    issueDate: {
      type: Date,
      required: [true, "Issuance date is required"],
    },
    returnDate: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);
const TRANSACTIONS = mongoose.model("TRANSACTIONS", transactionsSchema);
export default TRANSACTIONS;
