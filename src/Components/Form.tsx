import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors: Record<string, string> = {};

    // Simple JavaScript validations
    if (!formData.name.trim()) {
      newErrors = { ...newErrors, name: "Name is required" };
    }

    if (!formData.email.trim()) {
      newErrors = { ...newErrors, email: "Email is required" };
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors = { ...newErrors, email: "Invalid email format" };
    }

    if (!formData.phone.trim()) {
      newErrors = { ...newErrors, phone: "Phone is required" };
    } else if (formData.phone.trim().length < 10) {
      newErrors = { ...newErrors, phone: "Password must be 10 digits" };
    } else if (formData.phone.trim().length > 10) {
      newErrors = { ...newErrors, phone: "Password must be 10 digits" };
    } else if (!/^[0-9]{10}$/.test(formData.phone.trim())) {
      newErrors = {
        ...newErrors,
        phone: "Invalid phone number format (10 digits only)",
      };
    }

    setErrors(newErrors);

    // If there are no errors, you can proceed with form submission
    if (Object.keys(newErrors).length === 0) {
      console.log("Form is valid. Submitting...");
      // Add your form submission logic here
    }
  };

  return (
    <form
      style={{
        margin: "50px",
        padding: "15px",
        borderRadius: "7px",
        backgroundColor: "#f2f2f2",
      }}
      onSubmit={handleSubmit}
    >
      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input
          type="text"
          name="name"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <div className="invalid-feedback">{errors.name}</div>
      </div>
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          name="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="invalid-feedback">{errors.email}</div>
      </div>
      <div className="mb-3">
        <label className="form-label">Password:</label>
        <input
          type="phone"
          name="phone"
          className={`form-control ${errors.phone ? "is-invalid" : ""}`}
          placeholder="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <div className="invalid-feedback">{errors.phone}</div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Form;
