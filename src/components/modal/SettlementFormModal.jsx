import { useEffect, useState } from "react";

export default function SettlementFormModal() {
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
        New Request Settlement
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
              <h5 className="modal-title">New Request Settlement</h5>

              <button
                type="button"
                className="btn-close"
                onClick={() => setShow(false)}
              />
            </div>

            {/* BODY */}
            <div className="modal-body">
              <section id="multiple-column-form">
                <div className="row match-height">
                  <div className="col-12">
                    <form className="form">
                      <div className="row">

                        <div className="col-md-6 col-12">
                          <div className="form-group">
                            <label>Scode</label>
                            <input
                              type="text"
                              className="form-control"
                              disabled
                            />
                          </div>
                        </div>

                        <div className="col-md-6 col-12">
                          <div className="form-group">
                            <label>Available Balance</label>

                            <div className="input-group">
                              <span className="input-group-text">IDR</span>
                              <input type="text" className="form-control" disabled/>
                            </div>
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

                        <div className="col-md-6 col-12">
                          <div className="form-group">
                            <label>Bank Name</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>

                        <div className="col-md-6 col-12">
                          <div className="form-group">
                            <label>Beneficiary Account</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>

                        <div className="col-md-6 col-12">
                          <div className="form-group">
                            <label>Account Holder</label>
                            <input type="email" className="form-control" />
                          </div>
                        </div>

                        <div className="col-md-6 col-12">
                          <div className="form-group">
                            <label>Bank Code</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>

                        <div className="form-group col-12">
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              defaultChecked
                            />
                            <label>Remember Me</label>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
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
