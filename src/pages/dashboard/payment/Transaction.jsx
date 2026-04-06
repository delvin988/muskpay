import "../../../assets/scss/app.scss";
import "../../../assets/scss/iconly.scss";
import TransactionStatusTbl from "../../../components/TransactionStatusTbl.jsx";
import TransactionStsTbl from "../../../components/TransactionStsTbl.jsx";

export default function Transaction() {
  return (
    <>
      <div className="page-heading d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2">
        <h2 className="mb-0">Transactions</h2>
      </div>

      <div className="page-content">
        <section className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-6 col-lg-4 col-md-6">
                <div className="card">
                  <div className="card-body px-4 py-4-5">
                    <div className="row">
                      <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start ">
                        {/* <div className="stats-icon purple mb-2">
                          <i className="iconly-boldWallet"></i>
                        </div> */}
                      </div>
                      <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                        <h6 className="text-muted font-semibold">
                          Total Transaction
                        </h6>
                        <h6 className="font-extrabold mb-0"> 0 </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6 col-lg-4 col-md-6">
                <div className="card">
                  <div className="card-body px-4 py-4-5">
                    <div className="row">
                      <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start ">
                        {/* <div className="stats-icon blue mb-2">
                          <i className="iconly-boldChart"></i>
                        </div> */}
                      </div>
                      <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                        <h6 className="text-muted font-semibold">
                          Gross Transaction
                        </h6>
                        <h6 className="font-extrabold mb-0">IDR 0</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6 col-lg-4 col-md-6">
                <div className="card">
                  <div className="card-body px-4 py-4-5">
                    <div className="row">
                      <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start ">
                        {/* <div className="stats-icon blue mb-2">
                          <i className="iconly-boldTime-Circle"></i>
                        </div> */}
                      </div>
                      <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                        <h6 className="text-muted font-semibold">
                          Nett Transaction
                        </h6>
                        <h6 className="font-extrabold mb-0">IDR 0</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <TransactionStsTbl />
          </div>
        </section>
      </div>
    </>
  );
}
