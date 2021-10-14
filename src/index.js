import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client'
import App from './App';
import store from './Redux/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache()
});

ReactDOM.render(
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App/>
      </ApolloProvider>
    </Provider>,
  document.getElementById('root')
);

