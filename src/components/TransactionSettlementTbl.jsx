import { useState } from "react";

export default function TransactionSettlementTbl() {
  const data = [
    {
      settlementId: "STL001",
      status: "Pending",
      totalAmount: 1000000,
      netAmount: 980000,
      transactions: 10,
      startedAt: "2026-03-01",
      settledAt: "-",
    },
    {
      settlementId: "STL002",
      status: "Processing",
      totalAmount: 2000000,
      netAmount: 1950000,
      transactions: 20,
      startedAt: "2026-03-02",
      settledAt: "-",
    },
    {
      settlementId: "STL003",
      status: "Success",
      totalAmount: 1500000,
      netAmount: 1470000,
      transactions: 15,
      startedAt: "2026-03-03",
      settledAt: "2026-03-04",
    },
    {
      settlementId: "STL004",
      status: "Failed",
      totalAmount: 500000,
      netAmount: 0,
      transactions: 5,
      startedAt: "2026-03-04",
      settledAt: "-",
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

    const matchesDate =
      (!dateFrom || item.startedAt >= dateFrom) &&
      (!dateTo || item.startedAt <= dateTo);

    return matchesSearch && matchesStatus && matchesDate;
  });

  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentData = filteredData.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="card-title mb-0">Filter</h5>

        <a href="#" className="btn btn-primary rounded-pill">
          Download
        </a>
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
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
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
                <th>Settlement ID</th>
                <th>Status</th>
                <th>Total Amount</th>
                <th>Net Amount</th>
                <th>Transactions</th>
                <th>Started At</th>
                <th>Settled At</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((item, index) => (
                <tr key={index}>
                  <td>{item.settlementId}</td>
                  <td>{item.status}</td>
                  <td>IDR {item.totalAmount}</td>
                  <td>IDR {item.netAmount}</td>
                  <td>{item.transactions}</td>
                  <td>{item.startedAt}</td>
                  <td>{item.settledAt}</td>
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
