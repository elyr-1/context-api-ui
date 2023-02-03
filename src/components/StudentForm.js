import React, { useState } from "react";

const StudentForm = (props) => {
  const { onSubmit, initialValue } = props;
  const [form, setForm] = useState(
    initialValue || {
      firstName: "",
      lastName: "",
      email: "",
    }
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 mt-3">
        <label className="form-label">Email address</label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3 mt-3">
        <label className="form-label">Email address</label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3 mt-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="name@example.com"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default StudentForm;
