import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router/Router';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

ReactDOM.render(
  <ApolloProvider client = {client}>
    <Router/>
  </ApolloProvider>
, document.getElementById('root'))

serviceWorker.unregister();
