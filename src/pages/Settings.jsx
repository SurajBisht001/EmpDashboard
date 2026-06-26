import Layout from "../components/Layout";

export default function Settings() {
  return (
    <Layout>
      <div className="page">
        <h1>Settings</h1>
        <p>Manage your account and application preferences.</p>

        <div className="settings-container">

          <div className="settings-card">
            <h3>👤 Profile</h3>
            <p>Update your personal information.</p>
            <button>Edit Profile</button>
          </div>

          <div className="settings-card">
            <h3>🔒 Security</h3>
            <p>Change your password and security settings.</p>
            <button>Change Password</button>
          </div>

          <div className="settings-card">
            <h3>🌙 Theme</h3>
            <p>Switch between Light and Dark mode.</p>
            <button>Change Theme</button>
          </div>

          <div className="settings-card">
            <h3>🔔 Notifications</h3>
            <p>Manage email and app notifications.</p>
            <button>Manage</button>
          </div>

        </div>
      </div>
    </Layout>
  );
}