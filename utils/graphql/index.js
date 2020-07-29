const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const resolvers = require('./resolvers');
const { readFileSync } = require('fs');
const path = require('path');


const graphql = function (app) {
    
const schema = buildSchema(
    readFileSync(
      path.join(__dirname, './', 'schema.graphql'),
      'utf-8'
    )
  )
  
  app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
  }))
  
  };
  

module.exports = graphql;