import React from "react";
import Navigation from "./Navigation";
import SearchSection from "./SearchSection";

const Header = () => {
  return (
    <div className="header w-100">
      <Navigation></Navigation>
      <SearchSection></SearchSection>
    </div>
  );
};

export default Header;
