import React from "react";

const MenuList = ({ icon, title }) => {
  return (
    <div className="d-flex align-items-center mb-2">
      <img
        src={icon}
        alt=""
        className="me-2"
        style={{ height: "14px", width: "14px" }}
      />
      <p className="text-brand-primary mb-0"> {title}</p>
    </div>
  );
};

export default MenuList;
