import http from "./http";

export function getStudents() {
  return http.get("/students");
}

export function addStudent(student) {
  return http.post("/students", student);
}

export function editStudent(id, updatedStudent) {
  return http.patch(`/students/${id}`, updatedStudent);
}

export function deleteStudentById(id) {
  return http.delete(`/students/${id}`);
}
