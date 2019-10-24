const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Prisoner {
    id: ID!
    name: String
    nationality: String
    State: String
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

  enum Gender {
    MALE
    FEMALE
}

  input prisonerInput {
    id: ID!
    name: String
    gender: Gender
    nationality: String
    State: String
    DateOfEntry: String
    timeOfEntry: String
    LGA: String
    story: String
    image: String
  }

 
`;

module.exports = typeDefs;