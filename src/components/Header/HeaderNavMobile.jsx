import React from "react";

function HeaderNavMobile() {
  return (
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
  );
}

export default HeaderNavMobile;
