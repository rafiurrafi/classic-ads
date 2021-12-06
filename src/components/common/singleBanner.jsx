import React from "react";

const SingleBanner = ({ title }) => {
  return (
    <section class="inner-section single-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="single-content">
              <h2>{title}</h2>
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
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
