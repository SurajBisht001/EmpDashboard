import Layout from "../components/Layout";

export default function Performance() {
  return (
    <Layout>
      <div className="page">
        <h1>Performance</h1>
        <p>Monitor employee performance and ratings.</p>

        <div className="performance-table">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Department</th>
                <th>Tasks Completed</th>
                <th>Rating</th>
                <th>Performance</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Suraj</td>
                <td>Frontend</td>
                <td>48</td>
                <td>4.9 ⭐</td>
                <td className="excellent">Excellent</td>
              </tr>

              <tr>
                <td>Rohan</td>
                <td>HR</td>
                <td>40</td>
                <td>3.5 ⭐</td>
                <td className="average">Average</td>
              </tr>

              <tr>
                <td>Komal</td>
                <td>Marketing</td>
                <td>32</td>
                <td>4.4 ⭐</td>
                <td className="good">Good</td>
              </tr>

              <tr>
                <td>Aman</td>
                <td>Finance</td>
                <td>22</td>
                <td>2.9 ⭐</td>
                <td className="poor">Needs Improvement</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}