import React from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderListItemNav from "./HeaderListItemNav";

function HeaderNav() {
  return (
    <div className="navbar">
      <HeaderListItemNav></HeaderListItemNav>
      <HeaderMenu></HeaderMenu>
    </div>
  );
}

export default HeaderNav;
