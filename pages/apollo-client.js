import { ApolloClient,InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri:`${process.env.CMS_API_URL}api/content/${process.env.CMS_PROJECT}/graphql`,
    cache: new InMemoryCache(),
});
export default client;