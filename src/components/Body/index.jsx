import BestValue from "./BestValue";
import ChoseUs from "./ChoseUs";
import Popular from "./Popular";
import Tips from "./Tips";
import "./body.scss";
import "./responsive_body.scss";

function Body() {
  return (
    <>
      <Popular></Popular>
      <BestValue></BestValue>
      <ChoseUs></ChoseUs>
      <div
        className="parallax rocket-lazyload entered lazyloaded"
        style={{
          marginTop: "30px",
          position: "relative",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%",
          height: 500,
          backgroundImage:
            'url("https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24377.jpg")',
        }}
      />
      <Tips></Tips>
      <div id="option_btn">
        <a href="javascript:;" className="demotip tooltipstered">
          <i className="fa-solid fa-gear" style={{ color: "#b6b3b3" }} />
        </a>
        <a
          href="https://themes.themegoods.com/grandtour/landing/showcase/"
          className="demotip tooltipstered"
          target="_blank"
        >
          <i className="fa-solid fa-heart" style={{ color: "#b6b3b3" }} />
        </a>
        <a href="https://themes.themegoods.com/grandtour/doc" className="demotip tooltipstered" target="_blank">
          <i className="fa-solid fa-book-open" style={{ color: "#b6b3b3" }} />
        </a>
        <a href="https://1.envato.market/EnokD" className="demotip tooltipstered" target="_blank">
          <i className="fa-solid fa-cart-plus" style={{ color: "#b6b3b3" }} />
        </a>
      </div>
    </>
  );
}

export default Body;
