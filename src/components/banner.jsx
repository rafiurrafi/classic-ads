import React from "react";
const Banner = (props) => {
  return (
    <section class="banner-part">
      <div class="container">
        <div class="banner-content">
          <h1>You can #Buy, #Rent, #Booking anything from here.</h1>
          <p>
            Buy and sell everything from used cars to mobile phones and
            computers, or search for property, jobs and more in the world.
          </p>
          <a href="ad-list-column3.html" class="btn btn-outline">
            <i class="fas fa-eye"></i>
            <span>Show all ads</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
