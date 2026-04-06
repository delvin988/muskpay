import "../../assets/scss/app.scss";
import "../../assets/scss/iconly.scss";
import BalanceHistoryTbl from "../../components/BalanceHistoryTbl.jsx";

export default function BalanceHistory() {
  return (
    <>
      <div className="page-heading">
        <h2>Balance Histories</h2>
      </div>

      <div className="page-content">
        <section className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-6 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-body px-4 py-4-5">
                    <div className="row">
                      <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start ">
                        <div className="stats-icon purple mb-2">
                          <i className="iconly-boldWallet"></i>
                        </div>
                      </div>
                      <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                        <h6 className="text-muted font-semibold">
                          Available Balance
                        </h6>
                        <h6 className="font-extrabold mb-0"> IDR 4.897.000</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-body px-4 py-4-5">
                    <div className="row">
                      <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start ">
                        <div className="stats-icon blue mb-2">
                          <i className="iconly-boldChart"></i>
                        </div>
                      </div>
                      <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                        <h6 className="text-muted font-semibold">
                          Reserved funds for disbursement
                        </h6>
                        <h6 className="font-extrabold mb-0">IDR 0</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <BalanceHistoryTbl />
          </div>
        </section>
      </div>
    </>
  );
}
