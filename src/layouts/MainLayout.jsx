import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";


export default function MainLayout({ children }) {
  return (
    <div id="app">
      <div id="sidebar">
        <Sidebar />
      </div>

      <div id="main">
        <header className="mb-3">
          <a href="#" className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3"></i>
          </a>
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
