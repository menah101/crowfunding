import { defaultImage } from "constants/global";
import React from "react";

const CampaignImage = ({ className = 'h-[158px]', image = defaultImage, alt = '' }) => {
  return (
    <div className={className}>
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
};

export default CampaignImage;
