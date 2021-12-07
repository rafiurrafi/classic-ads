import React from "react";

const SingleBanner = ({ title }) => {
  return (
    <section className="inner-section single-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="single-content">
              <h2>{title}</h2>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  ad-list-column1
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBanner;
