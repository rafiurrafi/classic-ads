import React from "react";
import "../../../styles/seller/sellerAdsPost.scss";

const SellerAdsPost = () => {
  return (
    <section class="adpost-part mt-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <form class="adpost-form">
              <div class="adpost-card">
                <div class="adpost-title">
                  <h3>Ad Information</h3>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label class="form-label">Product Title</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Type your product title here"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label class="form-label">product image</label>
                      <input type="file" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label class="form-label">Product Category</label>
                      <select class="form-control custom-select">
                        <option selected>Select Category</option>
                        <option value="1">property</option>
                        <option value="2">electronics</option>
                        <option value="3">automobiles</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label class="form-label">Price</label>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Enter your pricing amount"
                      />
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-4">
                    <div class="form-group">
                      <ul class="form-check-list">
                        <li>
                          <label class="form-label">price condition</label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="form-check"
                            id="fix-check"
                          />
                          <label for="fix-check" class="form-check-text">
                            fixed
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="form-check"
                            id="nego-check"
                          />
                          <label for="nego-check" class="form-check-text">
                            negotiable
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="form-check"
                            id="day-check"
                          />
                          <label for="day-check" class="form-check-text">
                            daily
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="form-check"
                            id="week-check"
                          />
                          <label for="week-check" class="form-check-text">
                            weekly
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="form-check"
                            id="month-check"
                          />
                          <label for="month-check" class="form-check-text">
                            monthly
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="form-check"
                            id="year-check"
                          />
                          <label for="year-check" class="form-check-text">
                            yearly
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-4">
                    <div class="form-group">
                      <ul class="form-check-list">
                        <li>
                          <label class="form-label">ad category</label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="form-check"
                            id="sale-check"
                          />
                          <label for="sale-check" class="flat-badge sale">
                            sale
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="form-check"
                            id="rent-check"
                          />
                          <label for="rent-check" class="flat-badge rent">
                            rent
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="form-check"
                            id="book-check"
                          />
                          <label for="book-check" class="flat-badge booking">
                            booking
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-4">
                    <div class="form-group">
                      <ul class="form-check-list">
                        <li>
                          <label class="form-label">product condition</label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="form-check"
                            id="use-check"
                          />
                          <label for="use-check" class="form-check-text">
                            used
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            class="form-check"
                            id="new-check"
                          />
                          <label for="new-check" class="form-check-text">
                            new
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label class="form-label">ad description</label>
                      <textarea
                        class="form-control"
                        placeholder="Describe your message"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label class="form-label">ad tag</label>
                      <textarea
                        class="form-control"
                        placeholder="Maximum of 15 keywords"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="adpost-card">
                <div class="adpost-title">
                  <h3>Author Information</h3>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label class="form-label">Name</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label class="form-label">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label class="form-label">Number</label>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Your Number"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label class="form-label">Address</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your Address"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="adpost-card">
                <div class="adpost-title">
                  <h3>Plan Information</h3>
                </div>
                <ul class="adpost-plan-list">
                  <li>
                    <div class="adpost-plan-content">
                      <h6>
                        Free Plan - <span>Submit 5 Ad Listings</span>
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        Delectus minus Eaque corporis accusantium incidunt
                        officiis deleniti.
                      </p>
                    </div>
                    <div class="adpost-plan-meta">
                      <h3>$00.00</h3>
                      <button class="btn btn-outline">
                        <span>Select</span>
                      </button>
                    </div>
                  </li>
                  <li>
                    <div class="adpost-plan-content">
                      <h6>
                        Standerd Plan - <span>Submit 10 Ad Listings</span>
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        Delectus minus Eaque corporis accusantium incidunt
                        officiis deleniti.
                      </p>
                    </div>
                    <div class="adpost-plan-meta">
                      <h3>$23.00</h3>
                      <button class="btn btn-outline">
                        <span>Select</span>
                      </button>
                    </div>
                  </li>
                  <li>
                    <div class="adpost-plan-content">
                      <h6>
                        Premium Plan - <span>Unlimited Ad Listings</span>
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        Delectus minus Eaque corporis accusantium incidunt
                        officiis deleniti.
                      </p>
                    </div>
                    <div class="adpost-plan-meta">
                      <h3>$43.00</h3>
                      <button class="btn btn-outline">
                        <span>Select</span>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="adpost-card pb-2">
                <div class="adpost-agree">
                  <div class="form-group">
                    <input type="checkbox" class="form-check" />
                  </div>
                  <p>
                    Send me Trade Email/SMS Alerts for people looking to buy
                    mobile handsets in www By clicking "Post", you agree to our{" "}
                    <a href="#">Terms of Use</a> and{" "}
                    <a href="#">Privacy Policy</a> and acknowledge that you are
                    the rightful owner of this item and using Trade to find a
                    genuine buyer.
                  </p>
                </div>
                <div class="form-group text-right">
                  <button class="btn btn-inline">
                    <i class="fas fa-check-circle"></i>
                    <span>published your ad</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-lg-4">
            <div class="account-card alert fade show">
              <div class="account-title">
                <h3>Safety Tips</h3>
                <button data-dismiss="alert">close</button>
              </div>
              <ul class="account-card-text">
                <li>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    debitis odio perferendis placeat at aperiam.
                  </p>
                </li>
                <li>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    debitis odio perferendis placeat at aperiam.
                  </p>
                </li>
                <li>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    debitis odio perferendis placeat at aperiam.
                  </p>
                </li>
                <li>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    debitis odio perferendis placeat at aperiam.
                  </p>
                </li>
                <li>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    debitis odio perferendis placeat at aperiam.
                  </p>
                </li>
              </ul>
            </div>
            <div class="account-card alert fade show">
              <div class="account-title">
                <h3>Custom Offer</h3>
                <button data-dismiss="alert">close</button>
              </div>
              <form class="account-card-form">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Name" />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div class="form-group">
                  <button class="btn btn-inline">
                    <i class="fas fa-paper-plane"></i>
                    <span>send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerAdsPost;
