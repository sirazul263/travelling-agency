import React from "react";
import list from "../../media/icons/list-icon.svg";
import avatar from "../../media/avatar.png";
const BarHeader = () => {
  return (
    <div className="bar-header mb-3">
      <div className="my-3">
        <img src={list} alt="" className="img-fluid" />
      </div>
      <div className="person d-flex align-items-center border-bottom border-top border-1">
        <img src={avatar} alt="" className="img-fluid me-3" />
        <p className="text-brand-primary mt-3">Amanda Victor</p>
      </div>
    </div>
  );
};

export default BarHeader;
