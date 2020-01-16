const express = require('express');
const { ApolloServer, AuthenticationError} = require('apollo-server-express');
require('./config/database');
const cors = require('cors')
const typeDefs = require('./modules/prisoners/prisonerSchema');
const resolvers = require('./modules/prisoners/prisonerResolver');
// const Auth = require('../server/Auth/isAuth')
// const Auth = require('../server/Auth/')
const app = express();
const jwt = require('jsonwebtoken');
const AdminLogin = require('./modules/prisoners/models/adminLogin')

app.use(cors())

const getUser = async (req) => {
  const token = req.headers['token'];

  if (token) {
    try {
      return await jwt.verify(token, 'mysecrettoken');
    } catch (e) {
      throw new AuthenticationError('Your session expired. Sign in again.');
    }
  }
};

// app.use(Auth)


// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: ({req, res}) => {
//     req,
//     res
//   }
// })

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    if (req) {
      // const me = await getUser(req);

      return {
        
        models: {
          AdminLogin
        },
      };
    }
  },
});

server.applyMiddleware({ app })

const port = 4000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}${server.graphqlPath}`)
})


