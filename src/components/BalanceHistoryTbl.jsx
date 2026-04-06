import { useState } from "react";

export default function BalanceHistoryTbl() {
  const data = [
    {
      date: "2026-03-01",
      debit: 0,
      credit: 1000000,
      balance: 1000000,
      description: "Top Up",
      refType: "VA",
      refId: "VA123",
    },
    {
      date: "2026-03-02",
      debit: 250000,
      credit: 0,
      balance: 750000,
      description: "Payment",
      refType: "QRIS",
      refId: "QR001",
    },
    {
      date: "2026-03-03",
      debit: 0,
      credit: 500000,
      balance: 1250000,
      description: "Top Up",
      refType: "E-Wallet",
      refId: "EW123",
    },
    {
      date: "2026-03-04",
      debit: 100000,
      credit: 0,
      balance: 1150000,
      description: "Transfer",
      refType: "Bank",
      refId: "TRX999",
    },
  ];

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = data.filter((item) => {
    const matchesSearch = Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesType =
      typeFilter === "All" ||
      (typeFilter === "Debit" && item.debit > 0) ||
      (typeFilter === "Credit" && item.credit > 0);

    const matchesDate =
      (!dateFrom || item.date >= dateFrom) && (!dateTo || item.date <= dateTo);

    return matchesSearch && matchesType && matchesDate;
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
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Debit">Debit</option>
              <option value="Credit">Credit</option>
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
                <th>Date</th>
                <th>Debit</th>
                <th>Credit</th>
                <th>Balance</th>
                <th>Description</th>
                <th>Reference Type</th>
                <th>Reference ID</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.debit ? `IDR ${item.debit}` : "-"}</td>
                  <td>{item.credit ? `IDR ${item.credit}` : "-"}</td>
                  <td>{`IDR ${item.balance}`}</td>
                  <td>{item.description}</td>
                  <td>{item.refType}</td>
                  <td>{item.refId}</td>
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
