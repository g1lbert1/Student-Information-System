import {useLazyQuery} from '@apollo/client/react'
import {GET_COURSES_BY_DEPARTMENT, GET_COURSES_BY_DATE_RANGE} from '../queries'

const useCourseFilters = () => {
  const [filterByDepartment, departmentData] = useLazyQuery(GET_COURSES_BY_DEPARTMENT)
  const [filterByDate, dateData] = useLazyQuery(GET_COURSES_BY_DATE_RANGE)
  return {
    filterByDepartment,
    filterByDate,
    departmentData,
    dateData
  }

}
export default useCourseFilters
