import { useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import InstructorList from './pages/InstructorList.jsx'
import Instructor from './pages/Instructor.jsx'
import CourseList from './pages/CourseList.jsx'
import Course from './pages/Course.jsx'
import StudentList from './pages/StudentList.jsx'
import Student from './pages/Student.jsx'

const App = () => {
  return (
    <div className="bg-blue-600 min-h-screen">
      <header>
        <h1 className="text-[2rem] text-white">Student Information System</h1>
        <nav style={{ display: "flex", gap: "1rem" }} >
          <Link to="/" className="text-lg font-semibold text-white hover:text-yellow-400 transition-colors duration-200">Home</Link>
          <Link to="/instructors" className="text-lg font-semibold text-white hover:text-yellow-400 transition-colors duration-200">Instructors</Link> 
          <Link to="/courses" className="text-lg font-semibold text-white hover:text-yellow-400 transition-colors duration-200">Courses</Link>
          <Link to="/students" className="text-lg font-semibold text-white hover:text-yellow-400 transition-colors duration-200">Students</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/instructors" element={<InstructorList />} />
        <Route path="/instructors/:id" element={<Instructor />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/courses/:id" element={<Course />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/students/:id" element={<Student />} />
      </Routes>
    </div> 
  )

}
export default App
