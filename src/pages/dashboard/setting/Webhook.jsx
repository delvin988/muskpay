import "../../../assets/scss/app.scss";
import "../../../assets/scss/iconly.scss";
import WebhookTbl from "../../../components/WebhookTbl.jsx";

export default function Webhook() {
  return (
    <>
      <div className="page-heading">
        <h2>Webhooks</h2>
        <p className="text-muted mb-0">
          Ensure that only one webhook is configured per event.
        </p>
      </div>

      <div className="page-content">
        <section className="row">
          <div className="col-12">
            <WebhookTbl />
          </div>
        </section>
      </div>
    </>
  );
}
