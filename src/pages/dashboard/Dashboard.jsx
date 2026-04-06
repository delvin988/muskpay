import React, { useEffect } from "react";

import "../../assets/scss/app.scss";
import "../../assets/scss/iconly.scss";
import ApexCharts from "apexcharts";
import face1 from "../../assets/static/images/faces/1.jpg";
import TransactionStatusTbl from "../../components/TransactionStatusTbl.jsx";
import PaymentChannel from "../../components/PaymentChannel.jsx";

export default function Dashboard() {
  

  return (
    <>
      <div className="page-heading">
        <h2>Dashboard</h2>
      </div>

      <div className="page-content">
        <section className="row">
          <div className="col-12 col-lg-9">
            <div className="row" id="basic-table">
              <div className="col-12">
                <div className="card">
                  <div className="card-header pb-1">
                    <h4 className="card-title">Account Balance</h4>
                  </div>
                  <div className="card-content">
                    <div className="card-body pt-1">
                      {/* Table with outer spacing */}
                      <div className="card-body">
                        <div className="row g-3">
                          {/* Available Balance */}
                          <div className="col-12 col-md-6">
                            <div className="p-3 rounded border-start border-4 border-primary h-100">
                              <p className="text-muted mb-1">
                                Available Balance
                              </p>
                              <h5 className="fw-bold text-primary mb-0">
                                IDR 4.897.000
                              </h5>
                            </div>
                          </div>

                          {/* Unsettled Balance */}
                          <div className="col-12 col-md-6">
                            <div className="p-3 rounded border-start border-4 border-warning h-100">
                              <p className="text-muted mb-1">
                                Unsettled Balance
                              </p>
                              <h5 className="fw-bold text-warning mb-0">
                                IDR 0
                              </h5>
                              <small className="text-muted">
                                from 0 transactions
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-lg-3 col-md-6">
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
                          Gross Transaction
                        </h6>
                        <h6 className="font-extrabold mb-0">112.000</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6 col-lg-3 col-md-6">
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
                          Nett Transaction
                        </h6>
                        <h6 className="font-extrabold mb-0">183.000</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body px-4 py-4-5">
                    <div className="row">
                      <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start ">
                        <div className="stats-icon green mb-2">
                          <i className="iconly-boldActivity"></i>
                        </div>
                      </div>
                      <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                        <h6 className="text-muted font-semibold">
                          Total Transaction
                        </h6>
                        <h6 className="font-extrabold mb-0">80.000</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body px-4 py-4-5">
                    <div className="row">
                      <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start ">
                        <div className="stats-icon red mb-2">
                          <i className="iconly-boldTick-Square"></i>
                        </div>
                      </div>
                      <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                        <h6 className="text-muted font-semibold">
                          Transaction Success
                        </h6>
                        <h6 className="font-extrabold mb-0">112</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <TransactionStatusTbl />
          </div>

          {/* RIGHT SIDE */}

          <div className="col-12 col-lg-3">
            <div className="card">
              <div className="card-body py-4 px-4">
                <div className="d-flex align-items-center">
                  <div className="avatar avatar-xl">
                    <img src={face1} />
                  </div>

                  <div className="ms-3 name">
                    <h5 className="font-bold">John Doe</h5>

                    <h6 className="text-muted mb-0">@johndoe</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-100 d-flex flex-column">
              <PaymentChannel />
            </div>
            
          </div>
        </section>
      </div>
    </>
  );
}
