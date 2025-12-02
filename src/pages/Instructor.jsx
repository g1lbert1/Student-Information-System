import {useState, useEffect} from 'react'
import InstructorModal from '../components/InstructorModal.jsx'
import useInstructor from '../hooks/useInstructor.js'
import {useParams, Link, useNavigate} from 'react-router-dom'

const Instructor = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  const {
    instructor,
    courses,
    loading,
    error,
    refetchInstructor,
    refetchCourses,
    editInstructor,
    removeInstructor
  } = useInstructor(id)
  const [openModal, setOpenModal] = useState(false)

  //function to convert date to MM-DD-YYYY format
  
  

  //event handlers:
  const handleDelete = async (_id) => {
    await removeInstructor({variables: {_id }})
    navigate("/instructors")
  }

  const handleEdit = async (formData) => {
    await editInstructor({variables: {_id: instructor._id, ...formData}})
    setOpenModal(false)
    refetchInstructor()
    refetchCourses()
  }

  if(loading) return <p>Loading instructor...</p>
  if(error) return <p className="text-red-500 font-semibold text-8xl">{error.message}</p>
  if(!instructor) return <p>Instructor not found.</p>

  return (
    <div className="instructorPage">
      {/*Instructor Info*/}
      <h1 className="text-4xl text-white font-semibold">{instructor.first_name} {instructor.last_name}</h1>
      <h3 className="text-white">Department: {instructor.department}</h3>
      <h3 className="text-white">Email: {instructor.email}</h3>
      <h3 className="text-white">Office: {instructor.office}</h3>
      <h3 className="text-white">Phone: {instructor.phone}</h3>
      <h3 className="text-white">Hired On: {instructor.date_hired}</h3>
      <h3 className="text-white">Head of {instructor.numOfClassesTaught} classes:</h3>
      {/*Courses*/}
      <ul className="space-y-1">
        {courses && courses.map(course => {
          return (
            <li key={course._id}>
              <Link to={`/courses/${course._id}`} className="text-yellow-400 cursor-pointer shadow hover:shadow-lg transition font-semibold hover:underline">{course.course_name}</Link>
            </li>
          )
        })}
      </ul>
      {/* Action Buttons */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setOpenModal(true)}
          className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-600 transition cursor-pointer"
        >
          Edit
        </button>

        <button
          onClick={() => handleDelete(instructor._id)}
          className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-600 transition cursor-pointer"
        >
          Delete
        </button>
      </div>
      {/* Edit Modal */}
      {openModal && (
        <InstructorModal
          mode="edit"
          instructor={instructor}
          onClose={() => setOpenModal(false)}
          onSubmit={handleEdit}
        />
      )}

    </div>

  )
}
export default Instructor
