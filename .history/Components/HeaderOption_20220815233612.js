import React from "react";
import Icon from "..";

function HeaderOption({ src, title, Icon, selected }) {
  return (
    <div className={`flex`}>
      <img className="h-6 w-6" src={src} alt="" />
      <Icon className="h-4" />
    </div>
  );
}

export default HeaderOption;
