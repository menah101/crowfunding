import React from "react";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignMeta from "./parts/CampaignMeta";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignTitle from "./parts/CampaignTitle";
import CampaignAuth from "./parts/CampaignAuth";
import CampaignImage from "./parts/CampaignImage";

const CampaignItem = () => {
  return (
    <div className="">
     <CampaignImage />
      <div className="px-5 py-4">
        <CampaignCategory text="Education" />
        <CampaignTitle>Powered Kits Learning Boxes</CampaignTitle>
        <CampaignDesc className="text-sm mb-4">
          I am fortunate to have been a part of an amazing company and have done some amazing things.
        </CampaignDesc>
        <div className="flex items-start justify-between gap-x-5 mb-5">
          <CampaignMeta amount="$2,000" text="Raised of $1,900" />
          <CampaignMeta amount="173" text="Total backers" />
        </div>
        <CampaignAuth/>
      </div>
    </div>
  );
};

export default CampaignItem;
