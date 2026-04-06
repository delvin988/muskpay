import { useState } from "react";

export default function BalanceTopupTbl() {
  const data = [
    {
      topupDate: "2026-03-01",
      id: "VA123",
      amount: 1000000,
      status: "SUCCESS",
    },
    {
      topupDate: "2026-03-02",
      id: "QR001",
      amount: -250000,
      status: "SUCCESS",
    },
    {
      topupDate: "2026-03-03",
      id: "EW123",
      amount: 500000,
      status: "SUCCESS",
    },
    {
      topupDate: "2026-03-04",
      id: "TRX999",
      amount: -100000,
      status: "SUCCESS",
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

    const matchesType = typeFilter === "All";

    const matchesDate =
      (!dateFrom || item.topupDate >= dateFrom) &&
      (!dateTo || item.topupDate <= dateTo);

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
                <th>Topup Date</th>
                <th>ID</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((item, index) => (
                <tr key={index}>
                  <td>{item.topupDate}</td>
                  <td>{item.id}</td>
                  <td>
                    {item.amount > 0
                      ? `+ IDR ${item.amount}`
                      : `- IDR ${Math.abs(item.amount)}`}
                  </td>
                  <td>{item.status}</td>
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