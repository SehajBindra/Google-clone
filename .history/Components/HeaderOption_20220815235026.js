import React from "react";
import Icon from "./HeaderOptions";

function HeaderOption({ title, src, selected }) {
  return (
    <div className={`flex`}>
      <img className="h-6 w-6" src={src} alt="" />
      <Icon />
    </div>
  );
}

export default HeaderOption;
