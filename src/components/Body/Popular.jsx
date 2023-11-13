import React from "react";

function Popular(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="title">
          <h2 className="ppb_title_popular">Popular Destinations</h2>
          <div className="page_tagline_popular">World's best tourist destinations</div>
        </div>
        <div className="col-md-3 col-xs-12">
          <div className="hover_article">
            <div
              className="image_popular"
              style={{
                backgroundSize: "cover",
                position: "relative",
                borderRadius: 8,
                height: 300,
                backgroundImage:
                  'url("https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg")',
              }}
            >
              <a className="tour_image" href="https://themes.themegoods.com/grandtour/demo/destination/tokyo/" />
              <div className="portfolio_info_content">
                <h3>Tokyo</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-xs-12">
          <div className="hover_article">
            <div
              className="image_popular"
              style={{
                backgroundSize: "cover",
                position: "relative",
                borderRadius: 8,
                height: 300,
                backgroundImage:
                  'url("https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg")',
              }}
            >
              <a className="tour_image" href="https://themes.themegoods.com/grandtour/demo/destination/tokyo/" />
              <div className="portfolio_info_content">
                <h3>Seoul</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-xs-12">
          <div className="hover_article">
            <div
              className="image_popular"
              style={{
                backgroundSize: "cover",
                position: "relative",
                borderRadius: 8,
                height: 300,
                backgroundImage:
                  'url("https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg")',
              }}
            >
              <a className="tour_image" href="https://themes.themegoods.com/grandtour/demo/destination/tokyo/" />
              <div className="portfolio_info_content">
                <h3>Paris</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-xs-12">
          <div className="hover_article">
            <div
              className="image_popular"
              style={{
                backgroundSize: "cover",
                position: "relative",
                borderRadius: 8,
                height: 300,
                backgroundImage:
                  'url("https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg")',
              }}
            >
              <a className="tour_image" href="https://themes.themegoods.com/grandtour/demo/destination/tokyo/" />
              <div className="portfolio_info_content">
                <h3>London</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;
