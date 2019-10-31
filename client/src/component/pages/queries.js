import { gql } from 'apollo-boost';

export const ALL_PRISONERS = gql`
  query {
      prisoners{
        name
        nationality
        gender
        nationality
        state
        DateOfEntry
        timeOfEntry
        LGA
        story
        image
  }
}
`;

export const ADD_PRISONER = gql`
mutation(
    $name: String
    $gender: String
    $nationality: String
    $state: String
    $DateOfEntry: String
    $timeOfEntry: String
    $LGA: String
    $story: String
    $image: String){
      addPrisoner(data: {
        name: $name
        gender: $gender
        nationality: $nationality
        state: $state
        DateOfEntry: $DateOfEntry
        timeOfEntry: $timeOfEntry
        LGA: $LGA
        story: $story
        image: $image
      })
    }
`