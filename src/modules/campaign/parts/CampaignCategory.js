import { IconFolder } from "components/icons";
import React from "react";
import { Link } from "react-router-dom";
import classNames from "utils/classNames";

const CampaignCategory = ({ text = "", className = 'text-xs mb-4' }) => {
  return (
    <Link to="/" className={classNames(
      "flex items-baseline gap-x-3 font-medium text-text3",
      className
    )}>
      <IconFolder />
      <span>{text}</span>
    </Link>
  );
};

export default CampaignCategory;
