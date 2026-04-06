import "../../assets/scss/app.scss";
import "../../assets/scss/iconly.scss";
import BalanceTopupTbl from "../../components/BalanceTopupTbl.jsx";

export default function BalanceTopup() {
  return (
    <>
      <div className="page-heading">
        <h2>Balance Adjustment</h2>
        <p className="text-muted mb-0">
          Please contact administrator for manual topup
        </p>
      </div>

      <div className="page-content">
        <section className="row">

            <BalanceTopupTbl />
        </section>
      </div>
    </>
  );
}
