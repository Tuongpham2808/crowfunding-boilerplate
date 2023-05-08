import { defaultImage } from "constants/global";
import React from "react";
import CampTitle from "./parts/CampTitle";
import { Button } from "components/button";

const CampaignPerk = ({ showButton = false }) => {
  return (
    <div>
      <div className="bg-white shadow-1 rounded-xl">
        <img
          src={defaultImage}
          alt=""
          className="h-[232px] object-cover w-full rounded-xl"
        />
        <div className="p-5">
          <span className="inline-block px-3 py-1 mb-5 text-xs font-medium text-white rounded-sm bg-secondary bg-opacity-80">
            Featured
          </span>
          <CampTitle className="mb-1 text-xl font-semibold">
            Special One Camera
          </CampTitle>
          <div className="flex items-center mb-4 gap-x-2">
            <span className="text-xl font-bold text-text1">$2,724 USD</span>
            <span className="text-sm font-medium line-through text-error">
              $1,504 USD
            </span>
            <span className="text-sm font-medium text-error">(12% OFF)</span>
          </div>
          <div className="mb-4">
            <span className="text-base font-medium text-text1 mb">
              Estimated Shipping
            </span>
            <div className="flex flex-col gap-y-4">
              <span className="text-sm font-normal text-text2">
                October 2022
              </span>
              <span className="text-sm font-normal text-text2">
                <strong>05</strong> claimed
              </span>
              <span className="text-sm font-normal text-text2">
                Ships worldwide
              </span>
            </div>
          </div>
        </div>
      </div>
      {showButton && (
        <div className="mt-6">
          <Button className="w-full" kind="secondary">
            Get this perk
          </Button>
        </div>
      )}
    </div>
  );
};

export default CampaignPerk;
