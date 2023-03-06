import { ApolloServer } from "@apollo/server";

// import models
import User from "./models/User.js";
import Recipe from "./models/Recipe.js";

// import resolvers and typeDefs (GraphQL schema)
import { typeDefs } from "./schema/schema.js";
import { resolvers } from "./schema/resolvers.js";

// setup apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default server;
