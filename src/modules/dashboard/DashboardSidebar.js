import {
  IconCampaign,
  IconDarkMode,
  IconDashboard,
  IconLogout,
  IconPayment,
  IconProfile,
  IconWithdraw,
} from "components/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { authLogOut } from "store/auth/auth-slice";
import { logOut } from "utils/auth";

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
    icon: <IconPayment></IconPayment>,
    title: "Payment",
    url: "/payment",
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
    onclick: () => {
      logOut();
    },
  },
  {
    icon: <IconDarkMode></IconDarkMode>,
    title: "Light/Dark",
    url: "/darkmode",
    onclick: () => {},
  },
];

const DashboardSidebar = () => {
  const dispath = useDispatch();

  return (
    <div className="w-full md:w-[76px] md:rounded-3xl bg-white md:shadow-sdprimary p-[14px] py-10 flex flex-col md:min-h-[733px] flex-shrink-0">
      {sidebarLinks.map((link) => {
        if (link.url === "/logout") {
          return (
            <button
              type="button"
              key={link.title}
              onClick={() => dispath(authLogOut())}
              className="flex items-center gap-x-5 md:justify-center md:w-12 md:h-12 md:rounded-xl md:mb-8 text-iconColor last:mt-auto last:mb-0 last:bg-white last:shadow-sdprimary"
            >
              <span>{link.icon}</span>
              <span className="md:hidden">{link.title}</span>
            </button>
          );
        }
        return (
          <NavLink
            to={link.url}
            key={link.title}
            className={({ isActive }) =>
              `flex items-center gap-x-5 md:justify-center md:w-12 md:h-12 md:rounded-xl md:mb-8 text-iconColor last:mt-auto last:mb-0 last:bg-white last:shadow-sdprimary ${
                isActive ? "bg-primary bg-opacity-20 text-primary" : ""
              }`
            }
          >
            <span>{link.icon}</span>
            <span className="md:hidden">{link.title}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default DashboardSidebar;
