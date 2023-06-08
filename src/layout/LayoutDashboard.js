import { Button } from "components/button";
import Overlay from "components/common/Overlay";
import CampaignPerk from "modules/campaign/CampaignPerk";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import React from "react";
import ReactModal from "react-modal";
import { Outlet } from "react-router-dom";

const LayoutDashboard = () => {
  return (
    <div className="p-10 bg-lite min-h-screen">
      <ReactModal
        isOpen={false}
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
        className="modal-content w-full max-w-[521px] bg-white rounded-2xl outline-none p-10 relative max-h-[90vh] overflow-y-auto scroll-hidden"
      >
        <button className="absolute w-11 h-11 flex items-center justify-center z-10 right-5 cursor-pointer top-[10px] text-text1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="font-bold text-[25px] mb-10 text-center">Back this project</h2>
        <p className="text-sm mb-3">Enter the contribute amount</p>
        <input type="text" placeholder="$10" name="amount" className="w-full px-5 py-3 text-lg font-medium border rounded border-strock" />
        <p className="my-5 text-sm text-text3">Contribute are not associatied with perks</p>
        <Button kind="primary">Continue</Button>
        <div className="mt-[60px]"></div>
        <CampaignPerk showButton />
      </ReactModal>
      <Overlay />
      <DashboardTopbar></DashboardTopbar>
      <div className="flex items-start gap-x-10">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
