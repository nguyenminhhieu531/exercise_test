import React from "react";

function HeaderNav(props) {
  return (
    <nav className="navbar">
      <ul className="nav hidden_mobile" id="nav">
        <li>
          <a href="#">Home</a>
          <i class="fa-solid fa-chevron-down  "></i>
          <ul className="sub-menu">
            <li>
              <a href="#">Home 1 - Background Image</a>
            </li>
            <li>
              <a href="#">Home 2 - Youtube Video</a>
            </li>
            <li>
              <a href="#">Home 3 - Google Inspired</a>
            </li>
            <li>
              <a href="#">Home 4 - Travel Site</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Tours</a>
          <i class="fa-solid fa-chevron-down  "></i>
          <ul className="sub-menu">
            <li>
              <a href="#">Tour Classic Fullwidth</a>
              <i class="fa-solid fa-chevron-right"></i>
              <ul className="sub-menu">
                <li>
                  <a href="#">2 Columns</a>
                </li>
                <li>
                  <a href="#">3 Columns</a>
                </li>
                <li>
                  <a href="#">4 Columns</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Tour Classic Fullwidth</a>
              <i class="fa-solid fa-chevron-right"></i>
              <ul className="sub-menu">
                <li>
                  <a href="#">2 Columns</a>
                </li>
                <li>
                  <a href="#">3 Columns</a>
                </li>
                <li>
                  <a href="#">4 Columns</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Tour Classic Fullwidth</a>
              <i class="fa-solid fa-chevron-right"></i>
              <ul className="sub-menu">
                <li>
                  <a href="#">2 Columns</a>
                </li>
                <li>
                  <a href="#">3 Columns</a>
                </li>
                <li>
                  <a href="#">4 Columns</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Tour Classic Fullwidth</a>
              <i class="fa-solid fa-chevron-right"></i>
              <ul className="sub-menu">
                <li>
                  <a href="#">2 Columns</a>
                </li>
                <li>
                  <a href="#">3 Columns</a>
                </li>
                <li>
                  <a href="#">4 Columns</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Booking</a>
          <i class="fa-solid fa-chevron-down  "></i>
          <ul className="sub-menu">
            <li>
              <a href="#">Booking online</a>
            </li>
            <li>
              <a href="#">Booking online</a>
            </li>
            <li>
              <a href="#">Booking online</a>
            </li>
            <li>
              <a href="#">Booking online</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Destinations</a>
          <i class="fa-solid fa-chevron-down  "></i>
          <ul className="sub-menu">
            <li>
              <a href="#">Destination Fullwidth</a>
            </li>
            <li>
              <a href="#">Destination Fullwidth</a>
            </li>
            <li>
              <a href="#">Destination Fullwidth</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Pages</a>
          <i class="fa-solid fa-chevron-down  "></i>
          <ul className="sub-menu">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Blog</a>
          <i class="fa-solid fa-chevron-down  "></i>
          <ul className="sub-menu">
            <li>
              <a href="#">Blog Right Sidebar</a>
            </li>
            <li>
              <a href="#">Blog Right Sidebar</a>
            </li>
            <li>
              <a href="#">Blog Right Sidebar</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Shortcodes</a>
          <i class="fa-solid fa-chevron-down  "></i>
          <ul className="sub-menu">
            <li>
              <a href="#">Accordion & Toggles</a>
            </li>
            <li>
              <a href="#">Accordion & Toggles</a>
            </li>
            <li>
              <a href="#">Accordion & Toggles</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Shop</a>
          <i class="fa-solid fa-chevron-down  "></i>
          <ul className="sub-menu">
            <li>
              <a href="#">Shop Fullwidth</a>
            </li>
            <li>
              <a href="#">Shop Fullwidth</a>
            </li>
            <li>
              <a href="#">Shop Fullwidth</a>
            </li>
            <li>
              <a href="#">Shop Fullwidth</a>
            </li>
            <li>
              <a href="#">Shop Fullwidth</a>
            </li>
            <li>
              <a href="#">Shop Fullwidth</a>
            </li>
          </ul>
        </li>
      </ul>
      <ul className="subnav_final">
        <li>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </li>
        <li>
          <div className="header_cart_wrapper">
            <a href="https://themes.themegoods.com/grandtour/demo/cart/" title="View Cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </div>
        </li>
        <li
          className="count_cart"
          style={{
            position: "absolute",
            right: "71px",
            top: "32%",
            marginLeft: "-10px",
            lineHeight: "8px",
          }}
        >
          <p
            style={{
              color: "#ffffff",
              backgroundColor: "red",
              borderRadius: "50%",
              padding: "3px",
            }}
          >
            0
          </p>
        </li>
      </ul>
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Tours
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Booking
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Destinations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Pages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Shortcodes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Shop
              </a>
            </li>
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
                <div className="portfolio_info_content_best_value">
                  <h3>$3,900</h3>
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
                <div className="portfolio_info_content_best_value">
                  <h3>$4,200</h3>
                </div>
              </div>
            </li>
            <li>
              <div style={{ marginTop: 20 }}>
                <div className="social_wrapper shortcode dark ">
                  <ul>
                    <li className="facebook">
                      <a target="_blank" title="Facebook" href="#" rel="noopener">
                        <i class="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="twitter">
                      <a target="_blank" title="Twitter" href="https://twitter.com/#" rel="noopener">
                        <i class="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li className="youtube">
                      <a target="_blank" title="Youtube" href="#" rel="noopener">
                        <i class="fa-brands fa-youtube"></i>
                      </a>
                    </li>
                    <li className="pinterest">
                      <a target="_blank" title="Pinterest" href="https://pinterest.com/#" rel="noopener">
                        <i class="fa-brands fa-pinterest"></i>
                      </a>
                    </li>
                    <li className="instagram">
                      <a target="_blank" title="Instagram" href="https://instagram.com/theplanetd" rel="noopener">
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderNav;
