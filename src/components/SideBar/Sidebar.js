import React from "react";
import BarHeader from "./BarHeader";
import MenuSection from "./MenuSection";

const Sidebar = () => {
  return (
    <div style={{ marginRight: "64px", paddingLeft: "20px" }}>
      <BarHeader></BarHeader>
      <MenuSection></MenuSection>
    </div>
  );
};

export default Sidebar;
