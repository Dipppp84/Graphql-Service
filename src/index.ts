import {ApolloServer} from "apollo-server";
import 'dotenv/config';
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

const port = process.env.PORT_QL || 4000;
server.listen({port: port}).then(({url}) => {
    console.log('Start ' + url);
});

