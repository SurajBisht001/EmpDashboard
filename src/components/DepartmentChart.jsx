/*import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export default function DepartmentChart({
  employees,
}) {
  const departmentData =
    employees.reduce((acc, emp) => {
      acc[emp.department] =
        (acc[emp.department] || 0) + 1;

      return acc;
    }, {});

  const colors = [
    "#4f46e5",
    "#ec4899",
    "#10b981",
    "#f59e0b",
    "#06b6d4",
    "#8b5cf6",
  ];

  const data = {
    labels: Object.keys(
      departmentData
    ),

    datasets: [
      {
        label:
          "Employees Count",

        data: Object.values(
          departmentData
        ),
        backgroundColor: Object.keys(
          departmentData
        ).map(
          (_, index) =>
            colors[
              index % colors.length
            ]
        ),
        borderColor: Object.keys(
          departmentData
        ).map(
          (_, index) =>
            colors[
              index % colors.length
            ]
        ),
        borderWidth: 1,
      },
    ],
  };

  return (
    <Bar
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: false,
      }}
      height={300}
      width={300}
    />
  );
} */