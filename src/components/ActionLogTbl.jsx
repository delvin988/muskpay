import { useState } from "react";

export default function ActionLogTbl() {
  const data = [
    {
      actionDate: "2026-04-09 11:01:01",
      action: "login",
      actionType: "authentication",
      reference: "Muskpay",
      user: "Muskpay",
      changes: `IP address: 112.78.169.82
User agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
Timestamp: 2026-04-09T04:01:01.812600Z`,
    },
    {
      actionDate: "2026-04-08 10:00:00",
      action: "create",
      actionType: "transaction",
      reference: "TRX001",
      user: "Admin",
      changes: "Created new transaction",
    },
    {
      actionDate: "2026-04-07 09:30:00",
      action: "update",
      actionType: "client",
      reference: "CL001",
      user: "Admin",
      changes: "Updated client data",
    },
  ];

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("All");
  const [actionFilter, setActionFilter] = useState("All");
  const [actionTypeFilter, setActionTypeFilter] = useState("All");
  const [userFilter, setUserFilter] = useState("All");

  const filteredData = data.filter((item) => {
    const matchesSearch = Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesAction =
      actionFilter === "All" || item.action === actionFilter;

    const matchesActionType =
      actionTypeFilter === "All" || item.actionType === actionTypeFilter;

    const matchesUser = userFilter === "All" || item.user === userFilter;

    const matchesDate =
      (!dateFrom || item.actionDate >= dateFrom) &&
      (!dateTo || item.actionDate <= dateTo);

    return (
      matchesSearch &&
      matchesAction &&
      matchesActionType &&
      matchesUser &&
      matchesDate
    );
  });

  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentData = filteredData.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="card-title mb-0">Filter</h5>
      </div>

      <div className="card-body">
        {/* FILTER */}
        <div className="row g-2 mb-3">
          <div className="col-md-3">
            <input
              type="date"
              className="form-control"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <input
              type="date"
              className="form-control"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
            />
          </div>

          <div className="col-md-2">
            <select
              className="form-select"
              value={actionFilter}
              onChange={(e) => setActionFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="create">create</option>
              <option value="update">update</option>
              <option value="delete">delete</option>
              <option value="login">login</option>
              <option value="logout">logout</option>
              <option value="login_failed">login_failed</option>
              <option value="manual_settlement">manual_settlement</option>
            </select>
          </div>
          <div className="col-md-2">
            <select
              className="form-select"
              value={actionTypeFilter}
              onChange={(e) => setActionTypeFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="settlement">settlement</option>
              <option value="transaction">transaction</option>
              <option value="disbursement">disbursement</option>
              <option value="authentication">authentication</option>
              <option value="client">client</option>
              <option value="user">user</option>
            </select>
          </div>
          <div className="col-md-2">
            <select
              className="form-select"
              value={userFilter}
              onChange={(e) => setUserFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Muskpay">Muskpay</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <div className="col-12 col-md-3 mt-2">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>

        {/* TABLE */}
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Action Date</th>
                <th>Action</th>
                <th>Action Type</th>
                <th>Reference</th>
                <th>User</th>
                <th>Changes</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((item, index) => (
                <tr key={index}>
                  <td>{item.actionDate}</td>
                  <td>{item.action}</td>
                  <td>{item.actionType}</td>
                  <td>{item.reference}</td>
                  <td>{item.user}</td>
                  <td style={{ whiteSpace: "pre-line" }}>{item.changes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="d-flex justify-content-end mt-3">
          <ul className="pagination mb-0">
            {[...Array(totalPages)].map((_, i) => (
              <li
                key={i}
                className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
