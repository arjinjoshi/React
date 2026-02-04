import Header from "./Components/Header"
import StudentForm from "./Components/StudentForm"
import StudentTracker from "./Components/StudentTracker"

const App = () => {
  
  return (

      <div className=" flex flex-col justify-between p-8">
        <Header title = "Student Tracker App" description="This is a student tracker app that displays each Student Information"/>
        <StudentTracker/>

       </div>

  )
}

export default App