const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Prisoner {
    id: ID!
    name: String
    email: String
    gender: String
    nationality: String
    state: String
    dateImprisoned: String
    dateReleased: String
    timeImprisoned: String
    timeReleased: String
    lga: String
    story: String
    prisonunit: String
    image: String
  }

  type Person{
    name: String
    email: String
    phoneNum: String
  }

  type Query{
    prisoners: [Prisoner]
    prisoner (id: ID): Prisoner
  }

  type Mutation{
    addPrisoner(data: prisonerInput): String
    deletePrisonerRecord(id: ID): String
    addStaff(data: staffInput): String;
  }

#   enum Gender {
#     MALE
#     FEMALE
# }

  input prisonerInput {
    name: String
    email: String
    gender: String
    nationality: String
    state: String
    dateImprisoned: String
    dateReleased: String
    timeImprisoned: String
    timeReleased: String
    lga: String
    story: String
    prisonunit: String
    image: String
  }

  input staffInput {
    name: String
    email: String
    gender: String
    dateOfBirth: String
    nationality: String
    lga: String
    position: String
    image: String
  }

 
`;

module.exports = typeDefs;


//Scalar Types -String, Number, Float
//Object types

//Root Query
//Query per field


//type Query{

//}


