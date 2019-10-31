const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Prisoner {
    id: ID!
    name: String
    gender: String
    nationality: String
    state: String
    DateOfEntry: String
    timeOfEntry: String
    LGA: String
    story: String
    image: String
  }

  type Query{
    prisoners: [Prisoner]
    prisoner (id: ID): Prisoner
  }

  type Mutation{
    addPrisoner(data: prisonerInput): String
    deletePrisonerRecord(id: ID): String
  }

#   enum Gender {
#     MALE
#     FEMALE
# }

  input prisonerInput {
    name: String
    gender: String
    nationality: String
    state: String
    DateOfEntry: String
    timeOfEntry: String
    LGA: String
    story: String
    image: String
  }

 
`;

module.exports = typeDefs;