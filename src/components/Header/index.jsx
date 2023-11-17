import HeaderBody from "./HeaderBody";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import "./header.scss";
import "./responsive_header.scss";

function Header() {
  return (
    <div id="header">
      <div className="container">
        <div className="row navbar_wrapper">
          <div>
            <div className="col-md-2 col-xs-3">
              <HeaderLogo></HeaderLogo>
            </div>
            <div className="col-md-10 col-xs-9">
              <HeaderNav></HeaderNav>
            </div>
          </div>
        </div>
        <HeaderBody></HeaderBody>
      </div>
    </div>
  );
}

export default Header;
