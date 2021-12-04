import React from "react";

const PostHome = () => {
  return (
    <section className="blog-part">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-center-heading">
              <h2>
                Read Our <span>Recent Articles</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                aspernatur illum vel sunt libero voluptatum repudiandae veniam
                maxime tenetur.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="blog-slider slider-arrow">
              <div className="blog-card">
                <div className="blog-img">
                  <img src="images/blog/01.jpg" alt="blog" />
                  <div className="blog-overlay">
                    <span className="marketing">Marketing</span>
                  </div>
                </div>
                <div className="blog-content">
                  <a href="#!" className="blog-avatar">
                    <img src="images/avatar/01.jpg" alt="avatar" />
                  </a>
                  <ul className="blog-meta">
                    <li>
                      <i className="fas fa-user"></i>
                      <p>
                        <a href="#!">MironMahmud</a>
                      </p>
                    </li>
                    <li>
                      <i className="fas fa-clock"></i>
                      <p>02 Feb 2021</p>
                    </li>
                  </ul>
                  <div className="blog-text">
                    <h4>
                      <a href="blog-details.html">
                        Lorem ipsum dolor sit amet eius minus elit cum quaerat
                        volupt.
                      </a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Temporibus veniam ad dolore labore laborum perspiciatis...
                    </p>
                  </div>
                  <a href="blog-details.html" className="blog-read">
                    <span>read more</span>
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-img">
                  <img src="images/blog/02.jpg" alt="blog" />
                  <div className="blog-overlay">
                    <span className="advertise">advertise</span>
                  </div>
                </div>
                <div className="blog-content">
                  <a href="#!" className="blog-avatar">
                    <img src="images/avatar/02.jpg" alt="avatar" />
                  </a>
                  <ul className="blog-meta">
                    <li>
                      <i className="fas fa-user"></i>
                      <p>
                        <a href="#!">LabonnoKhan</a>
                      </p>
                    </li>
                    <li>
                      <i className="fas fa-clock"></i>
                      <p>02 Feb 2021</p>
                    </li>
                  </ul>
                  <div className="blog-text">
                    <h4>
                      <a href="blog-details.html">
                        Lorem ipsum dolor sit amet eius minus elit cum quaerat
                        volupt.
                      </a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Temporibus veniam ad dolore labore laborum perspiciatis...
                    </p>
                  </div>
                  <a href="blog-details.html" className="blog-read">
                    <span>read more</span>
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-img">
                  <img src="images/blog/03.jpg" alt="blog" />
                  <div className="blog-overlay">
                    <span className="safety">safety</span>
                  </div>
                </div>
                <div className="blog-content">
                  <a href="#!" className="blog-avatar">
                    <img src="images/avatar/03.jpg" alt="avatar" />
                  </a>
                  <ul className="blog-meta">
                    <li>
                      <i className="fas fa-user"></i>
                      <p>
                        <a href="#!">MironMahmud</a>
                      </p>
                    </li>
                    <li>
                      <i className="fas fa-clock"></i>
                      <p>02 Feb 2021</p>
                    </li>
                  </ul>
                  <div className="blog-text">
                    <h4>
                      <a href="blog-details.html">
                        Lorem ipsum dolor sit amet eius minus elit cum quaerat
                        volupt.
                      </a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Temporibus veniam ad dolore labore laborum perspiciatis...
                    </p>
                  </div>
                  <a href="blog-details.html" className="blog-read">
                    <span>read more</span>
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-img">
                  <img src="images/blog/04.jpg" alt="blog" />
                  <div className="blog-overlay">
                    <span className="security">security</span>
                  </div>
                </div>
                <div className="blog-content">
                  <a href="#!" className="blog-avatar">
                    <img src="images/avatar/04.jpg" alt="avatar" />
                  </a>
                  <ul className="blog-meta">
                    <li>
                      <i className="fas fa-user"></i>
                      <p>
                        <a href="#!">TahminaBonny</a>
                      </p>
                    </li>
                    <li>
                      <i className="fas fa-clock"></i>
                      <p>02 Feb 2021</p>
                    </li>
                  </ul>
                  <div className="blog-text">
                    <h4>
                      <a href="blog-details.html">
                        Lorem ipsum dolor sit amet eius minus elit cum quaerat
                        volupt.
                      </a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Temporibus veniam ad dolore labore laborum perspiciatis...
                    </p>
                  </div>
                  <a href="blog-details.html" className="blog-read">
                    <span>read more</span>
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="blog-btn">
              <a href="blog-list.html" className="btn btn-inline">
                <i className="fas fa-eye"></i>
                <span>view all blogs</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostHome;
