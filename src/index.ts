import {ApolloServer} from "apollo-server";
import resolvers from "./resolver.js";
import typeDefs from "./schema.js";
import context from "./consext.js"

const server = new ApolloServer({typeDefs, resolvers, context});

server.listen().then(({ url }) => {
    console.log('Start ' + url);
});
/*
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({
        token: req.headers.authorization,
    }),
    dataSources: () => ({
        authAPI: new AuthRestAPIs(),
        hackioAPI: new HackIORestAPIs(),
        genextAPI: new GenNextAPIs(),
    }),
});
server.applyMiddleware({ app });
if (!module.parent) {
    // global.connection = connection;
    app.listen({port: process.env.PORT || 3000}, () =>
        // eslint-disable-next-line no-console
        logger.info(`🚀 🚀 🚀 🚀  Server ready at http://localhost:3000${server.graphqlPath} 🚀 🚀 🚀 `),
    );
}*/
