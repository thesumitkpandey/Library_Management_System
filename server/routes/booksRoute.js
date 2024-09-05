import express from "express";
import { getBooks } from "../controllers/booksController.js";
const router = express.Router();

router.route("/").get(getBooks);
export default router;
