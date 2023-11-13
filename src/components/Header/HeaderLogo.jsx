import React from "react";

function HeaderLogo() {
  return (
    <a
      id="custom_logo_transparent"
      className="logo_wrapper default"
      href="https://themes.themegoods.com/grandtour/demo/"
      style={{ marginTop: 0 }}
    >
      <img
        src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x_white.png"
        alt
        width={92}
        height={22}
        data-lazy-src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x_white.png"
        data-ll-status="loaded"
        className="entered lazyloaded"
      />
    </a>
  );
}

export default HeaderLogo;
