import mongoose, { mongo } from "mongoose";
const booksSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: [
        "artificial-intelligence",
        "data-science",
        "software-enginnering",
        "cyber-security",
        "computer-networks",
        "cloud-engineering",
        "graphics-designing",
      ],
    },
    rentPerDay: {
      type: Number,
      required: [true, "Rent per day is required"],
    },
    author: {
      type: String,
      required: [true, "Author name is required"],
    },
    isAvailable: {
      type: Boolean,
      required: true,
      default: true,
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
const BOOKS = mongoose.model("BOOKS", booksSchema);
export default BOOKS;
