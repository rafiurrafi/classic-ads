import React from "react";

const MobileNav = () => {
  return (
    <nav class="mobile-nav">
      <div class="container">
        <div class="mobile-group">
          <a href="index.html" class="mobile-widget">
            <i class="fas fa-home"></i>
            <span>home</span>
          </a>
          <a href="user-form.html" class="mobile-widget">
            <i class="fas fa-user"></i>
            <span>join me</span>
          </a>
          <a href="ad-post.html" class="mobile-widget plus-btn">
            <i class="fas fa-plus"></i>
            <span>Ad Post</span>
          </a>
          <a href="notification.html" class="mobile-widget">
            <i class="fas fa-bell"></i>
            <span>notify</span>
            <sup>0</sup>
          </a>
          <a href="message.html" class="mobile-widget">
            <i class="fas fa-envelope"></i>
            <span>message</span>
            <sup>0</sup>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
