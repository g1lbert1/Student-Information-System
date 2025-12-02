import {useQuery, useMutation} from '@apollo/client/react'
import {GET_INSTRUCTOR_BY_ID, GET_COURSES_BY_INSTRUCTOR_ID} from '../queries'
import {EDIT_INSTRUCTOR, REMOVE_INSTRUCTOR} from '../queries'

const useInstructor = (id) => {
  const {data, loading, error, refetch} = useQuery(GET_INSTRUCTOR_BY_ID, {
    variables: {_id: id}
  })
  const {data: coursesData, refetch: refetchCourses} = useQuery(GET_COURSES_BY_INSTRUCTOR_ID, {
    variables: {instructorId: id}
  })

  const [editInstructor] = useMutation(EDIT_INSTRUCTOR)
  const [removeInstructor] = useMutation(REMOVE_INSTRUCTOR)
  return {
    instructor: data?.getInstructorById || null,
    courses: coursesData?.getCoursesByInstructorId || [],
    loading,
    error,
    refetchInstructor: refetch,
    refetchCourses,
    editInstructor,
    removeInstructor
  }
}
export default useInstructor
