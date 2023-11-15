import React from "react";
import FooterBodyContact from "./FooterBodyContact";

function FooterBodyMid() {
  return (
    <div className="col-md-4 col-xs-12">
      <div id="text-4" className="widget widget_text">
        <h2 className="widgettitle">Contact Info</h2>
        <div className="textwidget">
          <p>
            <i class="fa-solid fa-mobile-screen"></i>
            1-567-124-44227
          </p>
          <p>
            <i class="fa-solid fa-location-dot"></i>
            184 Main Street East Perl Habour 8007
          </p>
          <p>
            <i class="fa-solid fa-stopwatch"></i>
            Mon - Sat 8.00 - 18.00 Sunday CLOSED
          </p>
          <FooterBodyContact></FooterBodyContact>
        </div>
      </div>
    </div>
  );
}

export default FooterBodyMid;
