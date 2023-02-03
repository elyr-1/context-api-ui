import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddStudentPage from "./pages/AddStudentPage";
import EditStudentPage from "./pages/EditStudentPage";
import HomePage from "./pages/HomePage";
import StudentsPage from "./pages/StudentsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/students/add" element={<AddStudentPage />} />
          <Route path="/students/edit/:id" element={<EditStudentPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
