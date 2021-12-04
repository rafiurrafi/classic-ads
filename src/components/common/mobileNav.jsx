import React from "react";

const MobileNav = () => {
  return (
    <nav className="mobile-nav">
      <div className="container">
        <div className="mobile-group">
          <a href="index.html" className="mobile-widget">
            <i className="fas fa-home"></i>
            <span>home</span>
          </a>
          <a href="user-form.html" className="mobile-widget">
            <i className="fas fa-user"></i>
            <span>join me</span>
          </a>
          <a href="ad-post.html" className="mobile-widget plus-btn">
            <i className="fas fa-plus"></i>
            <span>Ad Post</span>
          </a>
          <a href="notification.html" className="mobile-widget">
            <i className="fas fa-bell"></i>
            <span>notify</span>
            <sup>0</sup>
          </a>
          <a href="message.html" className="mobile-widget">
            <i className="fas fa-envelope"></i>
            <span>message</span>
            <sup>0</sup>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
