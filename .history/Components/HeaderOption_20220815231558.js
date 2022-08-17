import React from "react";

function HeaderOption({ src, title, Icon }) {
  return (
    <div className={`flex`}>
      <img src={src} alt="" />
      <Icon className="h-4" />
    </div>
  );
}

export default HeaderOption;
