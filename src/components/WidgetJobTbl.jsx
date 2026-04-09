import { useState } from "react";

export default function WidgetJobTbl() {
  const data = [
    {
      jobId: "JOB001",
      client: "Client A",
      type: "Deposit",
      modelId: "MDL001",
      status: "Pending",
      createdAt: "2026-03-01",
    },
    {
      jobId: "JOB002",
      client: "Client B",
      type: "Withdraw",
      modelId: "MDL002",
      status: "Processing",
      createdAt: "2026-03-02",
    },
    {
      jobId: "JOB003",
      client: "Client C",
      type: "Deposit",
      modelId: "MDL003",
      status: "Success",
      createdAt: "2026-03-03",
    },
    {
      jobId: "JOB004",
      client: "Client D",
      type: "Withdraw",
      modelId: "MDL004",
      status: "Failed",
      createdAt: "2026-03-04",
    },
  ];

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredData = data.filter((item) => {
    const matchesSearch = Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || item.status === statusFilter;

    const matchesType = typeFilter === "All" || item.type === typeFilter;

    const matchesDate =
      (!dateFrom || item.createdAt >= dateFrom) &&
      (!dateTo || item.createdAt <= dateTo);

    return matchesSearch && matchesStatus && matchesType && matchesDate;
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
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Success">Success</option>
              <option value="Failed">Failed</option>
            </select>
          </div>
          <div className="col-md-2">
            <select
              className="form-select"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Deposit">Deposit</option>
              <option value="Withdraw">Withdraw</option>
            </select>
          </div>
          <div className="col-md-2">
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
                <th>Job ID</th>
                <th>Client</th>
                <th>Type</th>
                <th>Model ID</th>
                <th>Status</th>
                <th>Created At</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((item, index) => (
                <tr key={index}>
                  <td>{item.jobId}</td>
                  <td>{item.client}</td>
                  <td>{item.type}</td>
                  <td>{item.modelId}</td>
                  <td>{item.status}</td>
                  <td>{item.createdAt}</td>
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
