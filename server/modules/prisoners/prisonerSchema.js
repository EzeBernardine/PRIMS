const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    prisoners: [Prisoner]
    prisoner(id: ID): Prisoner
    getRehabCenters: [Rehab]
    getPrisons: [Prison]
    getAllStaff: [Staff]
    acceptedRehab: [Rehab]
  }

  type Mutation {
    addPrisoner(data: prisonerInput): String
    deletePrisonerRecord(id: ID): String
    addStaff(data: staffInput): String
    addPrison(data: prisonInput): String
    signAdmin(data: adminInput): LoginResponse
    login(data: UserLoginInput!): Token
    createRehab(data: rehabInput): String
    acceptRehab(id: ID!): String
  }

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

  type Rehab {
    _id: String
    rehabCenter: String
    rehabManager: String
    rehabManagerPhone: String
    mdImage: String
    rehabState: String
    rehabLGA: String
    tag: String
    rehabDetail: String
    rehabImage: String
    isAccepted: Boolean
  }

  type Token {
    token: String
  }

  type Person {
    name: String
    email: String
    phoneNum: String
  }

  type Prison {
    prisonName: String
    prisonManager: String
    prisonManagerPhone: String
    mdImage: String
    prisonState: String
    prisonLGA: String
    prisonDetail: String
    prisonImage: String
  }

  type LoginResponse {
    email: String
    id: String
  }

  type Staff{
    name: String
    email: String
    gender: String
    date: String
    nationality: String
    lga: String
    position: String
    image: String
  }

  #   enum Gender {
  #     MALE
  #     FEMALE
  # }

  input UserLoginInput {
    email: String!
    password: String!
  }

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
    date: String
    nationality: String
    lga: String
    position: String
    image: String
  }

  input prisonInput {
    prisonName: String
    prisonManager: String
    prisonManagerPhone: String
    mdImage: String
    prisonState: String
    prisonLGA: String
    prisonDetail: String
    prisonImage: String
  }

  # enum accountType {
  #   administrator
  #   staff
  # }

  input adminInput {
    name: String
    email: String
    phone: String
    password: String
    # accountType: accountType
  }

  input rehabInput {
    rehabCenter: String
    rehabManager: String
    rehabManagerPhone: String
    mdImage: String
    rehabState: String
    rehabLGA: String
    tag: String
    rehabDetail: String
    rehabImage: String
    isAccepted: Boolean
  }

 
`;

module.exports = typeDefs;

//Scalar Types -String, Number, Float
//Object types

//Root Query
//Query per field

//type Query{

//}
