import {ApolloServer} from "apollo-server";
import {RequestOptions } from 'apollo-datasource-rest';

import resolvers from './resolvers.js';
import typeDefs from './myTypeDefs.js';
import myAPI from './myAPI.js';

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    csrfPrevention: true,
    cache: "bounded",
    context: ({req}) => {
        let token = req.headers.authorization || '';
        token = 'Bearer ' + token;
        return {token};
    },
    dataSources: () => myAPI
});

server.listen().then(({url}) => {
    console.log('Start ' + url);
});

