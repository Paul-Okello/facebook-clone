import React from "react";
import "./Sidebar.css";

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      <p>{title}</p>
    </div>
  );
}

export default SidebarRow;
