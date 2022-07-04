import {ApolloServer} from "apollo-server";
import resolvers from './resolvers.js';
import typeDefs from './myTypeDefs.js';
import myAPI from './myAPI.js';

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    csrfPrevention: true,
    cache: "bounded",
    dataSources: () => myAPI
});

server.listen().then(({url}) => {
    console.log('Start ' + url);
});

