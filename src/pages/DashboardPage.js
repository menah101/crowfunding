import Gap from "components/common/Gap";
import Heading from "components/common/Heading";
import CampaignFeature from "modules/campaign/CampaignFeature";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignItem from "modules/campaign/CampaignItem";
import React, { Fragment } from "react";
import { v4 } from "uuid";

const DashboardPage = () => {
  return (
    <Fragment>
      <Gap>
        <Heading number={4} className="mb-4">
          Your campaign
        </Heading>
        <CampaignFeature />
      </Gap>
      <Gap>
        <Heading className="mb-4">Popular Campaign</Heading>
        <CampaignGrid>
          {Array(4)
            .fill(0)
            .map((item) => (
              <CampaignItem key={v4()}></CampaignItem>
            ))}
        </CampaignGrid>
      </Gap>
      <Gap>
        <Heading className="mb-4">Recent Campaign</Heading>
        <CampaignGrid>
          {Array(4)
            .fill(0)
            .map((item) => (
              <CampaignItem key={v4()}></CampaignItem>
            ))}
        </CampaignGrid>
      </Gap>
    </Fragment>
  );
};

export default DashboardPage;
