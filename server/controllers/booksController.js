import BOOKS from "../models/booksModel.js";
const getBooks = async (req, res, ne) => {
  const filters = req.query;
  const allBooks = await BOOKS.find(filters);
  res.status(200).json({
    success: true,
    books: allBooks,
  });
};

export { getBooks };
