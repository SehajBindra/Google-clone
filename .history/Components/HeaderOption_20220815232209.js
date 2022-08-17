import React from "react";

function HeaderOption({ src, title, Icon, selected }) {
  return (
    <div className={`flex`}>
      <img className="h-6 text-base" src={src} alt="" />
    </div>
  );
}

export default HeaderOption;
