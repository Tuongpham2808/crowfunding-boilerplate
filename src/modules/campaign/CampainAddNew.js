import axios from "axios";
import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import { Dropdown } from "components/dropdown";
import { Input, Textarea } from "components/input";
import { Label } from "components/label";
import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill, { Quill } from "react-quill";
import ImageUploader from "quill-image-uploader";
import "react-quill/dist/quill.snow.css";
import { imgbbAPI } from "config/apiConfig";

Quill.register("modules/imageUploader", ImageUploader);

const CampainAddNew = () => {
  const [content, setContent] = useState("");
  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
  });

  const handleAddNewCampain = (values) => {
    console.log(values);
  };

  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        // imgbbAPI
        upload: async (file) => {
          console.log("upload: ~ file", file);
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
          return response.data.data.url;
        },
      },
    }),
    []
  );

  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="mb-10 text-center">
        <div className="py-4 px-14 bg-text4 bg-opacity-[0.08] rounded-xl inline-flex items-center gap-x-2 mx-auto">
          <h1 className="text-2xl font-bold text-text2">Start a Campaign</h1>
          <span>
            <img srcSet="/Rocket.png 2x" alt="" />
          </span>
        </div>
      </div>
      <form onSubmit={handleSubmit(handleAddNewCampain)}>
        <FormRow>
          <FormGroup>
            <Label>Campaign Title *</Label>
            <Input
              control={control}
              name="title"
              placeholder="Write a title"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Select a category *</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select a category"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Real Estate</Dropdown.Option>
                <Dropdown.Option>Education</Dropdown.Option>
                <Dropdown.Option>Home</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label>Short Description *</Label>
          <Textarea
            control={control}
            name="short_description"
            placeholder="Write a short description...."
          ></Textarea>
        </FormGroup>
        <FormGroup>
          <Label>Story *</Label>
          <ReactQuill
            modules={modules}
            theme="snow"
            value={content}
            onChange={setContent}
            placeholder="Write your story......"
          />
        </FormGroup>
      </form>
    </div>
  );
};

export default CampainAddNew;
