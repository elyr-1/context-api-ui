import React, { useContext } from "react";
import StudentForm from "../components/StudentForm";
import { StudentContext } from "../contexts/StudentContext";

const AddStudentPage = () => {
  const { onAddStudent } = useContext(StudentContext);

  return (
    <div className="container-sm">
      <StudentForm onSubmit={onAddStudent} />
    </div>
  );
};

export default AddStudentPage;
