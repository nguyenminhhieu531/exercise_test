import FooterBodyLeft from "./FooterBodyLeft";
import FooterBodyMid from "./FooterBodyMid";
import FooterBodyRight from "./FooterBodyRight";
import FooterBottom from "./FooterBottom";
import "./footer.scss";

import "./responsive_footer.scss";

function Footer() {
  return (
    <>
      <div id="footer">
        <div className="container">
          <div className="row">
            <FooterBodyLeft></FooterBodyLeft>
            <FooterBodyMid></FooterBodyMid>
            <FooterBodyRight></FooterBodyRight>
          </div>
        </div>
      </div>
      <FooterBottom></FooterBottom>
    </>
  );
}

export default Footer;
