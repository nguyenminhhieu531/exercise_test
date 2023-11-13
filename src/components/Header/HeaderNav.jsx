import React from "react";

function HeaderNav(props) {
  return (
    <nav className="navbar">
      <div className="container">
        <ul id="nav">
          <li className="hidden_pc">
            <a href="#">Home</a>
            <ul className="subnav">
              <li>
                <a href="#">Home 1 - Background Image</a>
              </li>
              <hr></hr>
              <li>
                <a href="#">Home 2 - Youtube Video</a>
              </li>
              <hr></hr>
              <li>
                <a href="#">Home 3 - Google Inspired</a>
              </li>
              <hr></hr>
              <li>
                <a href="#">Home 4 - Travel Site</a>
              </li>
            </ul>
          </li>
          <i class="fa-solid fa-chevron-down hidden_pc"></i>
          <li className="hidden_pc">
            <a href="#band">Tours</a>
            <ul className="subnav">
              <li>
                <a href="#">Home 1 - Background Image</a>
              </li>
              <hr></hr>
              <li>
                <a href="#">Home 2 - Youtube Video</a>
              </li>
              <hr></hr>
              <li>
                <a href="#">Home 3 - Google Inspired</a>
              </li>
              <hr></hr>
              <li>
                <a href="#">Home 4 - Travel Site</a>
              </li>
            </ul>
          </li>
          <i class="fa-solid fa-chevron-down hidden_pc"></i>
          <li className="hidden_pc">
            <a href="#tour">Booking</a>
            <ul className="subnav">
              <li>
                <a href="#">Home 1 - Background Image</a>
              </li>
              <hr></hr>
              <li>
                <a href="#">Home 2 - Youtube Video</a>
              </li>
              <hr></hr>
              <li>
                <a href="#">Home 3 - Google Inspired</a>
              </li>
              <hr></hr>
              <li>
                <a href="#">Home 4 - Travel Site</a>
              </li>
            </ul>
          </li>
          <i class="fa-solid fa-chevron-down hidden_pc"></i>
          <li className="hidden_pc">
            <a href="#">Destinations</a>
          </li>
          <i class="fa-solid fa-chevron-down hidden_pc"></i>
          <li className="hidden_pc">
            <a href="#band">Pages</a>
          </li>
          <i class="fa-solid fa-chevron-down hidden_pc"></i>
          <li className="hidden_pc">
            <a href="#tour">Blog</a>
            <ul className="subnav">
              <li>
                <a href="#">Home 1 - Background Image</a>
              </li>
              <hr></hr>
              <li>
                <a href="#">Home 2 - Youtube Video</a>
              </li>
              <hr></hr>
              <li>
                <a href="#">Home 3 - Google Inspired</a>
              </li>
              <hr></hr>
              <li>
                <a href="#">Home 4 - Travel Site</a>
              </li>
            </ul>
          </li>
          <i class="fa-solid fa-chevron-down hidden_pc"></i>
          <li className="hidden_pc">
            <a href="#contact">Shortcodes</a>
            <ul className="subnav">
              <li>
                <a href="#">Home 1 - Background Image</a>
              </li>
              <hr></hr>
              <li>
                <a href="#">Home 2 - Youtube Video</a>
              </li>
              <hr></hr>
              <li>
                <a href="#">Home 3 - Google Inspired</a>
              </li>
              <hr></hr>
              <li>
                <a href="#">Home 4 - Travel Site</a>
              </li>
            </ul>
          </li>
          <i class="fa-solid fa-chevron-down hidden_pc"></i>
          <li className="hidden_pc">
            <a href="#">
              Shop <i class="fa-solid fa-chevron-down hidden_pc"></i>
            </a>
          </li>
          <li>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </li>
          <li>
            <div className="header_cart_wrapper">
              <a href="https://themes.themegoods.com/grandtour/demo/cart/" title="View Cart">
                <i class="fa-solid fa-cart-shopping"></i>
              </a>
            </div>
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
      </div>
    </nav>
  );
}

export default HeaderNav;
