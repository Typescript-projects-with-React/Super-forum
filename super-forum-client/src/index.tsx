import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    credentials: "include",
    cache: new InMemoryCache()
});

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
        <ApolloProvider client={client}>
            <ErrorBoundary>{[<App key="App" />]}</
                ErrorBoundary>
        </ApolloProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
