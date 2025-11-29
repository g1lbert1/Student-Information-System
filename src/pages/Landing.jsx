import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
const Landing = () => {
  const [loading, setLoading] = useState(true)
  return (
    <div className="bg-blue-600 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-[2rem] font-semibold text-white">Welcome!</h1>
      <h2 className="text-[1.5rem] text-white">Student Information System</h2>
      <p className="text-[1.5rem] text-white">Browse:</p>

    </div>
  )
}
export default Landing 
