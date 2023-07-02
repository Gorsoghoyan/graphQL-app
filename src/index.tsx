import ReactDOM from 'react-dom/client';
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from './lib';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
);