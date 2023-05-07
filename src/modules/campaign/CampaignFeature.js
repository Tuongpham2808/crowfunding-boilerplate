import React from "react";
import CampImage from "./parts/CampImage";
import CampCategory from "./parts/CampCategory";
import CampTitle from "./parts/CampTitle";
import CampDesc from "./parts/CampDesc";
import CampMeta from "./parts/CampMeta";

const CampaignFeature = () => {
  return (
    <div className="flex items-center gap-x-[30px] w-full max-w-[1048px]">
      <CampImage className="h-[266px] flex-1"></CampImage>
      <div className="flex-1 max-w-[435px]">
        <CampCategory text="Architecture" className="text-sm"></CampCategory>
        <CampTitle className="text-xl font-bold mb-4">
          Remake - We Make architecture exhibition
        </CampTitle>
        <CampDesc className="text-sm mb-3">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </CampDesc>
        <div className="w-full h-[5px] rounded-full bg-[#EFEFEF] mb-6">
          <div className="h-full w-1/2 rounded-full bg-primary"></div>
        </div>
        <div className="flex items-start justify-between gap-x-5">
          <CampMeta size="big"></CampMeta>
          <CampMeta size="big"></CampMeta>
          <CampMeta size="big"></CampMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
