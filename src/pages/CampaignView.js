import CampaignCategory from "modules/campaign/parts/CampaignCategory";
import CampaignImage from "modules/campaign/parts/CampaignImage";
import CampaignTitle from "modules/campaign/parts/CampaignTitle";
import CampaignDesc from "modules/campaign/parts/CampaignDesc";
import CampaignMeta from "modules/campaign/parts/CampaignMeta";
import React, { Fragment } from "react";
import { Button } from "components/button";
import CampaignViewAuth from "modules/campaign/parts/CampaignViewAuth";
import CampaignSupport from "modules/campaign/CampaignSupport";
import CampaignPerk from "modules/campaign/CampaignPerk";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignItem from "modules/campaign/CampaignItem";

const CampaignView = () => {
  return (
    <Fragment>
      <div
        className="h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center bg-opacity-40 flex items-center justify-center text-white text-[40px] font-bold mb-10"
        style={{
          backgroundImage: `linear-gradient(
    179.14deg,
    rgba(32, 18, 63, 0) -7.14%,
    rgba(0, 0, 0, 0.4) 87.01%
  ), url(https://source.unsplash.com/random)`,
        }}
      >
        <h1>Education</h1>
      </div>
      <div className="flex items-start gap-x-10 w-full max-w-[1066px]">
        <div className="flex-1">
          <CampaignImage className="h-[398px] mb-8" />
          <div className="flex justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  src="https://source.unsplash.com/random"
                  className="w-[89px] h-[70px] object-cover rounded-lg"
                  alt=""
                />
              ))}
          </div>
        </div>
        <div className="flex-1 max-w-[443px]">
          <CampaignCategory text="Architecture" className="mb-4 text-sm" />
          <CampaignTitle className="font-bold mb-4 text-xl">Adventure is dangerous, try routine</CampaignTitle>
          <CampaignDesc className="text-sm mb-6">
            I am fortunate to have been a part of an amazing company and have done some amazing things.
          </CampaignDesc>
          <CampaignViewAuth />
          <div className="w-full h-[5px] rounded-full bg-[#EFEFEF]">
            <div className="h-full w-2/4 rounded-full bg-primary"></div>
          </div>
          <div className="flex items-start justify-between gap-x-5 mt-5 mb-4">
            <CampaignMeta size="big" amount="$2,000" text="Raised of $2,000" />
            <CampaignMeta size="big" amount="173" text="Total backers" />
            <CampaignMeta size="big" amount="30" text="Day left" />
          </div>
          <Button className="w-full" kind="primary">
            Back this project
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[100px] bg-white p-5 border-b border-b-slate-100 mb-6">
        <div className="flex items-center text-sm font-medium gap-x-14 text-text3">
          <span className="cursor-pointer text-secondary">Campaign</span>
        </div>
        <Button kind="primary">Back this project</Button>
      </div>
      <div className="grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]">
        <div>
          <h2 className="mb-5 text-lg font-semibold uppercase">Story</h2>
          <div className="w-full bg-white"></div>
        </div>
        <div>
          <CampaignSupport />
          <div className="mb-[60px]"></div>
          <div className="flex flex-col gap-y-[30px]">
            <CampaignPerk />
            <CampaignPerk />
            <CampaignPerk />
          </div>
        </div>
      </div>
      <h2 className="mb-10 text-xl font-semibold">
        You also may be interested in
      </h2>
      <CampaignGrid>
        <CampaignItem />
        <CampaignItem />
        <CampaignItem />
        <CampaignItem />
      </CampaignGrid>
    </Fragment>
  );
};

export default CampaignView;
