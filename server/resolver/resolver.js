const { books, authors } = require("../data/static");
const Author = require("../models/Author");
const Book = require("../models/Book");

const resolvers = {
  Query: {
    books: async (parent, args, context) => {
      return await context.mongoDataMethods.getAllBooks();
    },
    book: (parent, args, context) => books.find((book) => book.id == args.id),
    authors: (parent, args, context) => {
      return context.mongoDataMethods.getAllAuthors();
    },
    author: (parent, args, context) =>
      authors.find((author) => author.id == args.id),
  },
  Book: {
    author: (parent, args, context) => {
      return authors.find((author) => author.id == parent.authorId);
    },
  },
  Author: {
    books: (parent, args, context) => {
      return books.filter((book) => book.authorId == parent.id);
    },
  },
  Mutation: {
    createAuthor: async (parent, args, context) => {
      const newAuthor = new Author(args);
      return await newAuthor.save();
    },
    createBook: async (parent, args, context) => {
      const newBook = new Book(args);
      return await newBook.save();
    },
  },
};

module.exports = resolvers;
