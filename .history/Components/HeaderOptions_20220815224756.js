import React from "react";

function HeaderOptions() {
  return (
    <div>
      {/* left */}
      <div className="flex space-x-6"></div>
      {/* right */}
      <div className="flex items-center space-x-4 ">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
