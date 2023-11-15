import React from "react";

function Tips() {
  const initialData = [
    {
      url: 'url("https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg")',
      title: "Memorial Day to Someone Told Me to Travel",
    },
    {
      url: 'url("https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg")',
      title: "7 Tips For Nomads On A Budget Trips",
    },
    {
      url: 'url("https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg")',
      title: "Taking A Travel Blog Victory Lap",
    },
  ];

  let showData = initialData.map((item) => {
    return (
      <div className="col-md-4 col-xs-12">
        <div className="hover_article">
          <div
            className="image_popular"
            style={{
              position: "relative",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              height: 300,
              backgroundImage: item.url,
              backgroundSize: "cover",
            }}
          >
            <a className="tour_image" href="https://themes.themegoods.com/grandtour/demo/destination/tokyo/" />
          </div>

          <div className="post_header_wrapper">
            <div className="post_header grid">
              <div className="post_detail single_post">
                <span className="post_info_date">
                  <a
                    href="https://themes.themegoods.com/grandtour/demo/my-memorial-day-tribute-to-someone-who-told-me-to-travel/"
                    title="Memorial Day to Someone Told Me to Travel"
                  >
                    December 10, 2016
                  </a>
                </span>
              </div>
              <h6>
                <a
                  href="https://themes.themegoods.com/grandtour/demo/my-memorial-day-tribute-to-someone-who-told-me-to-travel/"
                  title="Memorial Day to Someone Told Me to Travel"
                >
                  {item.title}
                </a>
              </h6>
            </div>
            <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...</p>
            <div className="post_button_wrapper">
              <a
                className="readmore"
                href="https://themes.themegoods.com/grandtour/demo/my-memorial-day-tribute-to-someone-who-told-me-to-travel/"
              >
                Read More
                <i class="fa-solid fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <div className="title">
          <h2 className="ppb_title_trips">Articles & Tips</h2>
          <div className="page_tagline_popular">Explore some of the best tips from around the world</div>
        </div>
        {showData}
      </div>
    </div>
  );
}

export default Tips;
