import { useEffect, useRef, useState } from "react";
import * as FilePond from "filepond";
import "filepond/dist/filepond.min.css";

import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";

// register plugin
FilePond.registerPlugin(FilePondPluginImagePreview);

export default function DisbursementBulkFormModal() {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);
  const fileInputRef = useRef(null);
  const pondRef = useRef(null);

  useEffect(() => {
    if (show) {
      requestAnimationFrame(() => setAnimate(true));

      // init filepond
      if (fileInputRef.current && !pondRef.current) {
        pondRef.current = FilePond.create(fileInputRef.current, {
          allowMultiple: true,
          maxFiles: 3,

          // VALIDATION
          acceptedFileTypes: ["application/pdf"],
          labelFileTypeNotAllowed: "File harus PDF",

          maxFileSize: "2MB",
          labelMaxFileSizeExceeded: "File terlalu besar",

          // TEXT
          labelIdle:
            'Drag & Drop file atau <span class="filepond--label-action">Browse</span>',
        });
      }
    } else {
      setAnimate(false);
    }

    return () => {
      if (pondRef.current) {
        pondRef.current.destroy();
        pondRef.current = null;
      }
    };
  }, [show]);

  // HANDLE SUBMIT (UPLOAD KE BACKEND)
  const handleSubmit = () => {
    console.log(pondRef.current.getFiles());
  };

  // contoh fetch ke backend

  return (
    <>
      {/* BUTTON */}
      <button
        className="btn btn-primary rounded-pill"
        onClick={() => setShow(true)}
      >
        Bulk Disbursement
      </button>

      {/* MODAL */}
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
              <h5 className="modal-title">Upload Disbursement File</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShow(false)}
              />
            </div>

            {/* BODY (FILE UPLOAD) */}
            <div className="modal-body">
              <div className="card mb-0">
                <div className="card-header">
                  <h5 className="card-title">File Upload</h5>
                </div>

                <div className="card-content">
                  <div className="card-body">
                    <p className="card-text">
                      Upload file disbursement (PDF only, max 2MB)
                    </p>

                    <input type="file" ref={fileInputRef} />
                  </div>
                </div>
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

              <button className="btn btn-primary" onClick={handleSubmit}>
                Submit
              </button>
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
