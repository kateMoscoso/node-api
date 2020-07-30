const { makeExecutableSchema } = require('graphql-tools')
const { graphqlHTTP } = require('express-graphql');
const resolvers = require('./resolvers');
const { readFileSync } = require('fs');
const path = require('path');


const graphql = function (app) {
  const typeDefs = readFileSync(
    path.join(__dirname, './', 'schema.graphql'),
    'utf-8'
  )
  const schema = makeExecutableSchema({ typeDefs, resolvers })
  
  app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
  }))
  
  };
  

module.exports = graphql;