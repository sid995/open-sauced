import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import {ApolloClient, ApolloProvider, createNetworkInterface} from "react-apollo";
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import {userReducer} from "./reducers/userReducer";

import netlifyIdentity from "netlify-identity-widget";
netlifyIdentity.init();

const client = new ApolloClient({
  networkInterface: createNetworkInterface({uri: `${process.env.graphcoolEndpoint}`}),
  dataIdFromObject: (o) => o.id
});

const store = createStore(
  combineReducers({
    user: userReducer,
    apollo: client.reducer(),
  }),
  {}, // initial state
  compose(
    applyMiddleware(
      client.middleware(),
      thunkMiddleware
    ),
    process.env.NODE_ENV !== "production" && window.devToolsExtension
      ? window.devToolsExtension()
      : (f) => f
  )
);

ReactDOM.render((
  <ApolloProvider store={store} client={client}>
    <App />
  </ApolloProvider>
  ),
  document.getElementById("root")
);
