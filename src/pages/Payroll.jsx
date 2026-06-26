import Layout from "../components/Layout";

export default function Payroll() {
  return (
    <Layout>
      <div className="page">
        <h1>Payroll</h1>
        <p>Manage employee salaries and payment status.</p>

        <div className="payroll-table">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Bonus</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Suraj</td>
                <td>Frontend</td>
                <td>₹75,000</td>
                <td>₹5,000</td>
                <td className="paid">Paid</td>
              </tr>

              <tr>
                <td>Rohan</td>
                <td>HR</td>
                <td>₹55,000</td>
                <td>₹3,000</td>
                <td className="pending">Pending</td>
              </tr>

              <tr>
                <td>Komal</td>
                <td>Marketing</td>
                <td>₹60,000</td>
                <td>₹4,000</td>
                <td className="paid">Paid</td>
              </tr>

              <tr>
                <td>Aman</td>
                <td>Backend</td>
                <td>₹68,000</td>
                <td>₹2,500</td>
                <td className="pending">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}