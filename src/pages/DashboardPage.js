import Gap from "components/common/Gap";
import Heading from "components/common/Heading";
import LayoutDashboard from "layout/LayoutDashboard";
import CampaignFeature from "modules/campaign/CampaignFeature";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignItem from "modules/campaign/CampaignItem";
import React from "react";
import { v4 } from "uuid";

const DashboardPage = () => {
  return (
    <LayoutDashboard>
      <Gap>
        <Heading number={4} className="mb-4">
          Your campaign
        </Heading>
        <CampaignFeature />
      </Gap>
      <Gap>
        <Heading className="mb-4">Popular campaign</Heading>
        <CampaignGrid>
          {Array(4)
            .fill(0)
            .map((item) => (
              <CampaignItem key={v4()}></CampaignItem>
            ))}
        </CampaignGrid>
      </Gap>
      <Gap>
        <Heading className="mb-4">Recent campaign</Heading>
        <CampaignGrid>
          {Array(4)
            .fill(0)
            .map((item) => (
              <CampaignItem key={v4()}></CampaignItem>
            ))}
        </CampaignGrid>
      </Gap>
    </LayoutDashboard>
  );
};

export default DashboardPage;
