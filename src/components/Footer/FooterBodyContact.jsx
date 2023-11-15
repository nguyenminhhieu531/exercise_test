import React from "react";

function FooterBodyContact(props) {
  const initialData = [
    {
      iconClass: "fa-brands fa-facebook-f",
      nameClass: "facebook",
    },
    {
      iconClass: "fa-brands fa-twitter",
      nameClass: "twitter",
    },
    {
      iconClass: "fa-brands fa-youtube",
      nameClass: "youtube",
    },
    {
      iconClass: "fa-brands fa-pinterest",
      nameClass: "pinterest",
    },
    {
      iconClass: "fa-brands fa-instagram",
      nameClass: "instagram",
    },
  ];

  let showData = initialData.map((item) => {
    return (
      <li className={item.nameClass}>
        <a target="_blank" title="Facebook" href="#" rel="noopener">
          <i class={item.iconClass}></i>
        </a>
      </li>
    );
  });

  return (
    <div style={{ marginTop: 20 }}>
      <div className="social_wrapper shortcode dark ">
        <ul>{showData}</ul>
      </div>
    </div>
  );
}

export default FooterBodyContact;
