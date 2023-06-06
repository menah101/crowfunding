import { defaultImage } from "constants/global";
import React from "react";

const CampaignAuth = ({ image = defaultImage, author = 'Sepural Gallery' }) => {
  return (
    <div className="flex items-center gap-x-3">
      <img
        src={image}
        alt="avatar"
        className="w-8 h-8 rounded-full object-cover"
      />
      <p className="text-xs text-text3">
        By <span className="font-semibold text-text2">{author}</span>
      </p>
    </div>
  );
};

export default CampaignAuth;
