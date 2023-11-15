import React from "react";

function FooterBodyRight() {
  const initialData = [
    { url: "https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" },
    {
      url: "https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg",
    },
    {
      url: "https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg",
    },
    {
      url: "https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg",
    },
    {
      url: "https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg",
    },
    {
      url: "https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg",
    },
  ];

  let showData = initialData.map((item) => {
    return (
      <div className="col-md-4 col-xs-4">
        <a target="_blank" href="https://www.flickr.com/photos/artiephotography/28760131762/">
          <img
            src={item.url}
            alt="Buddha Sunrise in Borobudur, Magelang, Central Java, Indonesia"
            width={75}
            height={75}
            className="entered lazyloaded"
          />
        </a>
      </div>
    );
  });
  return (
    <div className="col-md-4 col-xs-12">
      <div id="grandtour_flickr-7" className="widget Grandtour_Flickr">
        <h2 className="widgettitle">Recent Trips</h2>
        <div className="row">{showData}</div>
      </div>
    </div>
  );
}

export default FooterBodyRight;
