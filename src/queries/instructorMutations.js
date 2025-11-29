import {gql} from '@apollo/client'

export const ADD_INSTRUCTOR = gql `
  mutation AddInstructor(
    $first_name: String!
    $last_name: String!
    $department: String!
    $email: String!
    $phone: String!
    $office: String!
    $date_hired: String!
  ) {
    addInstructor(
      first_name: $first_name
      last_name: $last_name
      department: $department
      email: $email
      phone: $phone
      office: $office
      date_hired: $date_hired
    ) {
      _id
      first_name
      last_name
      department
      numOfClassesTaught
    }
  }
`

export const EDIT_INSTRUCTOR = gql `
  mutation EditInstructor(
    $_id: String!
    $first_name: String
    $last_name: String
    $department: String
    $email: String
    $phone: String
    $office: String
    $date_hired: String
  ) {
    editInstructor(
      _id: $_id
      first_name: $first_name
      last_name: $last_name
      department: $department
      email: $email
      phone: $phone
      office: $office
      date_hired: $date_hired
    ) {
      _id
      first_name
      last_name
      department
      numOfClassesTaught
    }
  }
`

export const REMOVE_INSTRUCTOR = gql `
  mutation RemoveInstructor($_id: String!) {
    removeInstructor(_id: $_id) {
      _id
      first_name
      last_name
      department
      numOfClassesTaught
    }
  }
`
