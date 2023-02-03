import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as studentService from "../services/student";

export const StudentContext = createContext({
  students: [],
  onAddStudent: () => {},
  onEditStudent: () => {},
  onDeleteStudent: () => {},
});

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const getStudents = () => {
    studentService.getStudents().then((res) => setStudents(res.data));
  };

  useEffect(() => {
    // studentService.getStudents().then((res) => setStudents(res.data));
    getStudents();
  }, []);

  const handleAddStudent = async (student) => {
    await studentService.addStudent(student).then(() => {
      // studentService.getStudents().then((res) => setStudents(res.data));
      getStudents();
      navigate("/students");
    });
  };

  const handleEditStudent = async (id, updatedStudent) => {
    await studentService.editStudent(id, updatedStudent).then(() => {
      getStudents();
      navigate("/students");
    });
  };

  const handleDeleteStudent = async (id) => {
    await studentService.deleteStudentById(id);
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        onAddStudent: handleAddStudent,
        onEditStudent: handleEditStudent,
        onDeleteStudent: handleDeleteStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
