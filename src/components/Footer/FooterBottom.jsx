import React from "react";

function FooterBottom(props) {
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="row mobile_footer">
          <div className="col-md-6 col-xs-12">
            <div id="copyright">© Copyright Grand Tour Theme Demo - Theme by ThemeGoods</div>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="menu-footer-menu-container">
              <ul id="footer_menu" className="footer_nav">
                <li
                  id="menu-item-215"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-215"
                >
                  <a href="https://themes.themegoods.com/grandtour/demo/">Home</a>
                </li>
                <li
                  id="menu-item-216"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-216"
                >
                  <a href="https://themes.themegoods.com/grandtour/demo/tours/">Tours</a>
                </li>
                <li
                  id="menu-item-217"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-217"
                >
                  <a href="https://themes.themegoods.com/grandtour/demo/blog/">Blog</a>
                </li>
                <li
                  id="menu-item-218"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-218"
                >
                  <a href="#">Purchase Theme</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;
