import {useLazyQuery} from '@apollo/client/react'
import {GET_INSTRUCTORS_BY_DEPARTMENT, GET_INSTRUCTORS_HIRED_BETWEEN} from '../queries'

const useInstructorFilters = () => {
  //function, data
  const [filterByDepartment, departmentData] = useLazyQuery(GET_INSTRUCTORS_BY_DEPARTMENT)
  const [filterByHireDate, hireRangeData] = useLazyQuery(GET_INSTRUCTORS_HIRED_BETWEEN)
  return {
    filterByDepartment,
    filterByHireDate,
    departmentData,
    hireRangeData
  }
}
export default useInstructorFilters
