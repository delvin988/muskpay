import { useState } from "react";

export default function TransactionStatusTbl() {
  const data = [
    {
      date: "2026-03-01",
      type: "Credit",
      amount: "IDR 1.000.000",
      paymentType: "Virtual Account",
      channel: "BCA",
      status: "Success",
    },
    {
      date: "2026-03-02",
      type: "Debit",
      amount: "IDR 250.000",
      paymentType: "QRIS",
      channel: "GoPay",
      status: "Pending",
    },
    {
      date: "2026-03-03",
      type: "Credit",
      amount: "IDR 500.000",
      paymentType: "E-Wallet",
      channel: "OVO",
      status: "Success",
    },
    {
      date: "2026-03-04",
      type: "Debit",
      amount: "IDR 100.000",
      paymentType: "Transfer",
      channel: "Mandiri",
      status: "Failed",
    },
  ];

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const filteredData = data.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentData = filteredData.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">Transaction Table</h5>
      </div>

      <div className="card-body">
        {/* SEARCH */}
        <div className="mb-3">
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

        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Transaction Date</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Payment Type</th>
                <th>Channel</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.type}</td>
                  <td>{item.amount}</td>
                  <td>{item.paymentType}</td>
                  <td>{item.channel}</td>
                  <td>
                    <span
                      className={`badge ${
                        item.status === "Success"
                          ? "bg-success"
                          : item.status === "Pending"
                          ? "bg-warning"
                          : "bg-danger"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
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
                className={`page-item ${
                  currentPage === i + 1 ? "active" : ""
                }`}
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