import { useState } from "react";

export default function WidgetConfigTbl() {
  const data = [
    {
      whitelabel: "Muskpay",
      active: "Yes",
      robot: "Enabled",
      createdAt: "2026-03-01",
    },
    {
      whitelabel: "Client A",
      active: "No",
      robot: "Disabled",
      createdAt: "2026-03-02",
    },
    {
      whitelabel: "Client B",
      active: "Yes",
      robot: "Enabled",
      createdAt: "2026-03-03",
    },
    {
      whitelabel: "Client C",
      active: "Yes",
      robot: "Disabled",
      createdAt: "2026-03-04",
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
                <th>Whitelabel</th>
                <th>Active</th>
                <th>Robot</th>
                <th>Created</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((item, index) => (
                <tr key={index}>
                  <td>{item.whitelabel}</td>
                  <td>{item.active}</td>
                  <td>{item.robot}</td>
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
