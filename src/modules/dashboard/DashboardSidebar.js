import { IconCampaign, IconDarkmode, IconDashboard, IconLogout, IconProfile, IconWithdraw } from "components/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "utils/classNames";
const sidebarLinks = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Dashboard",
    url: "/",
  },
  {
    icon: <IconCampaign></IconCampaign>,
    title: "Campaign",
    url: "/campaign",
  },
  {
    icon: <IconWithdraw></IconWithdraw>,
    title: "Withdraw",
    url: "/withdraw",
  },
  {
    icon: <IconProfile></IconProfile>,
    title: "Profile",
    url: "/profile",
  },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "/logout",
  },
  {
    icon: <IconDarkmode></IconDarkmode>,
    title: "Light/Dark",
    url: "#",
  },
];

const DashboardSidebar = () => {
  return (
    <div className="w-full md:w-[76px] rounded-3xl bg-white shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] px-[14px] py-10 flex flex-col">
      {sidebarLinks.map((link) => (
        <NavLink
          to={link.url}
          key={link.title}
          className={classNames(
            "flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8 last:mt-auto last:bg-white last:shadow-sdprimary",
            ({ isActive }) => (isActive ? "bg-primary text-primary bg-opacity-20" : "")
          )}
        >
          <span>{link.icon}</span>
          <span className="md:hidden">{link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;