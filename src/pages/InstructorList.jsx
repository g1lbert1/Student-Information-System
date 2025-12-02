import {useState, useEffect} from 'react'
import InstructorModal from '../components/InstructorModal.jsx'
import useInstructors from '../hooks/useInstructors.js'
import useInstructorFilters from '../hooks/useInstructorFilters.js'
import {Link} from 'react-router-dom'

const InstructorList = () => {
  const {
    instructors,
    loading,
    error,
    refetch,
    addInstructor,
    editInstructor,
    removeInstructor
  } = useInstructors()

  const {
    filterByDepartment,
    filterByHireDate,
    departmentData,
    hireRangeData
  } = useInstructorFilters()

  //filter states
  const [selectedDepartment, setSelectedDepartment] = useState("")
  const [selectedHireRange, setSelectedHireRange] = useState({"start": "1900-01-01", end: ""})
  const [modalMode, setModalMode] = useState(null)
  //for editing modal
  const [editingInstructor, setEditingInstructor] = useState(null)
  //checking what filter is currently being used
  const [filter, setFilter] = useState("")

  //determining whether to show the list of all instructors or a filtered list based on current state
  const filteredData = (() => {
    console.log(filter)
    if(filter === "department" && departmentData.data) {
      if(departmentData.data.getInstructorsByDepartment === []) {
        return <p className="color-white">No Instructors Found</p>
      }
      return departmentData.data.getInstructorsByDepartment
    }
    if(filter === "hireRange" && hireRangeData.data) {
      if(hireRangeData.data.getInstructorsHiredBetween === []) {
        return <p className="color-white">No Instructors Found</p>
      }
      
      return hireRangeData.data.getInstructorsHiredBetween
    }
    return instructors
  })()  


  //function to convert date to MM-DD-YYYY format
  const convertDate = (dateStr) => {
    const match = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})$/)
    if(!match) return dateStr 
    const [ , year, month, day] = match
    return `${month}/${day}/${year}`
  }
  

  //event handlers:
  const handleDelete = async (id) => {
    await removeInstructor({variables: {_id: id}})
    refetch()
  }

  const handleAdd = async (formData) => {
    await addInstructor({variables: {...formData}})
    setModalMode(null)
    refetch()
  }

  const handleEdit = async (formData) => {
    await editInstructor({variables: {_id: editingInstructor._id, ...formData}})
    setModalMode(null)
    refetch()
  }

  const handleDepartmentFilter = (dept) => {
    setSelectedDepartment(dept)
    setFilter("department")
    filterByDepartment({variables: {department: dept}})
  }

  const handleHireRangeFilter = () => {

    setFilter("hireRange")

    filterByHireDate({variables: {start: convertDate(selectedHireRange.start), end: convertDate(selectedHireRange.end)}})
  }

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error loading instructors</p>

  return (
    <div className="page">
      <h1 className="text-2xl text-white">List of Instructors</h1>

      {/*Filter functions*/}
      <div className="filters">
        <p className="text-white">===Filters===</p>

        <div className="departmentFilter">
          <label className="text-white">Department:</label>
          <select
            value={selectedDepartment}
            onChange={(e) => handleDepartmentFilter(e.target.value)}
            className="text-yellow-400 cursor-pointer"
          >
            <option value="">Select Department</option>
            <option value="computer science">Computer Science</option>
            <option value="math">Math</option>
            <option value="physics">Physics</option>
            <option value="biology">Biology</option>
            <option value="english">English</option>
            <option value="history">History</option>
            <option value="chemistry">Chemistry</option>

          </select>
        </div>

        <div className="hireRangeFilter">
          <label className="text-white">Date Hired (Range): </label>
          <input
            type="date"
            value={selectedHireRange.start}
            onChange={(e) => setSelectedHireRange({...selectedHireRange, start: e.target.value})}
            className="text-yellow-400 cursor-pointer"
          />
          <input
            type="date"
            value={selectedHireRange.end}
            onChange={(e) => setSelectedHireRange({...selectedHireRange, end: e.target.value})}
            className="text-yellow-400 cursor-pointer"
          />
          <button onClick={handleHireRangeFilter} className="text-yellow-400 cursor-pointer shadow hover:shadow-lg transition">Apply</button>
        </div>

      </div>
      {/*Add instructor button*/}
      <button onClick={() => setModalMode("add")} className="cursor-pointer shadow hover:shadow-lg transition text-yellow-400">Add Instructor</button>

      {/*Instructor List*/}
      {filteredData.length === 0 ? (<p className="text-white">No Instructors Found</p>) : (filteredData.map((instructor) => {
        return (
          <div key={instructor._id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold">
              <Link to={`/instructors/${instructor._id}`} className="text-white hover:underline">
                {instructor.first_name} {instructor.last_name}
              </Link>
            </h2>
            <p className="text-white">Department: {instructor.department}</p>
            <p className="text-white">Courses Taught: {instructor.numOfClassesTaught}</p>
            <div className="flex gap-2 mt-4">
              <button className="px-3 py-1 rounded bg-yellow-500 text-white hover:bg-yellow-600 cursor-pointer" onClick={() => {
                setEditingInstructor(instructor)
                setModalMode("edit")
              }}
              >
                Edit
              </button>
              <button className="px-3 py-1 rounded bg-yellow-500 text-white hover:bg-yellow-600 cursor-pointer" onClick={() => handleDelete(instructor._id)}>
                Delete
              </button>
            </div>

          </div>
        )
      }))}
      {/*Modal*/}
      {modalMode && (
        <InstructorModal
          mode={modalMode}
          instructor={editingInstructor}
          onClose={() => setModalMode(null)}
          onSubmit={modalMode === "add" ? handleAdd : handleEdit}
        />
      )}
    </div>
  )
}
export default InstructorList
