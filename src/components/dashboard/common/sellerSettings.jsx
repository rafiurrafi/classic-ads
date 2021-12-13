import React from "react";

const SellerSettings = () => {
  return (
    <div class="setting-part mt-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="account-card alert fade show">
              <div class="account-title">
                <h3>Edit Profile</h3>
                <button data-dismiss="alert">close</button>
              </div>
              <form class="setting-form">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label class="form-label">First Name</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Mahmudul"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label class="form-label">Last Name</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Hasan"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label class="form-label">Company</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Classicads Advertising LID."
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label class="form-label">Address</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="1420, West Jalkuri, Narayanganj, Bangladesh"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label class="form-label">City</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Narayanganj"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label class="form-label">State</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="West Jalkuri"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label class="form-label">Post Code</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="1420"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label class="form-label">Country</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Bangladesh"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label class="form-label">Website</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="https://mironmahmud.com"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label class="form-label">Phone</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="+8801838288389"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label class="form-label">Birthday</label>
                      <input
                        type="date"
                        class="form-control"
                        value="1995-02-02"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label class="form-label">Profile Image</label>
                      <input type="file" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <button class="btn btn-inline">
                      <i class="fas fa-user-check"></i>
                      <span>update profile</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerSettings;
