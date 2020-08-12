const { makeExecutableSchema } = require('graphql-tools')
const { graphqlHTTP } = require('express-graphql');
const resolvers = require('./resolvers');
const { readFileSync } = require('fs');
const path = require('path');
const isDev = process.env.NODE_ENV !== 'production'

const graphql = function (app) {
  const typeDefs = readFileSync(
    path.join(__dirname, './', 'schema.graphql'),
    'utf-8'
  )
  const schema = makeExecutableSchema({ typeDefs, resolvers })

  app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: isDev
  }))

};

module.exports = graphql;
