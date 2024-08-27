const Book = require("./../models/Book");
const Author = require("./../models/Author");

const mongoDataMethods = {
  getAllBooks: async () => await Book.find(),
  getAllAuthors: async () => await Author.find(),
};

module.exports = mongoDataMethods;
