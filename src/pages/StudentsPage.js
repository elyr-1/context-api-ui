import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StudentContext } from "../contexts/StudentContext";

const StudentsPage = () => {
  const { students, onDeleteStudent } = useContext(StudentContext);

  const navigate = useNavigate();

  return students ? (
    <div className="container mt-3">
      <button
        type="button"
        className="btn btn-secondary mb-2 float-end"
        onClick={() => navigate("/students/add")}
      >
        Add Student
      </button>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email Address</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <th scope="row">{student.id}</th>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => navigate(`/students/edit/${student.id}`)}
                >
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => onDeleteStudent(student.id)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <></>
  );
};

export default StudentsPage;
