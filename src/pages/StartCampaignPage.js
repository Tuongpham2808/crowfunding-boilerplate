import LayoutDashboard from "layout/LayoutDashboard";
import CampainAddNew from "modules/campaign/CampainAddNew";
import React from "react";

const StartCampaignPage = () => {
  return (
    <LayoutDashboard>
      <CampainAddNew></CampainAddNew>
    </LayoutDashboard>
  );
};

export default StartCampaignPage;
