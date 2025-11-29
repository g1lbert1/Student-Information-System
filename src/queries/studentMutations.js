import {gql} from '@apollo/client'

export const ADD_STUDENT = gql `
  mutation AddStudent(
    $first_name: String!
    $last_name: String!
    $email: String!
    $date_of_birth: String!
    $major: String!
    $gpa: Float!
  ) {
    addStudent(
      first_name: $first_name
      last_name: $last_name
      email: $email
      date_of_birth: $date_of_birth
      major: $major
      gpa: $gpa
    ) {
      _id
      first_name
      last_name
      major
      numOfEnrolledCourses
    }
  }
`

export const EDIT_STUDENT = gql `
  mutation EditStudent(
    $_id: String!
    $first_name: String
    $last_name: String
    $email: String
    $date_of_birth: String
    $major: String
    $gpa: Float
  ) {
    editStudent(
      _id: $_id
      first_name: $first_name
      last_name: $last_name
      email: $email
      date_of_birth: $date_of_birth
      major: $major
      gpa: $gpa
    ) {
      _id
      first_name
      last_name
      major
      numOfEnrolledCourses
    }
  }
`

export const REMOVE_STUDENT = gql `
  mutation RemoveStudent($_id: String!) {
    removeStudent(_id: $_id) {
      _id
      first_name
      last_name
      major
      numOfEnrolledCourses
    }
  }
`

export const ENROLL_STUDENT_IN_COURSE = gql `
  mutation EnrollStudentInCourse($studentId: String!, $courseId: String!) {
    enrollStudentInCourse(studentId: $studentId, courseId: $courseId) {
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

export const REMOVE_STUDENT_FROM_COURSE = gql `
  mutation RemoveStudentFromCourse($studentId: String!, $courseId: String!) {
    removeStudentFromCourse(studentId: $studentId, courseId: $courseId) {
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

