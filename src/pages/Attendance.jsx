import Layout from "../components/Layout";


export default function Attendance() {
  return (
    <Layout>
      <div className="page">
        <h1>Attendance</h1>
        <p>Track employee attendance and working hours.</p>

        <div className="attendance-table">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Department</th>
                <th>Status</th>
                <th>Check In</th>
                <th>Check Out</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Suraj</td>
                <td>Frontend</td>
                <td className="present">Present</td>
                <td>09:00 AM</td>
                <td>06:00 PM</td>
              </tr>

              <tr>
                <td>Rohan</td>
                <td>HR</td>
                <td className="leave">Leave</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>Komal</td>
                <td>Marketing</td>
                <td className="present">Present</td>
                <td>09:15 AM</td>
                <td>06:10 PM</td>
              </tr>

              <tr>
                <td>Aman</td>
                <td>Backend</td>
                <td className="absent">Absent</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}