import { createContext, useEffect, useState } from "react";
import employeesData from "../data/employees";

export const EmployeeContext = createContext();

export default function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState(() => {
    const stored = localStorage.getItem("employees");
    return stored ? JSON.parse(stored) : employeesData;
  });

  useEffect(() => {
    localStorage.setItem(
      "employees",
      JSON.stringify(employees)
    );
  }, [employees]);

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        setEmployees,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}