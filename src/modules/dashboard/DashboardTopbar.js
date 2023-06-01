import React from "react";
import DashboardSearch from "./DashboardSearch";
import Button from "components/button/Button";
import DashboardFund from "./DashboardFund";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-x-10 flex-1">
        <img srcSet="/logo.png 2x" alt="logo" />
        <div className="max-w-[458px] w-full">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center flex-1 gap-x-10 justify-end">
        <DashboardFund> </DashboardFund>
        <Button type="button" className="bg-secondary px-7">Start a campaign</Button>
        <img srcSet="/logo.png 2x" alt="logo" className="rounded-full object-cover" />
      </div>
    </div>
  );
};

export default DashboardTopbar;
