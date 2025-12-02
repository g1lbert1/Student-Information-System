import {useState, useEffect} from 'react'
import useCourses from '../hooks/useCourses.js'
import useCourseFilters from '../hooks/useCourseFilters.js'
import {Link} from 'react-router-dom'


const CourseList = () => {
  const {
    courses,
    loading,
    error,
    refetch,
    addCourse,
    editCourse,
    removeCourse
  } = useCourses()

   const {
    filterByDepartment,
    filterByHireDate,
    departmentData,
    hireRangeData
  } = useCourseFilters()








  return (
    <h1>Course List</h1>
  )
}
export default CourseList
