import { useEffect, useState } from "react";
import Select from "react-select";
import channel from "../../constant/PaymentChannel";

export default function DisbursementFormModal() {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (show) {
      requestAnimationFrame(() => {
        setAnimate(true);
      });
    } else {
      setAnimate(false);
    }
  }, [show]);
  return (
    <>
      {/* BUTTON */}
      <button
        className="btn btn-primary rounded-pill"
        onClick={() => setShow(true)}
      >
        Create Disbursement
      </button>

      {/* MODAL WRAPPER */}
      <div
        className={`modal fade ${show ? "show d-block" : ""}`}
        tabIndex="-1"
        style={{
          transition: "opacity 0.25s ease",
          opacity: show ? 1 : 0,
        }}
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
          style={{
            transform: animate
              ? "translateY(0px) scale(1)"
              : "translateY(15px) scale(0.96)",
            opacity: animate ? 1 : 0,
            transition: "all 250ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div className="modal-content">
            {/* HEADER */}
            <div className="modal-header">
              <h5 className="modal-title">Disbursement Form</h5>

              <button
                type="button"
                className="btn-close"
                onClick={() => setShow(false)}
              />
            </div>

            {/* BODY */}
            <div className="modal-body">
              <div className="p-3 border rounded">
                <div className="mb-3">
                  <h6 className="mb-1">Detail Information</h6>
                  <p
                    className="text-muted mb-0"
                    style={{ fontSize: "0.85rem" }}
                  >
                    Fill in the following information to create a disbursement
                  </p>
                </div>
                <section id="multiple-column-form">
                  <div className="row match-height">
                    <div className="col-12">
                      <form className="form">
                        <div className="row">
                          <div className="col-md-6 col-12">
                            <div className="form-group">
                              <label>Account Name*</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>

                          <div className="col-md-6 col-12">
                            <div className="form-group">
                              <label>Account Number*</label>

                              <div className="input-group">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6 col-12">
                            <div className="form-group">
                              <label>Bank Code*</label>

                              <Select
                                options={channel
                                  .filter((bank) => bank.status === "Active")
                                  .map((bank) => ({
                                    value: bank.code,
                                    label: `${bank.code} - ${bank.name}`,
                                  }))}
                                placeholder="Select Bank"
                              />
                            </div>
                          </div>

                          <div className="col-md-6 col-12">
                            <div className="form-group">
                              <label>Amount*</label>

                              <div className="input-group">
                                <span className="input-group-text">IDR</span>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12 col-12">
                            <div className="form-group">
                              <label>Merchant Transaction ID</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>

                          {/* 2FA SECTION */}
                          <div className="col-12 mt-3">
                            <div className="p-3 border rounded">
                              {/* TITLE */}
                              <h6 className="mb-1">2FA Code Information</h6>
                              <p
                                className="text-muted mb-3"
                                style={{ fontSize: "0.85rem" }}
                              >
                                Enter the 2FA code from your authenticator app
                              </p>

                              {/* INPUT */}
                              <div className="form-group mb-2">
                                <label>
                                  2FA Code{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input type="text" className="form-control" />
                              </div>

                              {/* CHECKBOX + BUTTON (RAPI KANAN) */}
                              <div className="d-flex justify-content-between align-items-center mt-2">
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="authCheck"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="authCheck"
                                  >
                                    Authenticated
                                  </label>
                                </div>

                                <button
                                  type="button"
                                  className="btn btn-outline-primary btn-sm px-3"
                                >
                                  Validate
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* FOOTER */}
            <div className="modal-footer">
              <button
                className="btn btn-light-secondary"
                onClick={() => setShow(false)}
              >
                Close
              </button>

              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>

      {/* BACKDROP */}
      {show && (
        <div
          className="modal-backdrop fade show"
          style={{
            backgroundColor: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            opacity: animate ? 1 : 0,
            transition: "opacity 200ms ease",
          }}
        />
      )}
    </>
  );
}
