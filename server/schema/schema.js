const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    id: ID
    name: String
    genre: String
    author: Author
  }

  type Author {
    id: ID!
    name: String
    age: Int
    books: [Book]
  }
  # ROOT TYPE

  ## get
  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
    author(id: ID!): Author
  }

  ## set
  type Mutation {
    createAuthor(id: ID!, name: String, age: Int): Author
    createBook(id: ID!, name: String, author: String): Book
  }
`;
module.exports = typeDefs;
