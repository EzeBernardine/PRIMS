import { gql } from 'apollo-boost';

export const ALL_PRISONERS = gql`
  query {
      prisoners{
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
  query($id: ID){
    prisoner(id: $id){
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

`

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

export const ADD_PRISONER =gql`
  mutation($data: prisonerInput) {
    addPrisoner(data: $data)
  }
`
export const DELETE_PRISONER = gql`
  mutation($id: ID){
    deletePrisonerRecord(id: $id)
}
`



export const ADD_STAFF = gql`
  mutation($data: staffInput){
    addStaff(data: $data)
  }
`

export const ADD_PRISON = gql`
  mutation($data: prisonInput) {
    addPrison(data: $data)
  }
`