import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MainLayout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  
  const closeSidebar = () => {
    document.getElementById("sidebar").classList.remove("active");
    setShowSidebar(false);
  };

  return (
    <div id="app">
      <div id="sidebar">
        <Sidebar closeSidebar={closeSidebar} />
      </div>

      <div id="main">
        {showSidebar && (
          <div
            className="sidebar-backdrop"
            onClick={() => {
              document.getElementById("sidebar").classList.remove("active");
              setShowSidebar(false);
            }}
          ></div>
        )}
        <header className="mb-3">
          <button
            className="burger-btn d-block d-xl-none border-0 bg-transparent"
            onClick={() => {
              const sidebar = document.getElementById("sidebar");
              sidebar.classList.toggle("active");
              setShowSidebar(sidebar.classList.contains("active"));
            }}
          >
            <i className="bi bi-justify fs-3"></i>
          </button>
        </header>

        <Outlet />

        <footer>
          <div className="footer clearfix mb-0 text-muted">
            <div className="float-start">
              <p>2026 &copy; Dashboard</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
