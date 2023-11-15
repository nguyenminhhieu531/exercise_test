import React from "react";

function OptionBtn() {
  return (
    <div id="option_btn">
      <a href="javascript:;" className="demotip tooltipstered">
        <i className="fa-solid fa-gear" style={{ color: "#b6b3b3" }} />
      </a>
      <a
        href="https://themes.themegoods.com/grandtour/landing/showcase/"
        className="demotip tooltipstered"
        target="_blank"
      >
        <i className="fa-solid fa-heart" style={{ color: "#b6b3b3" }} />
      </a>
      <a href="https://themes.themegoods.com/grandtour/doc" className="demotip tooltipstered" target="_blank">
        <i className="fa-solid fa-book-open" style={{ color: "#b6b3b3" }} />
      </a>
      <a href="https://1.envato.market/EnokD" className="demotip tooltipstered" target="_blank">
        <i className="fa-solid fa-cart-plus" style={{ color: "#b6b3b3" }} />
      </a>
    </div>
  );
}

export default OptionBtn;
