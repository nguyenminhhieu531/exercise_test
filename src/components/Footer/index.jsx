import FooterBodyLeft from "./FooterBodyLeft";
import FooterBodyMid from "./FooterBodyMid";
import FooterBodyRight from "./FooterBodyRight";
import "./footer.scss";
import FooterProduce from "./footerProduce";
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
      <FooterProduce></FooterProduce>
    </>
  );
}

export default Footer;
