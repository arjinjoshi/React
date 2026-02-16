import Header from "./Components/Header";
import StudentDetailEdit from "./pages/StudentDetailEdit";
import StudentDetailLayout from "./pages/StudentDetailLayout";
import StudentDetailView from "./pages/StudentDetailView";
import StudentForm from "./pages/StudentForm";
import StudentList from "./pages/StudentList";
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <div className="min-h-screen w-screen h-full flex flex-col bg-gray-600">
      <Header title="Student Tracker" />
      
      
      <Routes>
        <Route index element={<StudentList />} />
        <Route
          path="/studentform"
          element={
            <div>
              <StudentForm />
              <StudentList/>
            </div>
          }
        />


        <Route path="/studentlist" element={<StudentList />} />

        {/* Dynamic Routing  */}
        <Route path = "/student/:id" element = { <StudentDetailLayout/> } >
          <Route index element = {<StudentDetailView/>} />
          <Route path = "edit" element = {<StudentDetailEdit/>} />
        </Route>


        <Route
          path="*"
          element={
            <h1 className="text-7xl font-semibold text-center mt-20">
              Sorry, Page Not Found
            </h1>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
