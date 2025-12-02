import {gql} from '@apollo/client'

export const ADD_COURSE = gql `
  mutation AddCourse(
    $course_name: String!
    $department: String!
    $credits: Int!
    $instructor: String!
    $start_date: String!
    $end_date: String!
  ) {
    addCourse(
      course_name: $course_name
      department: $department
      credits: $credits
      instructor: $instructor
      start_date: $start_date
      end_date: $end_date
    ) {
      _id
      course_name
      department
      instructor{
        _id
        first_name
        last_name
      }
    }
  }
`

export const EDIT_COURSE = gql `
  mutation EditCourse(
    $_id: String!
    $course_name: String
    $department: String
    $credits: Int
    $instructor: String
    $start_date: String
    $end_date: String
  ) {
    editCourse(
      _id: $_id
      course_name: $course_name
      department: $department
      credits: $credits
      instructor: $instructor
      start_date: $start_date
      end_date: $end_date
    ) {
      _id
      course_name
      department
      instructor{
        _id
        first_name
        last_name
      }
    }
  }
`

export const REMOVE_COURSE = gql `
  mutation RemoveCourse($_id: String!) {
    removeCourse(_id: $_id){
      _id
      course_name
      department
      instructor{
        _id
        first_name
        last_name
      }
    }
  }
`

export const UPDATE_COURSE_INSTRUCTOR = gql `
  mutation UpdateCourseInstructor($courseId: String!, $instructorId: String!) {
    updateCourseInstructor(courseId: $courseId, instructorId: $instructorId) {
      _id
      course_name
      department
      credits
      instructor{
        _id
        first_name
        last_name
      }
      start_date
      end_date
      numOfStudentsEnrolled
    }
  }
`
