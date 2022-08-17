import React from "react";

function HeaderOption({ src, title, Icon, selected }) {
  return (
    <div className={`flex`}>
      <img src={src} alt="" />

      <title>{Icon}</title>
    </div>
  );
}

export default HeaderOption;
