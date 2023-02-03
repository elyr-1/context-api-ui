import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import StudentForm from "../components/StudentForm";
import { StudentContext } from "../contexts/StudentContext";

const EditStudentPage = () => {
  const params = useParams();
  const { students, onEditStudent } = useContext(StudentContext);

  const student = students.find((student) => student.id === +params.id);
  const { id, firstName, lastName, email } = student;

  const handleEditStudent = (form) => onEditStudent(id, form);

  return student ? (
    <div className="container-sm">
      <StudentForm
        onSubmit={handleEditStudent}
        initialValue={{ firstName, lastName, email }}
      />
    </div>
  ) : (
    <></>
  );
};

export default EditStudentPage;
