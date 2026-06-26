import {
  FiEdit,
  FiTrash2,
} from "react-icons/fi";

export default function EmployeeTable({
  employees,
  onEdit,
  onDelete,
}) {
  return (
    <table className="employee-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Role</th>
          <th>Salary</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.name}</td>

            <td>{emp.email}</td>

            <td>
              {emp.department}
            </td>

            <td>{emp.role}</td>

            <td>
              ₹{emp.salary}
            </td>

            <td>
              {emp.status}
            </td>

            <td>
              <button
                onClick={() =>
                  onEdit(emp)
                }
              >
                <FiEdit />
              </button>

              <button
                onClick={() =>
                  onDelete(emp.id)
                }
              >
                <FiTrash2 />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}