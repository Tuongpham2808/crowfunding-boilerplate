import ReactQuill, { Quill } from "react-quill";
import React, { useEffect, useMemo, useState } from "react";
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
import useOnchange from "hooks/useOnchange";
import { toast } from "react-toastify";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { v4 } from "uuid";
import { apiURL } from "config/config";
import ImageUpload from "components/image/ImageUpload";

Quill.register("modules/imageUploader", ImageUploader);
const categoriesData = ["architecture", "education"];
const endMethodsData = ["architecture", "education"];

const CampaignAddNew = () => {
  const [content, setContent] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { control, handleSubmit, setValue, reset, watch } = useForm({
    mode: "onSubmit",
  });
  const getDropdownLabel = (name, defaultValue) => {
    const value = watch(name) || defaultValue;
    return value;
  };
  const handleSelectDropdownOption = (name, value) => {
    setValue(name, value);
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
  const [countries, setCountries] = useState([]);
  const [filterCountry, setFilterCountry] = useOnchange(500);
  useEffect(() => {
    if (!filterCountry) return;
    async function fetchCountries() {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${filterCountry}`
        );
        setCountries(response.data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchCountries();
  }, [filterCountry]);

  const resetValues = () => {
    setStartDate(new Date());
    setEndDate(new Date());
    reset({});
  };

  const handleAddNewCampain = async (values) => {
    console.log(values);
    try {
      await axios.post(`${apiURL}/campaigns`, {
        ...values,
        content,
        startDate,
        endDate,
      });
      toast.success("Create campaign successfully");
      resetValues();
    } catch (error) {
      toast.error("Can not create new campaign");
    }
  };

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
              <Dropdown.Select
                placeholder={getDropdownLabel("category", "Select a category")}
              ></Dropdown.Select>
              <Dropdown.List>
                {categoriesData.map((category) => (
                  <Dropdown.Option
                    key={v4()}
                    onClick={() =>
                      handleSelectDropdownOption("category", category)
                    }
                  >
                    <span className="capitalize">{category}</span>
                  </Dropdown.Option>
                ))}
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
        {/* row 2.5 */}
        <FormRow>
          <FormGroup>
            <Label>Featured Image</Label>
            <ImageUpload
              name="featured_image"
              onChange={setValue}
            ></ImageUpload>
          </FormGroup>
        </FormRow>
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
              <Dropdown.Select
                placeholder={getDropdownLabel("endMethod", "Select one")}
              ></Dropdown.Select>
              <Dropdown.List>
                {endMethodsData.map((endMethod) => (
                  <Dropdown.Option
                    key={v4()}
                    onClick={() =>
                      handleSelectDropdownOption("endMethod", endMethod)
                    }
                  >
                    <span className="capitalize">{endMethod}</span>
                  </Dropdown.Option>
                ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
          <FormGroup>
            <Label>Counrty</Label>
            <Dropdown>
              <Dropdown.Select
                placeholder={getDropdownLabel("country", "Select a country")}
              ></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Search
                  placeholder="Search country"
                  onChange={setFilterCountry}
                ></Dropdown.Search>
                {countries.length > 0 &&
                  countries.map((country) => (
                    <Dropdown.Option
                      key={country?.name?.common}
                      onClick={() =>
                        handleSelectDropdownOption(
                          "country",
                          country?.name?.common
                        )
                      }
                    >
                      {country?.name?.common}
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        {/* row 6 */}
        <FormRow>
          <FormGroup>
            <Label>Start Date</Label>
            <DatePicker
              onChange={setStartDate}
              value={startDate}
              format="dd-MM-yyyy"
            />
          </FormGroup>
          <FormGroup>
            <Label>End Date</Label>
            <DatePicker
              onChange={setEndDate}
              value={endDate}
              format="dd-MM-yyyy"
            />
          </FormGroup>
        </FormRow>
        {/* submit */}
        <FormGroup className="text-center">
          <Button kind="primary" className="px-10 py-3 mx-auto" type="submit">
            Submit new campaign
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default CampaignAddNew;
