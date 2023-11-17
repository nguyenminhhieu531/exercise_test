import React from "react";

function HeaderListItemNav() {
  return (
    <ul className="nav" id="nav">
      <li className="hidden_mobile">
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
      <li className="hidden_mobile">
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
      <li className="hidden_mobile">
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
      <li className="hidden_mobile">
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
      <li className="hidden_mobile">
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
      <li className="hidden_mobile">
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
      <li className="hidden_mobile">
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
      <li className="hidden_mobile">
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
      <li className="show_mobile">
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
      <li className="show_mobile">
        <div className="header_cart_wrapper">
          <li
            className="count_cart"
            style={{
              position: "absolute",
              right: "0",
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
          <a href="https://themes.themegoods.com/grandtour/demo/cart/" title="View Cart">
            <i class="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
      </li>
    </ul>
  );
}

export default HeaderListItemNav;
