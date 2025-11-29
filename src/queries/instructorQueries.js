import {gql} from '@apollo/client'


//get all instructors
export const INSTRUCTORS = gql `
  query Instructors {
    instructors {
      _id
      first_name
      last_name
      department
      numOfClassesTaught
    }
  }
`

//get single instructor by id
export const GET_INSTRUCTOR_BY_ID = gql `
  query GetInstructorById($_id: String!) {
    getInstructorById(_id: $_id) {
      _id
      first_name
      last_name
      department
      email
      phone
      office
      date_hired
      numOfClassesTaught
    }
  }
`

//get a list of instructors by department name
export const GET_INSTRUCTORS_BY_DEPARTMENT = gql `
  query GetInstructorsByDepartment($department: String!) {
    getInstructorsByDepartment(department: $department) {
      _id
      first_name
      last_name
      department
      numOfClassesTaught
    }
  }
`

//get a list of instructors by date hired
export const GET_INSTRUCTORS_HIRED_BETWEEN = gql `
  query GetInstructorsHiredBetween($start: String!, $end: String!) {
    getInstructorsHiredBetween(start: $start, end: $end) {
      _id
      first_name
      last_name
      department
      numOfClassesTaught
    }
  }
`

//get courses taught by instructor (used inside /instructors/:id)
export const GET_COURSES_BY_INSTRUCTOR_ID = gql `
  query GetCoursesByInstructorId($instructorId: String!) {
    getCoursesByInstructorId(instructorId: $instructorId) {
      _id
      course_name
      department
      credits
      start_date
      end_date
    }
  }
`


