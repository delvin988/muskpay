import { useState } from "react";

export default function TransactionStsTbl() {
  const data = [
    {
      transactionDate: "2026-03-01",
      merchantOrderId: "ORD001",
      amount: 1000000,
      nettAmount: 980000,
      status: "Success",
      isSettled: "Settled",
      paymentType: "QRIS",
      channel: "QRIS",
      referenceCode: "REF001",
      paymentTime: "2026-03-01 10:00",
      filterBy: "Created At",
    },
    {
      transactionDate: "2026-03-02",
      merchantOrderId: "ORD002",
      amount: 500000,
      nettAmount: 490000,
      status: "Pending",
      isSettled: "Unsettled",
      paymentType: "Virtual Account",
      channel: "BCA VA",
      referenceCode: "REF002",
      paymentTime: "2026-03-02 11:00",
      filterBy: "Payment At",
    },
    {
      transactionDate: "2026-03-03",
      merchantOrderId: "ORD003",
      amount: 750000,
      nettAmount: 730000,
      status: "Success",
      isSettled: "Settled",
      paymentType: "E-Wallet",
      channel: "OVO",
      referenceCode: "REF003",
      paymentTime: "2026-03-03 12:00",
      filterBy: "Payment At",
    },
    {
      transactionDate: "2026-03-04",
      merchantOrderId: "ORD004",
      amount: 300000,
      nettAmount: 290000,
      status: "Failed",
      isSettled: "Unsettled",
      paymentType: "Bank Transfer",
      channel: "BCA",
      referenceCode: "REF004",
      paymentTime: "2026-03-04 13:00",
      filterBy: "Created At",
    },
  ];

  const [search, setSearch] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterBy, setFilterBy] = useState("All");
  const [settlementStatus, setSettlementStatus] = useState("All");
  const [paymentType, setPaymentType] = useState("All");
  const [groupBy, setGroupBy] = useState("-");
  const [sortOrder, setSortOrder] = useState("Ascending");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredData = data.filter((item) => {
    const matchesSearch = Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilterBy = filterBy === "All" || item.filterBy === filterBy;

    const matchesSettlement =
      settlementStatus === "All" || item.isSettled === settlementStatus;

    const matchesPaymentType =
      paymentType === "All" || item.paymentType === paymentType;

    const matchesDate =
      (!dateFrom || item.transactionDate >= dateFrom) &&
      (!dateTo || item.transactionDate <= dateTo);

    return (
      matchesSearch &&
      matchesFilterBy &&
      matchesSettlement &&
      matchesPaymentType &&
      matchesDate
    );
  });

  const sortedData = [...filteredData].sort((a, b) => {
    let field = "transactionDate";

    if (groupBy === "Payment Type") field = "paymentType";
    if (groupBy === "Status") field = "status";

    if (sortOrder === "Ascending") {
      return a[field] > b[field] ? 1 : -1;
    } else {
      return a[field] < b[field] ? 1 : -1;
    }
  });

  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentData = sortedData.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sortedData.length / rowsPerPage);

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="card-title mb-0">Filters</h5>
        <a href="#" className="btn btn-primary rounded-pill">
          Download
        </a>
      </div>

      <div className="card-body">
        {/* FILTER */}
        <div className="row g-3 mb-4 align-items-end">
          <div className="col-md-3">
            <label className="form-label fw-bold">Filter by</label>
            <select
              className="form-select"
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Created At">Created At</option>
              <option value="Payment At">Payment At</option>
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label fw-bold">From</label>
            <input
              type="date"
              className="form-control"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label fw-bold">Until</label>
            <input
              type="date"
              className="form-control"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label fw-bold">Settlement Status</label>
            <select
              className="form-select"
              value={settlementStatus}
              onChange={(e) => setSettlementStatus(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Settled">Settled</option>
              <option value="Unsettled">Unsettled</option>
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label fw-bold">Payment Type</label>
            <select
              className="form-select"
              value={paymentType}
              onChange={(e) => setPaymentType(e.target.value)}
            >
              <option value="All">All</option>
              <option value="QRIS">QRIS</option>
              <option value="Virtual Account">Virtual Account</option>
              <option value="E-Wallet">E-Wallet</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label fw-bold">Status</label>
            <select
              className="form-select"
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value={"All"}>All</option>
              <option value={"Pending"}>Pending</option>
              <option value={"Failed"}>Failed</option>
              <option value={"Success"}>Success</option>
            </select>
          </div>

          {/* BUTTON */}
          <div className="d-flex align-items-end ms-auto">
            <button className="btn btn-primary">Apply filters</button>
          </div>
        </div>

        {/* GROUP BY + SEARCH */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex gap-2">
            <select
              className="form-select"
              value={groupBy}
              onChange={(e) => setGroupBy(e.target.value)}
            >
              <option>-</option>
              <option>Transaction Date</option>
              <option>Payment Type</option>
            </select>

            {groupBy !== "-" && (
              <select
                className="form-select"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option>Ascending</option>
                <option>Descending</option>
              </select>
            )}
          </div>

          {/* SEARCH */}
          <div style={{ minWidth: "300px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search transaction..."
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
                <th>Transaction Date</th>
                <th>Merchant Order ID</th>
                <th>Amount</th>
                <th>Nett Amount</th>
                <th>Status</th>
                <th>Is Settled</th>
                <th>Payment Type</th>
                <th>Channel</th>
                <th>Reference Code</th>
                <th>Payment Time</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((item, index) => (
                <tr key={index}>
                  <td>{item.transactionDate}</td>
                  <td>{item.merchantOrderId}</td>
                  <td>{`IDR ${item.amount}`}</td>
                  <td>{`IDR ${item.nettAmount}`}</td>
                  <td>{item.status}</td>
                  <td>{item.isSettled}</td>
                  <td>{item.paymentType}</td>
                  <td>{item.channel}</td>
                  <td>{item.referenceCode}</td>
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
