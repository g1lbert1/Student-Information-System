import {gql} from '@apollo/client'

//for /students
export const STUDENTS = gql `
  query Students {
    students {
      _id
      first_name
      last_name
      major
      numOfEnrolledCourses
    }
  }
`

//for /students/:id
export const GET_STUDENT_BY_ID = gql `
  query GetStudentById($_id: String!) {
    getStudentById(_id: $_id) {
      _id
      first_name
      last_name
      email
      date_of_birth
      major
      gpa
      enrolled_courses{
        _id
        course_name
      }
      numOfEnrolledCourses
    }
  }
`

//filter
export const GET_STUDENTS_BY_MAJOR = gql `
  query GetStudentsByMajor($major: String!) {
    getStudentsByMajor(major: $major) {
      _id
      first_name
      last_name
      major
      numOfEnrolledCourses
    }
  }
`

//filter
export const SEARCH_STUDENTS_BY_LAST_NAME = gql `
  query SearchStudentsByLastName($searchTerm: String!) {
    searchStudentsByLastName(searchTerm: $searchTerm) {
      _id
      first_name
      last_name
      major
      numOfEnrolledCourses
    }
  }
`
