import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router/Router';
import {onError} from 'apollo-link-error';
import Notifications, {notify} from 'react-notify-toast';
import { createHttpLink } from "apollo-link-http";
import { ApolloLink } from 'apollo-link'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from "apollo-cache-inmemory";
import * as serviceWorker from './serviceWorker';

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => notify.show(message, 'error'))
})


// const httpLink = createHttpLink({ uri: 'http://localhost:4000/graphql' });
// const link = ApolloLink.from([
//   errorLink,
//   httpLink
// ]);
// const client = new ApolloClient({
//   link,
//   cache: new InMemoryCache()
// })


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client = {client}>
    <Router/>
  </ApolloProvider>
, document.getElementById('root'))

serviceWorker.unregister();
