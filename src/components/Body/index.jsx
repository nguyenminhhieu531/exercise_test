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
    </>
  );
}

export default Body;
