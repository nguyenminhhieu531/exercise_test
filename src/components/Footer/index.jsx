import "./footer.scss";
import "./responsive_footer.scss";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"></link>;

function Footer() {
  return (
    <>
      <div id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-12">
              <div className="textwidget">
                <h2 className="widgettitle">Our Awards</h2>
                <p>
                  London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the
                  United Kingdom.
                  <br />
                  <img
                    src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png"
                    width={246}
                    height={113}
                    style={{ marginTop: 30 }}
                    alt
                    data-lazy-src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png"
                    data-ll-status="loaded"
                    className="entered lazyloaded"
                  />
                  <noscript>
                    &lt;img
                    src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png"
                    width="246" height="113" style="margin-top:30px;" alt=""/&gt;
                  </noscript>
                </p>
              </div>
            </div>
            <div className="col-md-4 col-xs-12">
              <div id="text-4" className="widget widget_text">
                <h2 className="widgettitle">Contact Info</h2>
                <div className="textwidget">
                  <p>
                    <i class="fa-solid fa-mobile-screen" style={{ marginRight: 10 }}></i>
                    1-567-124-44227
                  </p>
                  <p>
                    <i class="fa-solid fa-location-dot" style={{ marginRight: 10 }}></i>
                    184 Main Street East Perl Habour 8007
                  </p>
                  <p>
                    <i class="fa-solid fa-stopwatch" style={{ marginRight: 10 }}></i>
                    Mon - Sat 8.00 - 18.00 Sunday CLOSED
                  </p>
                  <div style={{ marginTop: 20 }}>
                    <div className="social_wrapper shortcode dark ">
                      <ul>
                        <li className="facebook">
                          <a target="_blank" title="Facebook" href="#" rel="noopener">
                            <i class="fa-brands fa-facebook-f"></i>
                          </a>
                        </li>
                        <li className="twitter">
                          <a target="_blank" title="Twitter" href="https://twitter.com/#" rel="noopener">
                            <i class="fa-brands fa-twitter"></i>
                          </a>
                        </li>
                        <li className="youtube">
                          <a target="_blank" title="Youtube" href="#" rel="noopener">
                            <i class="fa-brands fa-youtube"></i>
                          </a>
                        </li>
                        <li className="pinterest">
                          <a target="_blank" title="Pinterest" href="https://pinterest.com/#" rel="noopener">
                            <i class="fa-brands fa-pinterest"></i>
                          </a>
                        </li>
                        <li className="instagram">
                          <a target="_blank" title="Instagram" href="https://instagram.com/theplanetd" rel="noopener">
                            <i className="fa-brands fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xs-12">
              <div id="grandtour_flickr-7" className="widget Grandtour_Flickr">
                <h2 className="widgettitle">Recent Trips</h2>
                <div className="row">
                  <div className="col-md-4 col-xs-4">
                    <a target="_blank" href="https://www.flickr.com/photos/artiephotography/28760131762/">
                      <img
                        src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg"
                        alt="Buddha Sunrise in Borobudur, Magelang, Central Java, Indonesia"
                        width={75}
                        height={75}
                        data-lazy-src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg"
                        data-ll-status="loaded"
                        className="entered lazyloaded"
                      />
                      <noscript>
                        &lt;img src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" alt="Buddha
                        Sunrise in Borobudur, Magelang, Central Java, Indonesia" width="75" height="75" /&gt;
                      </noscript>
                    </a>
                  </div>
                  <div className="col-md-4 col-xs-4">
                    <a target="_blank" href="https://www.flickr.com/photos/artiephotography/28760131762/">
                      <img
                        src="https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg"
                        alt="Buddha Sunrise in Borobudur, Magelang, Central Java, Indonesia"
                        width={75}
                        height={75}
                        data-lazy-src="https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg"
                        data-ll-status="loaded"
                        className="entered lazyloaded"
                      />
                      <noscript>
                        &lt;img src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" alt="Buddha
                        Sunrise in Borobudur, Magelang, Central Java, Indonesia" width="75" height="75" /&gt;
                      </noscript>
                    </a>
                  </div>
                  <div className="col-md-4 col-xs-4">
                    <a target="_blank" href="https://www.flickr.com/photos/artiephotography/28760131762/">
                      <img
                        src="https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg"
                        alt="Buddha Sunrise in Borobudur, Magelang, Central Java, Indonesia"
                        width={75}
                        height={75}
                        data-lazy-src="https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg"
                        data-ll-status="loaded"
                        className="entered lazyloaded"
                      />
                      <noscript>
                        &lt;img src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" alt="Buddha
                        Sunrise in Borobudur, Magelang, Central Java, Indonesia" width="75" height="75" /&gt;
                      </noscript>
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 col-xs-4">
                    <a target="_blank" href="https://www.flickr.com/photos/artiephotography/28760131762/">
                      <img
                        src="https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg"
                        alt="Buddha Sunrise in Borobudur, Magelang, Central Java, Indonesia"
                        width={75}
                        height={75}
                        data-lazy-src="https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg"
                        data-ll-status="loaded"
                        className="entered lazyloaded"
                      />
                      <noscript>
                        &lt;img src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" alt="Buddha
                        Sunrise in Borobudur, Magelang, Central Java, Indonesia" width="75" height="75" /&gt;
                      </noscript>
                    </a>
                  </div>
                  <div className="col-md-4 col-xs-4">
                    <a target="_blank" href="https://www.flickr.com/photos/artiephotography/28760131762/">
                      <img
                        src="https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg"
                        alt="Buddha Sunrise in Borobudur, Magelang, Central Java, Indonesia"
                        width={75}
                        height={75}
                        data-lazy-src="https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg"
                        data-ll-status="loaded"
                        className="entered lazyloaded"
                      />
                      <noscript>
                        &lt;img src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" alt="Buddha
                        Sunrise in Borobudur, Magelang, Central Java, Indonesia" width="75" height="75" /&gt;
                      </noscript>
                    </a>
                  </div>
                  <div className="col-md-4 col-xs-4">
                    <a target="_blank" href="https://www.flickr.com/photos/artiephotography/28760131762/">
                      <img
                        src="https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg"
                        alt="Buddha Sunrise in Borobudur, Magelang, Central Java, Indonesia"
                        width={75}
                        height={75}
                        data-lazy-src="https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg"
                        data-ll-status="loaded"
                        className="entered lazyloaded"
                      />
                      <noscript>
                        &lt;img src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" alt="Buddha
                        Sunrise in Borobudur, Magelang, Central Java, Indonesia" width="75" height="75" /&gt;
                      </noscript>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div id="copyright">© Copyright Grand Tour Theme Demo - Theme by ThemeGoods</div>
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="menu-footer-menu-container">
                <ul id="footer_menu" className="footer_nav">
                  <li
                    id="menu-item-215"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-215"
                  >
                    <a href="https://themes.themegoods.com/grandtour/demo/">Home</a>
                  </li>
                  <li
                    id="menu-item-216"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-216"
                  >
                    <a href="https://themes.themegoods.com/grandtour/demo/tours/">Tours</a>
                  </li>
                  <li
                    id="menu-item-217"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-217"
                  >
                    <a href="https://themes.themegoods.com/grandtour/demo/blog/">Blog</a>
                  </li>
                  <li
                    id="menu-item-218"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-218"
                  >
                    <a href="#">Purchase Theme</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"></script>
    </>
  );
}

export default Footer;
