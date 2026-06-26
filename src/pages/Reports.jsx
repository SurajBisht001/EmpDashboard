import Layout from "../components/Layout";

export default function Reports() {
  return (
    <Layout>
      <div className="page">
        <h1>Reports</h1>
        <p>View and download company reports.</p>

        <div className="reports-table">
          <table>
            <thead>
              <tr>
                <th>Report Name</th>
                <th>Category</th>
                <th>Date</th>
                <th>Status</th>
                <th>Download</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Employee Summary</td>
                <td>HR</td>
                <td>25 Jun 2026</td>
                <td className="completed">Completed</td>
                <td>
                  <button className="download-btn">Download</button>
                </td>
              </tr>

              <tr>
                <td>Attendance Report</td>
                <td>Attendance</td>
                <td>24 Jun 2026</td>
                <td className="completed">Completed</td>
                <td>
                  <button className="download-btn">Download</button>
                </td>
              </tr>

              <tr>
                <td>Payroll Report</td>
                <td>Finance</td>
                <td>23 Jun 2026</td>
                <td className="pending">Pending</td>
                <td>
                  <button className="download-btn" disabled>
                    Not Ready
                  </button>
                </td>
              </tr>

              <tr>
                <td>Performance Report</td>
                <td>Performance</td>
                <td>22 Jun 2026</td>
                <td className="completed">Completed</td>
                <td>
                  <button className="download-btn">Download</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}