import React from "react";
import FooterBodyContact from "../Footer/FooterBodyContact";

function HeaderMenu() {
  const initialData = [
    {
      text: "Home",
    },
    {
      text: "Tours",
    },
    {
      text: "Booking",
    },
    {
      text: "Destinations",
    },
    {
      text: "Pages",
    },
    {
      text: "Blog",
    },
    {
      text: "Shortcodes",
    },
    {
      text: "Shop",
    },
  ];

  let showData = initialData.map((item) => {
    return (
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          {item.text}
        </a>
      </li>
    );
  });

  return (
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          {showData}
          <br></br>
          <br></br>
          <br></br>
          <li className="nav-item">
            <div
              className="image_popular nav-link"
              style={{
                position: "relative",
                borderRadius: 8,
                height: 200,
                width: "100%",
                backgroundImage:
                  'url("https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-131729.jpeg")',
                backgroundSize: "cover",
              }}
            >
              <a className="tour_image" href="https://themes.themegoods.com/grandtour/demo/destination/tokyo/" />
              <div className="portfolio_info_content_best_value" style={{ top: "40%" }}>
                <h3>$3,900</h3>
                <h5 className="menu_h5">Swiss Alps Trip</h5>
                <div className="tour_attribute_wrapper">
                  <div className="tour_attribute_rating">
                    <div className="br-theme-fontawesome-stars-o">
                      <div className="br-widget">
                        <a href="javascript:;" className="br-selected" />
                        <a href="javascript:;" className="br-selected" />
                        <a href="javascript:;" className="br-selected" />
                        <a href="javascript:;" className="br-selected" />
                        <a href="javascript:;" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item" style={{ marginTop: "8px" }}>
            <div
              className="image_popular nav-link"
              style={{
                position: "relative",
                borderRadius: 8,
                height: 200,
                width: "100%",
                backgroundImage:
                  'url("https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-225630-700x466.jpeg")',
                backgroundSize: "cover",
              }}
            >
              <a className="tour_image" href="https://themes.themegoods.com/grandtour/demo/destination/tokyo/" />
              <div className="portfolio_info_content_best_value" style={{ top: "40%" }}>
                <h3>$4,200</h3>
                <h5 className="menu_h5">5 Lake of Fuji San</h5>
                <div className="tour_attribute_wrapper">
                  <div className="tour_attribute_rating">
                    <div className="br-theme-fontawesome-stars-o">
                      <div className="br-widget">
                        <a href="javascript:;" className="br-selected" />
                        <a href="javascript:;" className="br-selected" />
                        <a href="javascript:;" className="br-selected" />
                        <a href="javascript:;" className="br-selected" />
                        <a href="javascript:;" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <FooterBodyContact></FooterBodyContact>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderMenu;
