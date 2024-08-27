const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
//Load schema & resolvers

const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

const mongoDataMethods = require("./data/db");

//Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://lehuucuongvnua:Cuong123@learn-grapql.zrp4f.mongodb.net/GraphQL?retryWrites=true&w=majority&appName=Learn-grapQL"
    );

    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ mongoDataMethods }),
});

const app = express();

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
  });
};
startServer();
