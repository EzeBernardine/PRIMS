import { gql } from "apollo-boost";

export const ALL_PRISONERS = gql`
  query {
    prisoners {
      id
      name
      nationality
      gender
      nationality
      state
      dateImprisoned
      timeImprisoned
      lga
      story
      image
    }
  }
`;

export const GET_PRISONER = gql`
  query($id: ID) {
    prisoner(id: $id) {
      name
      nationality
      gender
      nationality
      state
      dateImprisoned
      timeImprisoned
      lga
      story
      image
    }
  }
`;

// export const ADD_PRISONER = gql`
// mutation(
//     $name: String
//     $gender: String
//     $nationality: String
//     $state: String
//     $dateImprisoned: String
//     $timeImprisoned: String
//     $dateReleased: String
//     $timeReleased: String
//     $lga: String
//     $story: String
//     $prisonunit: String
//     $image: String){
//       addPrisoner(data: {
//         name: $name
//         gender: $gender
//         nationality: $nationality
//         state: $state
//         dateImprisoned: $dateImprisoned
//     timeImprisoned: $timeImprisoned
//     dateReleased: $dateReleased
//     timeReleased: $timeReleased
//     lga: $lga
//     story: $story
//     prisonunit: $prisonunit
//     image: $image
//       })
//     }
// `

export const ADD_PRISONER = gql`
  mutation($data: prisonerInput) {
    addPrisoner(data: $data)
  }
`;
export const DELETE_PRISONER = gql`
  mutation($id: ID) {
    deletePrisonerRecord(id: $id)
  }
`;

export const ADD_STAFF = gql`
  mutation($data: staffInput) {
    addStaff(data: $data)
  }
`;

export const ADD_PRISON = gql`
  mutation($data: prisonInput) {
    addPrison(data: $data)
  }
`;

export const ADD_ADMIN = gql`
  mutation($data: adminInput) {
    signAdmin(data: $data) {
      email
      id
    }
  }
`;

// export const LOGIN = gql`
//   mutation(email: String!, password: String!){
//     login(email: $email, password: $password){
//       token
//     }
//   }
// `

export const LOGIN = gql`
  mutation($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      token
    }
  }
`;

export const ALL_PRISONS = gql`
  query {
    getPrisons {
      prisonLGA
      prisonName
      prisonState
      mdImage
      prisonDetail
      prisonImage
      prisonManager
      prisonManagerPhone
    }
  }
`;

export const ALL_STAFF = gql`
  query {
    getAllStaff {
      name
      email
      gender
      date
      nationality
      lga
      position
      image
    }
  }
`;

export const ADD_REHAB = gql`
  mutation($data: rehabInput) {
    createRehab(data: $data)
  }
`;

export const GET_ALL_REHABS = gql`
  query {
    getRehabCenters {
      _id
      rehabCenter
      rehabManager
      rehabManagerPhone
      mdImage
      rehabState
      rehabLGA
      tag
      rehabDetail
      rehabImage
    }
  }
`;

export const ACCEPT_REHAB = gql`
  mutation($id: ID!) {
    acceptRehab(id: $id)
  }
`;

export const GET_ACCEPTED_REHAB = gql`
  query {
    acceptedRehab {
      _id
      rehabCenter
      rehabManager
      rehabManagerPhone
      mdImage
      rehabState
      rehabLGA
      tag
      rehabDetail
      rehabImage
      isAccepted
    }
  }
`;
