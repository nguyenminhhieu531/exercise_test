import React from "react";

function Popular() {
  const initialData = [
    {
      url: 'url("https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg")',
      title: "Tokyo",
    },
    {
      url: 'url("https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg")',
      title: "Seoul",
    },
    {
      url: 'url("https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg")',
      title: "Paris",
    },
    {
      url: 'url("https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg")',
      title: "London",
    },
  ];

  let showData = initialData.map((item) => {
    return (
      <div className="col-md-3 col-xs-12">
        <div className="hover_article">
          <div
            className="image_popular"
            style={{
              backgroundSize: "cover",
              position: "relative",
              borderRadius: 8,
              height: 300,
              backgroundImage: item.url,
            }}
          >
            <a className="tour_image" href="https://themes.themegoods.com/grandtour/demo/destination/tokyo/" />
            <div className="portfolio_info_content">
              <h3>{item.title}</h3>
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
          <h2 className="ppb_title_popular">Popular Destinations</h2>
          <div className="page_tagline_popular">World's best tourist destinations</div>
        </div>
        {showData}
      </div>
    </div>
  );
}

export default Popular;
