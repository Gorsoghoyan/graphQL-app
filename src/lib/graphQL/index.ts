import { 
  ApolloClient, 
  ApolloLink, 
  HttpLink, 
  InMemoryCache 
} from "@apollo/client";

const rickAndMortyLink = new HttpLink({
  uri: process.env.REACT_APP_RICKANDMORTY_URI
});

const graphqlzeroLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQLZERO_URI
}); 

export const apolloClient = new ApolloClient({
  link: ApolloLink.split(
    operation => operation.getContext().clientName === "rickAndMorty",
    rickAndMortyLink,
    graphqlzeroLink
  ),
  cache: new InMemoryCache()
});