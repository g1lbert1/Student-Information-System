import {useState, useEffect} from "react"

export default function InstructorModal({mode, instructor, onSubmit, onClose}) {


  const toISODate = (dateStr) => {
    if (!dateStr) return ""
    const [month, day, year] = dateStr.split("/")
    return `${year}-${month}-${day}`
  }

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    department: "",
    email: "",
    phone: "",
    office: "",
    date_hired: ""
  })
  const convertDate = (dateStr) => {
    const match = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})$/)
    if(!match) return dateStr 
    const [ , year, month, day] = match
    return `${month}/${day}/${year}`
  }

  //Populate form when editing
  useEffect(() => {
    if (mode === "edit" && instructor) {
      setFormData({
        first_name: instructor.first_name || "",
        last_name: instructor.last_name || "",
        department: instructor.department || "",
        email: instructor.email || "",
        phone: instructor.phone || "",
        office: instructor.office || "",
        date_hired: toISODate(instructor.date_hired) || ""
      })
    }
  }, [mode, instructor])

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formattedDate = convertDate(formData.date_hired)
    onSubmit({...formData, date_hired: formattedDate})
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/40">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">
          {mode === "edit" ? "Edit Instructor" : "Add Instructor"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {Object.keys(formData).map((field) => (
            <input
              key={field}
              name={field}
              type={field.includes("date") ? "date" : "text"}
              value={formData[field]}
              onChange={handleChange}
              placeholder={field.replace("_", " ")}
              className="border p-2 rounded"
            />
          ))}

          <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            {mode === "edit" ? "Save Changes" : "Add Instructor"}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="text-gray-600 mt-2 hover:underline"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  )
}

