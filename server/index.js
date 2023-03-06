import mongoose from "mongoose";
import dotenv from "dotenv";
import server from "./serverConfig.js";

import User from "./models/User.js";
import Recipe from "./models/Recipe.js";

import getUser from "./helpers/getUser.js";
import needToRefreshToken from "./helpers/needToRefreshToken.js";
import createJWT from "./helpers/createJWT.js";

import { startStandaloneServer } from "@apollo/server/standalone";

dotenv.config();

const DB_URI = process.env.DB_URI;
const SERVER_PORT = process.env.SERVER_PORT;
const SERVER_HOST = process.env.SERVER_HOST;

main().catch((err) => {
  console.log("There was an error starting the main function", err);
});

async function main() {
  // connect to database from config variables
  await mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log(`Connected to database at ${DB_URI}`);

  const { url } = await startStandaloneServer(server, {
    listen: { host: SERVER_HOST, port: SERVER_PORT },
    context: async ({ req, res }) => {
      // expose headers for client
      res.set("Access-Control-Expose-Headers", "*");

      // get token from header or set empty string
      const token = req.headers.authorization || "";

      // get current user, returns expired if expired or null if error
      const currentUser = await getUser(token);

      // check if token needs to be refreshed
      const needToRefresh = await needToRefreshToken(token);

      // // set refresh token on header
      if (needToRefresh) {
        res.setHeader("Access-Control-Refresh-Token", createJWT(currentUser));
      }

      // if currentUser is expired, set authorization header to expired
      if (currentUser === "expired") {
        res.setHeader("authorization", "expired");
      }

      res.setHeader("Access-Control-Allow-Origin", "*");

      // return context to resolvers
      return {
        User,
        Recipe,
        currentUser,
      };
    },
  });

  console.log(`🚀  Server ready at ${url}`);
}
