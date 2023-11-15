import React from "react";

function BestValue() {
  const initialData = [
    {
      value: "$5,000",
      day: "5 days",
      title: "French Autumn",
      desc: "City Tours, Urban",
      url: 'url("https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg")',
    },
    {
      value: "$6,000",
      day: "6 days",
      title: "Grand Switzerland",
      desc: "Shopping, Mountain, Snow & Ice",
      url: 'url("https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg")',
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
            <div className="portfolio_info_content_best_value">
              <h3>{item.value}</h3>
            </div>
          </div>

          <div className="portfolio_info_wrapper">
            <a className="tour_link" href="https://themes.themegoods.com/grandtour/demo/tour/french-autumn/">
              <h4>{item.title}</h4>
            </a>
            <div className="tour_excerpt">
              <p>{item.desc}</p>
            </div>
            <div className="tour_attribute_wrapper">
              <div className="tour_attribute_rating">
                <div className="br-theme-fontawesome-stars-o">
                  <div className="br-widget">
                    <a href="javascript:;" className="br-selected" />
                    <a href="javascript:;" className="br-selected" />
                    <a href="javascript:;" className="br-selected" />
                    <a href="javascript:;" className="br-selected" />
                    <a href="javascript:;" />
                  </div>
                </div>
                <div className="tour_attribute_rating_count">4&nbsp;reviews</div>
              </div>
              <div className="tour_attribute_days">
                <i class="fa-regular fa-clock"></i>
                {item.day}
              </div>
            </div>
            <br className="clear" />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="title">
          <h2 className="ppb_title_best_value">Best Value Trips</h2>
          <div className="page_tagline_popular">Best offers trips from us</div>
        </div>
        {showData}
        <div className="col-md-4 col-xs-12">
          <div className="hover_article">
            <div
              className="image_popular"
              style={{
                position: "relative",
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                height: 300,
                backgroundImage:
                  'url("https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg")',
                backgroundSize: "cover",
              }}
            >
              <p className="sale">Sale</p>
              <a className="tour_image" href="https://themes.themegoods.com/grandtour/demo/destination/tokyo/" />
              <div className="portfolio_info_content_best_value">
                <h3>
                  <span style={{ fontSize: "15px", color: "#ccc", textDecoration: "line-through" }}>$3,000</span> $2,500
                </h3>
              </div>
            </div>

            <div className="portfolio_info_wrapper">
              <a className="tour_link" href="https://themes.themegoods.com/grandtour/demo/tour/french-autumn/">
                <h4>Discover Japan</h4>
              </a>
              <div className="tour_excerpt">
                <p>City Tours, Iconic</p>
              </div>
              <div className="tour_attribute_wrapper">
                <div className="tour_attribute_rating">
                  <div className="br-theme-fontawesome-stars-o">
                    <div className="br-widget">
                      <a href="javascript:;" className="br-selected" />
                      <a href="javascript:;" className="br-selected" />
                      <a href="javascript:;" className="br-selected" />
                      <a href="javascript:;" className="br-selected" />
                      <a href="javascript:;" />
                    </div>
                  </div>
                  <div className="tour_attribute_rating_count">4&nbsp;reviews</div>
                </div>
                <div className="tour_attribute_days">
                  <i class="fa-regular fa-clock"></i>5 days
                </div>
              </div>
              <br className="clear" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestValue;
