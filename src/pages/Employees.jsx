import {
  useContext,
  useState,
} from "react";

import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import EmployeeTable from "../components/EmployeeTable";
import EmployeeForm from "../components/EmployeeForm";

import { EmployeeContext } from "../context/EmployeeContext";

export default function Employees() {
  const {
    employees,
    setEmployees,
  } = useContext(EmployeeContext);

  const [search, setSearch] =
    useState("");

  const [showModal, setShowModal] =
    useState(false);

  const [editingEmployee,
    setEditingEmployee] =
    useState(null);

  const filteredEmployees =
    employees.filter(
      (emp) =>
        emp.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        emp.email
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  const addEmployee = (
    employee
  ) => {
    const newEmployee = {
      ...employee,
      id: Date.now(),
    };

    setEmployees([
      ...employees,
      newEmployee,
    ]);
  };

  const updateEmployee = (
    updated
  ) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === updated.id
          ? updated
          : emp
      )
    );
  };

  const deleteEmployee = (
    id
  ) => {
    const confirmDelete =
      window.confirm(
        "Delete employee?"
      );

    if (confirmDelete) {
      setEmployees(
        employees.filter(
          (emp) =>
            emp.id !== id
        )
      );
    }
  };

  return (
    <Layout>
      <div className="employees-header">

        <h1>
          Employee Management
        </h1>

        <button
          onClick={() => {
            setEditingEmployee(
              null
            );

            setShowModal(
              true
            );
          }}
        >
          Add Employee
        </button>

      </div>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <EmployeeTable
        employees={
          filteredEmployees
        }
        onEdit={(employee) => {
          setEditingEmployee(
            employee
          );

          setShowModal(
            true
          );
        }}
        onDelete={
          deleteEmployee
        }
      />

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <EmployeeForm
              employee={editingEmployee}
              closeModal={() => setShowModal(false)}
              onSave={(data) => {
                if (editingEmployee) {
                  updateEmployee({
                    ...data,
                    id: editingEmployee.id,
                  });
                } else {
                  addEmployee(data);
                }

                setShowModal(false);
              }}
            />
          </div>
        </div>
      )}
    </Layout>
  );
}
