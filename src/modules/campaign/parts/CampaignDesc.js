import React from "react";
import classNames from "utils/classNames";

const CampaignDesc = ({ children, className = '' }) => {
  return <p className={classNames(
    "text-text3 font-normal",
    className
  )}>{children}</p>;
};

export default CampaignDesc;
