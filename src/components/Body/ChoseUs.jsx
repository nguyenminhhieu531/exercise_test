import React from "react";

function ChoseUs() {
  const initialData = [
    { url: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png" },
    {
      url: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png",
    },
    {
      url: "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png",
    },
  ];

  let showChoseUs = initialData.map((item) => {
    return (
      <div className="col-md-4 col-xs-12">
        <div className="choes_us">
          <p>
            <img
              className="alignnone wp-image-3106 size-medium entered lazyloaded"
              src={item.url}
              width={150}
              height={150}
            />
          </p>
          <h4 className="p1">
            <span className="s1">
              <b>Handpicked Hotels</b>
            </span>
          </h4>
          <p className="desc">
            Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="title">
          <h2 className="ppb_title_choose_us">Why Choose Us</h2>
          <div className="page_tagline_popular">Here are reasons you should plan trip with us</div>
        </div>
        {showChoseUs}
      </div>
    </div>
  );
}

export default ChoseUs;
