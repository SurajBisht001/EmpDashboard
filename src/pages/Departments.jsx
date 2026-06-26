import Layout from "../components/Layout";

export default function Departments() {
  return (
    <Layout>
      <div className="page">
        <h1>Departments</h1>
        <p>Manage all company departments here.</p>

        <div className="department-list">
          <div className="department-card">
            <h3>Human Resources</h3>
            <p>Employees: 8</p>
          </div>

          <div className="department-card">
            <h3>Engineering</h3>
            <p>Employees: 24</p>
          </div>

          <div className="department-card">
            <h3>Marketing</h3>
            <p>Employees: 12</p>
          </div>

          <div className="department-card">
            <h3>Finance</h3>
            <p>Employees: 6</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}