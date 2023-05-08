import ReactQuill, { Quill } from "react-quill";
import React, { useMemo, useState } from "react";
import ImageUploader from "quill-image-uploader";
import FormRow from "components/common/FormRow";
import FormGroup from "components/common/FormGroup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Label } from "components/label";
import { Input, Textarea } from "components/input";
import { imgbbAPI } from "config/apiConfig";
import { Dropdown } from "components/dropdown";
import "react-quill/dist/quill.snow.css";
import { Button } from "components/button";

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
        {/* row 1 */}
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
        {/* row 2 */}
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
        {/* row 3 */}
        <FormRow>
          <FormGroup>
            <Label>Goal *</Label>
            <Input
              control={control}
              name="goal"
              placeholder="$0.00 USD"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Raised Amount *</Label>
            <Input
              control={control}
              name="amount"
              placeholder="$0.00 USD"
            ></Input>
          </FormGroup>
        </FormRow>
        {/* row 4 */}
        <FormRow>
          <FormGroup>
            <Label>Amount Prefilled</Label>
            <Input
              control={control}
              name="prefilled"
              placeholder="Amount Prefilled"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Video</Label>
            <Input control={control} name="video" placeholder="Video"></Input>
          </FormGroup>
        </FormRow>
        {/* row 5 */}
        <FormRow>
          <FormGroup>
            <Label>Campaign End Method</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select one"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Real Estate</Dropdown.Option>
                <Dropdown.Option>Education</Dropdown.Option>
                <Dropdown.Option>Home</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
          <FormGroup>
            <Label>Counrty</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select a country"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Ha noi</Dropdown.Option>
                <Dropdown.Option>Da nang</Dropdown.Option>
                <Dropdown.Option>HCM city</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        {/* row 6 */}
        <FormRow>
          <FormGroup>
            <Label>Start Date</Label>
            <Input
              type="date"
              control={control}
              name="start_date"
              placeholder="Start Date"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>End Date</Label>
            <Input
              type="date"
              control={control}
              name="end_date"
              placeholder="End Date"
            ></Input>
          </FormGroup>
        </FormRow>
        {/* submit */}
        <FormGroup className="text-center">
          <Button kind="primary" className="px-10 py-3 mx-auto">
            Submit new campaign
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default CampainAddNew;
