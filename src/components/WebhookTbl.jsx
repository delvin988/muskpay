import { useState } from "react";

export default function WebhookTbl() {
  const data = [
    {
      event: "transaction.success",
      baseUrl: "https://api.muskpay.com",
      path: "/webhook/transaction-success",
    },
    {
      event: "transaction.failed",
      baseUrl: "https://api.clienta.com",
      path: "/webhook/transaction-failed",
    },
    {
      event: "settlement.completed",
      baseUrl: "https://api.clientb.com",
      path: "/webhook/settlement",
    },
    {
      event: "disbursement.success",
      baseUrl: "https://api.clientc.com",
      path: "/webhook/disbursement",
    },
  ];

  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = data.filter((item) => {
    const matchesSearch = Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesSearch;
  });

  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentData = filteredData.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <div className="card">
      <div className="card-body">
        {/* FILTER */}
        <div className="row g-2 mb-3 justify-content-end">
          <div className="col-md-3">
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
                <th>Event</th>
                <th>Base URL</th>
                <th>Path</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((item, index) => (
                <tr key={index}>
                  <td>{item.event}</td>
                  <td>{item.baseUrl}</td>
                  <td>{item.path}</td>
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
