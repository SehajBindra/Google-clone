import React from "react";

function HeaderOption({ src, title, icon, selected }) {
  return (
    <div className={`flex`}>
      <img className="h-6 w-6" src={src} alt="" />
      {icon}
    </div>
  );
}

export default HeaderOption;
