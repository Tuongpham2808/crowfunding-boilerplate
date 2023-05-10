import axios from "axios";
import { imgbbAPI } from "config/apiConfig";
import React from "react";
import { toast } from "react-toastify";

const ImageUpload = ({ onChange = () => {}, name = "" }) => {
  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const bodyFormData = new FormData();
    console.log("upload: ~ bodyFormData", bodyFormData);
    bodyFormData.append("image", file);
    const response = await axios({
      method: "post",
      url: imgbbAPI,
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const imageData = response.data.data;
    if (!imageData) {
      toast.error("Can not upload image to imgbbAPI");
      return;
    }
    const imageObj = {
      medium: imageData.medium.url,
      thumb: imageData.thumb.url,
      url: imageData.url,
    };
    toast.success("image upload successfully");
    onChange(name, imageObj);
  };

  return (
    <label className="w-full border border-dashed rounded-lg border-strock h-[200px] cursor-pointer flex items-center justify-center">
      <input type="file" className="hidden" onChange={handleUploadImage} />
      <img src="/img-upload.png" alt="upload" className="w-[80px] h-[80px]" />
    </label>
  );
};

export default ImageUpload;
