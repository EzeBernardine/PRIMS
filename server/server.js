const express = require('express');
const { ApolloServer } = require('apollo-server-express');
require('./config/database');
const app = express();

const resolvers;
const typeDefs;

const server = new ApolloServer({
  resolvers,
  typeDefs
})

server.applyMiddleware({ app })

const port = 4000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}${server.graphqlPath}`)
})


