import {useQuery, useMutation} from "@apollo/client/react"
import {
  GET_COURSES,
  ADD_COURSE,
  EDIT_COURSE,
  REMOVE_COURSE
} from "../queries"

const useCourses = () => {
  const { data, loading, error, refetch } = useQuery(COURSES)

  const [addCourse] = useMutation(ADD_COURSE)
  const [editCourse] = useMutation(EDIT_COURSE)
  const [removeCourse] = useMutation(REMOVE_COURSE)

  return {
    courses: data?.courses || [],
    loading,
    error,
    refetch,
    addCourse,
    editCourse,
    removeCourse
  }
}

export default useCourses

