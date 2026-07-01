import { useState } from "react";

export default function EmployeeForm({
  onSave,
  employee,
  closeModal,
}) {
  const [formData, setFormData] =
    useState(
      employee || {
        name: "",
        email: "",
        department: "",
        role: "",
        salary: "",
        status: "Active",
      }
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({
            ...formData,
            name: e.target.value,
          })
        }/>

      <input
        placeholder="Email"
        value={formData.email}
        onChange={(e) =>
          setFormData({
            ...formData,
            email: e.target.value,
          })
        }
      />
  
      <input
        placeholder="Department"
        value={formData.department}
        onChange={(e) =>
          setFormData({
            ...formData,
            department:
              e.target.value,
          })
        }
      />

      <input
        placeholder="Role"
        value={formData.role}
        onChange={(e) =>
          setFormData({
            ...formData,
            role: e.target.value,
          })
        }
      />

      <input
        type="number"
        placeholder="Salary"
        value={formData.salary}
        onChange={(e) =>
          setFormData({
            ...formData,
            salary: Number(
              e.target.value
            ),
          })
        }
      />

      <select
        value={formData.status}
        onChange={(e) =>
          setFormData({
            ...formData,
            status: e.target.value,
          })
        }
      >
        
        <option>
          Active
        </option>

        <option>
          Inactive
        </option>
      </select>

      <button type="submit">
        Save Employee
      </button>
    </form>
  );
}
