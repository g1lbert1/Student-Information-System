import {useQuery, useMutation} from '@apollo/client/react'
import {INSTRUCTORS} from '../queries'
import {
  ADD_INSTRUCTOR,
  EDIT_INSTRUCTOR,
  REMOVE_INSTRUCTOR
} from '../queries'

const useInstructors = () => {
  const {data, loading, error, refetch} = useQuery(INSTRUCTORS)
  const [addInstructor] = useMutation(ADD_INSTRUCTOR)
  const [editInstructor] = useMutation(EDIT_INSTRUCTOR)
  const [removeInstructor] = useMutation(REMOVE_INSTRUCTOR)
  
  return {
    instructors: data?.instructors || [],
    loading,
    error,
    refetch,
    addInstructor,
    editInstructor,
    removeInstructor
  }
}
export default useInstructors
