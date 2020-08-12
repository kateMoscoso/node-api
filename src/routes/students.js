const { request } = require('graphql-request');
const endpoint = 'http://localhost:3000/api'
const search = async () => {
  const query = `
    query generalSearch($keyword: String!){
    searchItems(keyword: "1"){
      __typename
      ... on Course {
        title
        description
      }
      ... on Monitor {
        name
        phone
      }
      ... on Student {
        name
        email
      }
    }
  }`
  const data = {
    keyword: ''
  }
  const result = await request(endpoint, query, data)
  return result
}

module.exports = {
  search
}
