import {gql} from '@apollo/client'

//courses list
export const COURSES = gql `
  query Courses {
    courses {
      _id
      course_name
      department
      instructor {
        _id
        first_name
        last_name
      }
    }
  }
`

//info on individual course (list of students populated by getStudentsByCourseId query)
export const GET_COURSE_BY_ID = gql `
  query GetCourseById($_id: String!) {
    getCourseById(_id: $_id) {
      _id
      course_name
      credits
      instructor {
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

//get a courses by department (for filtering)
export const GET_COURSES_BY_DEPARTMENT = gql `
  query GetCoursesByDepartment($department: String!) {
    getCoursesByDepartment(department: $department) {
      _id
      course_name
      department
      instructor {
        _id
        first_name
        last_name
      }
    }
  }
`

//get courses by date range (for filtering)
export const GET_COURSES_BY_DATE_RANGE = gql `
  query GetCoursesByDateRange($start: String!, $end: String) {
    getCoursesByDateRange(start: $start, end: $end) {
      _id
      course_name
      department
      instructor {
        _id
        first_name
        last_name
      }
    }
  }
`

//get students based on course id (used in displaying single course)
export const GET_STUDENTS_BY_COURSE_ID = gql `
  query GetStudentsByCourseId($courseId: String!) {
    getStudentsByCourseId(courseId: $courseId) {
      _id
      first_name
      last_name
    }
  }
`
