const Book = require("./../models/Book");
const Author = require("./../models/Author");

const mongoDataMethods = {
  getAllBooks: async (condition = null) => {
    return condition == null ? await Book.find() : await Book.find(condition);
  },
  getAllAuthors: async () => await Author.find(),
  createAuthor: async (args) => {
    const newAuthor = new Author(args);
    return await newAuthor.save();
  },
  createBook: async (args) => {
    const newBook = new Book(args);
    return await newBook.save();
  },
  getBookById: async (id) => {
    return await Book.findById(id);
  },
  getAuthorById: async (id) => {
    return await Author.findById(id);
  },
};

module.exports = mongoDataMethods;
