import "../../../assets/scss/app.scss";
import "../../../assets/scss/iconly.scss";
import WidgetConfigTbl from "../../../components/WidgetConfigTbl.jsx";

export default function Role() {
  return (
    <>
      <div className="page-heading d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2">
        <h2 className="mb-0">Roles</h2>
      </div>

      <div className="page-content">
        <section className="row">
          <div className="col-12">
            <WidgetConfigTbl />
          </div>
        </section>
      </div>
    </>
  );
}
