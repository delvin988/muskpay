import { useState } from "react";

export default function DisbursementTbl() {
  const data = [
    {
      requestDate: "2026-03-01",
      id: "REQ001",
      status: "Success",
      merchantTrxId: "MTX123",
      amount: 1000000,
      fee: 5000,
      bankCode: "014",
      bankName: "BCA",
      accountNumber: "1234567890",
      paymentTime: "2026-03-01 10:00",
    },
    {
      requestDate: "2026-03-02",
      id: "REQ002",
      status: "Pending",
      merchantTrxId: "MTX124",
      amount: 750000,
      fee: 4000,
      bankCode: "008",
      bankName: "Mandiri",
      accountNumber: "9876543210",
      paymentTime: "-",
    },
    {
      requestDate: "2026-03-03",
      id: "REQ003",
      status: "Success",
      merchantTrxId: "MTX125",
      amount: 500000,
      fee: 3000,
      bankCode: "009",
      bankName: "BNI",
      accountNumber: "1122334455",
      paymentTime: "2026-03-03 14:20",
    },
    {
      requestDate: "2026-03-04",
      id: "REQ004",
      status: "Failed",
      merchantTrxId: "MTX126",
      amount: 250000,
      fee: 2000,
      bankCode: "002",
      bankName: "BRI",
      accountNumber: "5566778899",
      paymentTime: "-",
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
      (!dateFrom || item.requestDate >= dateFrom) &&
      (!dateTo || item.requestDate <= dateTo);

    return matchesSearch && matchesDate && matchesStatus;
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
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value={"All"}>All</option>
              <option value={"Success"}>Success</option>
              <option value={"Pending"}>Pending</option>
              <option value={"Valid"}>Valid</option>
              <option value={"Processing"}>Processing</option>
              <option value={"Failed"}>Failed</option>
            </select>
          </div>

          <div className="col-md-4">
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
                <th>Request Date</th>
                <th>ID</th>
                <th>Status</th>
                <th>Merchant Transaction ID</th>
                <th>Amount</th>
                <th>Fee</th>
                <th>Bank Code</th>
                <th>Bank Name</th>
                <th>Account Number</th>
                <th>Payment Time</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((item, index) => (
                <tr key={index}>
                  <td>{item.requestDate}</td>
                  <td>{item.id}</td>
                  <td>{item.status}</td>
                  <td>{item.merchantTrxId}</td>
                  <td>{`IDR ${item.amount}`}</td>
                  <td>{`IDR ${item.fee}`}</td>
                  <td>{item.bankCode}</td>
                  <td>{item.bankName}</td>
                  <td>{item.accountNumber}</td>
                  <td>{item.paymentTime}</td>
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
