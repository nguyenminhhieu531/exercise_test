import React from "react";

function HeaderBody() {
  function handleClickP() {
    var element = document.getElementById("click_advanced");
    console.log(element);
    element.classList.toggle("mystyle");
  }

  return (
    <div className="container">
      <div className="row" style={{ width: "100%", margin: "auto" }}>
        <div className="one withsmallpadding ppb_tour_search_youtube parallax withbg ">
          <div className="center_wrapper">
            <div className="inner_content">
              <div className="standard_wrapper">
                <h2 className="ppb_title" style={{ color: "#ffffff" }}>
                  Where do you want to go?
                </h2>
                <div className="page_tagline" style={{ color: "#ffffff" }}>
                  Trips, experiences, and places. All in one service.
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-3 col-xs-12">
                    <div className="one_fourth themeborder">
                      <input type="search" placeholder="Destination, city" />
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-12">
                    <div className="one_fourth themeborder">
                      <select className="month" name="month">
                        <option value="">Any Month</option>
                        <option value="january">January</option>
                        <option value="february">February</option>
                        <option value="march">March</option>
                        <option value="april">April</option>
                        <option value="may">May</option>
                        <option value="june">June</option>
                        <option value="july">July</option>
                        <option value="august">August</option>
                        <option value="september">September</option>
                        <option value="october">October</option>
                        <option value="november">November</option>
                        <option value="december">December</option>
                      </select>
                      <i className="fa-regular fa-calendar"></i>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-12">
                    <div className="one_fourth themeborder">
                      <select className="sort_by" name="sort_by">
                        <option value="date">Sort By Date</option>
                        <option value="price_low">Price Low to High</option>
                        <option value="price_high">Price High to Low</option>
                        <option value="name">Sort By Name</option>
                        <option value="popular">Sort By Popularity</option>
                        <option value="review">Sort By Review Score</option>
                      </select>
                      <i className="fa-solid fa-arrow-right-arrow-left"></i>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-12">
                    <div className="one_fourth last themeborder">
                      <input id="tour_search_btn" type="submit" className="button" value="Search" />
                    </div>
                  </div>
                </div>
                <div className="row" id="click_advanced">
                  <div className="col-md-3 col-xs-12">
                    <div className="one_fourth themeborder">
                      <select className="month" name="month">
                        <option value="">All Categories</option>
                        <option value="january">January</option>
                        <option value="february">February</option>
                        <option value="march">March</option>
                        <option value="april">April</option>
                        <option value="may">May</option>
                        <option value="june">June</option>
                        <option value="july">July</option>
                        <option value="august">August</option>
                        <option value="september">September</option>
                        <option value="october">October</option>
                        <option value="november">November</option>
                        <option value="december">December</option>
                      </select>
                      <i class="fa-solid fa-chevron-down" style={{ color: "#ada5a5" }}></i>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-12">
                    <div className="one_fourth themeborder">
                      <select className="month" name="month">
                        <option value="">Any Destinations</option>
                        <option value="january">January</option>
                        <option value="february">February</option>
                        <option value="march">March</option>
                        <option value="april">April</option>
                        <option value="may">May</option>
                        <option value="june">June</option>
                        <option value="july">July</option>
                        <option value="august">August</option>
                        <option value="september">September</option>
                        <option value="october">October</option>
                        <option value="november">November</option>
                        <option value="december">December</option>
                      </select>
                      <i class="fa-solid fa-chevron-down" style={{ color: "#ada5a5" }}></i>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-12">
                    <div className="one_fourth themeborder">
                      <input type="search" placeholder="Max budget ex.500" />
                      <i class="fa-solid fa-dollar-sign" style={{ color: "#ada5a5", fontSize: "14px" }}></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="advanced">
              <i class="fa-solid fa-chevron-down"></i>
              <p id="advanced_search" onClick={() => handleClickP()}>
                Advanced Search
              </p>
            </div>
          </div>

          <div
            id="jarallax-container-0"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              overflow: "hidden",
              zIndex: -100,
            }}
          >
            <video playsInline autoPlay muted loop style={{ position: "absolute", width: 1349, height: "800px" }}>
              <source src="polina.webm" type="video/webm" />
              <source
                src="https://res.cloudinary.com/dn4nxz7f0/video/upload/v1594348575/Pexels_Videos_1093655_pr26ax.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBody;
