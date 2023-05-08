import { Button } from "components/button";
import { Input } from "components/input";
import React from "react";
import { useForm } from "react-hook-form";

const CampaignSupport = () => {
  const { control } = useForm({});
  return (
    <div>
      <h2 className="mb-5 text-lg font-semibold text-text1">Support</h2>
      <div className="flex flex-col justify-center w-full px-6 bg-white shadow-1 py-7 rounded-xl">
        <p className="mb-8 text-xl font-medium text-center text-text3">
          Pledge without reward
        </p>
        <Input
          control={control}
          placeholder="$10"
          name="pledge"
          className="w-full px-5 py-3 mb-5 text-lg font-medium border rounded border-strock"
        ></Input>
        <div className="p-5 mb-5 bg-grayf3 rounded-xl">
          <p className="mb-5 text-sm font-semibold text-text2">
            Back it because you believe in it.
          </p>
          <p className="text-sm text-text3">
            Support the project for no reward, just because it speaks to you.
          </p>
        </div>
        <Button kind="secondary">Continue</Button>
      </div>
    </div>
  );
};

export default CampaignSupport;
