import React, { Fragment } from "react";
import CampImage from "./parts/CampImage";
import CampCategory from "./parts/CampCategory";
import CampTitle from "./parts/CampTitle";
import CampDesc from "./parts/CampDesc";
import CampMeta from "./parts/CampMeta";
import { Button } from "components/button";
import CampViewAuthor from "./parts/CampViewAuthor";
import { v4 } from "uuid";
import { defaultImage } from "constants/global";
import CampaignSupport from "./CampaignSupport";
import CampaignPerk from "./CampaignPerk";
import CampaignGrid from "./CampaignGrid";
import CampaignItem from "./CampaignItem";

const CampaignView = () => {
  return (
    <Fragment>
      <div className="h-[140px] rounded-3xl overflow-hidden w-full bg-center bg-no-repeat bg-cover bg-opacity-40 flex items-center justify-center mb-10 gradient-banner">
        <h1 className="text-white text-[40px] font-bold leading-[60px]">
          Education
        </h1>
      </div>
      <div className="flex items-start gap-x-10 w-full max-w-[1066px]">
        <div className="flex-1">
          <CampImage className="h-[398px] mb-8"></CampImage>
          <div className="flex items-center justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  src={defaultImage}
                  className="w-[89px] h-[70px] rounded-lg object-cover"
                  alt=""
                  key={v4()}
                />
              ))}
          </div>
        </div>
        <div className="flex-1 max-w-[443px]">
          <CampCategory text="Architecture" className="text-sm"></CampCategory>
          <CampTitle className="mb-4 text-xl font-bold">
            Remake - We Make architecture exhibition
          </CampTitle>
          <CampDesc className="mb-6 text-sm">
            Remake - We Make: an exhibition about architecture's social agency
            in the face of urbanisation
          </CampDesc>
          <CampViewAuthor></CampViewAuthor>
          <div className="w-full h-[5px] rounded-full bg-[#EFEFEF] mb-6">
            <div className="w-1/2 h-full rounded-full bg-primary"></div>
          </div>
          <div className="flex items-start justify-between mb-4 gap-x-5">
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
          </div>
          <Button kind="primary" className="w-full">
            Back this project
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[100px] bg-white p-5 shadow-sm border-b border-slate-200 mb-6">
        <div className="flex items-center text-sm gap-x-14 text-text3">
          <span className="cursor-pointer hover:font-semibold hover:text-secondary">
            Campgain
          </span>
          <span className="cursor-pointer hover:font-semibold hover:text-secondary">
            Risks
          </span>
          <span className="cursor-pointer hover:font-semibold hover:text-secondary">
            FAQ
          </span>
          <span className="cursor-pointer hover:font-semibold hover:text-secondary">
            Updates
          </span>
          <span className="cursor-pointer hover:font-semibold hover:text-secondary">
            Comments
          </span>
        </div>
        <Button kind="primary" className="px-9">
          Back this project
        </Button>
      </div>
      <div className="grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]">
        <div>
          <h2 className="mb-5 text-lg font-semibold uppercase">Story</h2>
          <div className="w-full bg-white"></div>
        </div>
        <div>
          <CampaignSupport></CampaignSupport>
          <div className="mb-[60px]"></div>
          <div className="flex flex-col gap-y-[30px]">
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
          </div>
        </div>
      </div>
      <h2 className="mb-10 text-xl font-semibold text-text1">
        You also may be interested in
      </h2>
      <CampaignGrid>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </CampaignGrid>
    </Fragment>
  );
};

export default CampaignView;
