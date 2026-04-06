import channel from "../constant/PaymentChannel";

export default function PaymentChannel() {

  return (
    <div className="card">
      <div className="card-header">
        <h4>Payment Channel</h4>
      </div>

      {/* SCROLL AREA */}
      <div className="card-content pb-4" style={{ maxHeight:"710px", overflowY: "auto", overflowX : "hidden" }}>
        {channel.map((item, index) => (
          <div key={index} className="recent-message d-flex px-4 py-3 align-items-center">
            
            {/* CODE */}
            <div className="avatar avatar-lg bg-light-primary d-flex align-items-center justify-content-center">
              <span className="fw-bold text-primary">{item.code}</span>
            </div>

            {/* NAME + STATUS */}
            <div className="name ms-4">
              <h5 className="mb-1">{item.name}</h5>

              <h6 className={`mb-0 ${item.status === "Active" ? "text-success" : "text-danger"}`}>
                {item.status}
              </h6>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}