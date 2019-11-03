const express = require('express');
const { ApolloServer } = require('apollo-server-express');
require('./config/database');
const cors = require('cors')
const typeDefs = require('./modules/prisoners/prisonerSchema');
const resolvers = require('./modules/prisoners/prisonerResolver');
const app = express();

app.use(cors())



const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.applyMiddleware({ app })

const port = 4000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}${server.graphqlPath}`)
})


