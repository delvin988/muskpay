import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../assets/static/images/logo/logo.svg";

export default function Sidebar({ closeSidebar }) {
  const location = useLocation();
  const [showReport, setShowReport] = useState(false);
  const [showSettlement, setShowSettlement] = useState(false);
  const [showPayments, setShowPayments] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const toggle = document.getElementById("toggle-dark");

    if (!toggle) return;

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      toggle.checked = true;
    }

    toggle.addEventListener("change", function () {
      if (this.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    });

    return () => {
      toggle.removeEventListener("change", () => {});
    };
  }, []);

  return (
    <div className="sidebar-wrapper active">
      <div className="sidebar-header position-relative">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo">
            <Link
              to="/"
              className="sidebar-link"
              onClick={() => {
                closeSidebar();
              }}
            >
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
        </div>
      </div>

      <div className="sidebar-menu">
        <ul className="menu">
          <li className="sidebar-title">Menu</li>

          {/* Dashboard */}
          <li
            className={`sidebar-item ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            <Link
              to="/"
              className="sidebar-link"
              onClick={() => {
                closeSidebar();
              }}
            >
              <i className="bi bi-grid-fill"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          {/* Balance */}
          <li
            className={`sidebar-item ${
              location.pathname === "/admin/balance-logs" ? "active" : ""
            }`}
          >
            <Link
              to="/admin/balance-logs"
              className="sidebar-link"
              onClick={() => {
                closeSidebar();
              }}
            >
              <i className="bi bi-stack"></i>
              <span>Balance Histories</span>
            </Link>
          </li>

          {/* Balance Adjustment */}
          <li
            className={`sidebar-item ${
              location.pathname === "/admin/balance-topups" ? "active" : ""
            }`}
          >
            <Link
              to="/admin/balance-topups"
              className="sidebar-link"
              onClick={() => {
                closeSidebar();
              }}
            >
              <i className="bi bi-arrow-left-right"></i>
              <span>Balance Adjustment</span>
            </Link>
          </li>

          {/* Settlement & Payout */}
          <li
            className={`sidebar-item has-sub ${showSettlement ? "active" : ""}`}
          >
            <a
              href="#"
              className="sidebar-link d-flex justify-content-between align-items-center"
              onClick={(e) => {
                e.preventDefault();
                setShowSettlement(!showSettlement);
              }}
            >
              <div>
                <i className="bi bi-cash-stack"></i>
                <span>Settlement & Payout</span>
              </div>
              <i className="bi bi-chevron-down"></i>
            </a>

            <ul className={`submenu ${showSettlement ? "active" : ""}`}>
              <li className="submenu-item">
                <Link
                  to="/admin/settlements"
                  className="submenu-link"
                  onClick={() => {
                    document
                      .getElementById("sidebar")
                      .classList.remove("active");
                    setShowSettlement(false);
                    closeSidebar();
                  }}
                  style={{ color: "#0d6efd" }}
                >
                  Request Settlements
                </Link>
              </li>
              <li className="submenu-item">
                <Link
                  to="/admin/inquiries"
                  className="submenu-link"
                  onClick={() => {
                    document
                      .getElementById("sidebar")
                      .classList.remove("active");
                    setShowSettlement(false);
                    closeSidebar();
                  }}
                  style={{ color: "#0d6efd" }}
                >
                  Disbursements
                </Link>
              </li>
            </ul>
          </li>

          {/* Payments */}
          <li
            className={`sidebar-item has-sub ${showPayments ? "active" : ""}`}
          >
            <a
              href="#"
              className="sidebar-link d-flex justify-content-between align-items-center"
              onClick={(e) => {
                e.preventDefault();
                setShowPayments(!showPayments);
              }}
            >
              <div>
                <i className="bi bi-cpu"></i>
                <span>Payments</span>
              </div>
              <i className="bi bi-chevron-down"></i>
            </a>

            <ul className={`submenu ${showPayments ? "active" : ""}`}>
              <li className="submenu-item">
                <Link
                  to="/admin/transactions"
                  className="submenu-link"
                  onClick={() => {
                    document
                      .getElementById("sidebar")
                      .classList.remove("active");
                      setShowPayments(false);
                      closeSidebar();
                  }}
                  style={{ color: "#0d6efd" }}
                >
                  Transactions
                </Link>
              </li>
              <li className="submenu-item">
                <Link
                  to="/admin/transaction-settlements"
                  className="submenu-link"
                  onClick={() => {
                    document
                      .getElementById("sidebar")
                      .classList.remove("active");
                      setShowPayments(false);
                      closeSidebar();
                  }}
                  style={{ color: "#0d6efd" }}
                >
                  Transaction Settlements
                </Link>
              </li>
              <li className="submenu-item">
                <Link
                  to="/admin/widget-jobs"
                  className="submenu-link"
                  onClick={() => {
                    document
                      .getElementById("sidebar")
                      .classList.remove("active");
                      setShowPayments(false);
                      closeSidebar();
                  }}
                  style={{ color: "#0d6efd" }}
                >
                  Widget Jobs
                </Link>
              </li>
            </ul>
          </li>

          {/* Action Logs */}
          <li
            className={`sidebar-item ${
              location.pathname === "/admin/action-logs" ? "active" : ""
            }`}
          >
            <Link
              to="/admin/action-logs"
              className="sidebar-link"
              onClick={() => {
                closeSidebar();
              }}
            >
              <i className="bi bi-clock-history"></i>
              <span>Action Logs</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
