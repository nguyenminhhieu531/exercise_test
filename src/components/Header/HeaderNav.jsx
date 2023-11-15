import React from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderNavMobile from "./HeaderNavMobile";
import HeaderListItemNav from "./HeaderListItemNav";

function HeaderNav() {
  return (
    <nav className="navbar">
      <HeaderListItemNav></HeaderListItemNav>
      <HeaderNavMobile></HeaderNavMobile>
      <HeaderMenu></HeaderMenu>
    </nav>
  );
}

export default HeaderNav;
