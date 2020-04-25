const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const PORT = 8080;
const app = express();

import typeDefs from './schema';
import resolvers from './resolvers';
import models from './models';

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.applyMiddleware({
    app
})

models.sequelize.sync({force: true}).then( () => {
    app.listen({port: PORT}, () =>
        console.log(`Server ready at http://localhost:8080${server.graphqlPath}`)
    );
});
