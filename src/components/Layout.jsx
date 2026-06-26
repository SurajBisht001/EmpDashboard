import Sidebar from "./Sidebar";
import Navbar from "./NavBar";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Navbar />
        <main className="content">
          {children}
        </main>
      </div>
      </div>
  );
} 
