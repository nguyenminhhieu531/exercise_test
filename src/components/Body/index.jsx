import BestValue from "./BestValue";
import ChoseUs from "./ChoseUs";
import Popular from "./Popular";
import Tips from "./Tips";
import "./body.scss";
import "./responsive_body.scss";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"></link>;

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

      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"></script>
    </>
  );
}

export default Body;
