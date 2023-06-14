import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import { Dropdown } from "components/dropdown";
import { Input } from "components/input";
import Textarea from "components/input/Textarea";
import { Label } from "components/label";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageUploader from "quill-image-uploader";
import axios from "axios";
import { Button } from "components/button";
import useOnChange from "hooks/useOnChange";
import { toast } from "react-toastify";
import DatePicker from "react-date-picker";
import "../../../node_modules/react-date-picker/dist/DatePicker.css";
import "../../../node_modules/react-calendar/dist/Calendar.css";
import { apiURL, imgbbAPI } from "config/config";
import ImageUpload from "components/image/ImageUpload";

Quill.register("modules/imageUploader", ImageUploader);

const categoriesData = ["architecture", "education"];
const methodData = ["method1", "method2"];

const CampaignAddNew = () => {
  const { handleSubmit, control, setValue, reset, watch } = useForm();

  const getDropdownLabel = (name, defaultValue = "") => {
    const value = watch(name) || defaultValue;
    return value;
  };

  const resetValues = () => {
    setStartDate("");
    setEndDate("");
    reset({});
  };

  const handleAddNewCampaign = async (values) => {
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
    // values, startDate, endDate, content
  };

  const [content, setContent] = React.useState("");
  const [countries, setCountries] = React.useState([]);
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const modules = React.useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      // imageUploader: {
      //   upload: async (file) => {
      //     const bodyFormData = new FormData();
      //     bodyFormData.append("image", file);
      //     const response = await axios({
      //       method: "post",
      //       url: imgbbAPI,
      //       data: bodyFormData,
      //       headers: {
      //         "Content-Type": "multipart/form-data",
      //       },
      //     });
      //     return response.data.data.url;
      //   },
      // },
    }),
    []
  );

  const handleSelectDropDownOption = (name, value) => {
    setValue(name, value);
  };

  const [filterCountry, setFilterCountry] = useOnChange();
  useEffect(() => {
    async function fetchCountries() {
      if (!filterCountry) return;
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${filterCountry}`);
        setCountries(response.data);
      } catch (error) {
        toast.error(error.message);
      }
    }

    fetchCountries();
  }, [filterCountry]);

  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="text-center">
        <h1 className="py-4 px-14 bg-text4 bg-opacity-5 rounded-xl font-bold text-[25px] inline-block">
          Start a Campaign 🚀
        </h1>
      </div>
      <form onSubmit={handleSubmit(handleAddNewCampaign)}>
        <FormRow>
          <FormGroup>
            <Label>Campaign Title *</Label>
            <Input control={control} name="title" placeholder="Write a title" />
          </FormGroup>
          <FormGroup>
            <Label>Select a category *</Label>
            <Dropdown>
              <Dropdown.Select placeholder={getDropdownLabel("category", "Select category")}></Dropdown.Select>
              <Dropdown.List>
                {categoriesData.map((category) => (
                  <Dropdown.Option key={category} onClick={() => handleSelectDropDownOption("category", category)}>
                    <span className="capitalize">{category}</span>
                  </Dropdown.Option>
                ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label>Short Description *</Label>
          <Textarea control={control} name="short_description" placeholder="Write a short description..." />
        </FormGroup>
        <FormGroup>
          <Label>Story *</Label>
          <ReactQuill
            placeholder="Write your story......"
            modules={modules}
            theme="snow"
            value={content}
            onChange={setContent}
          />
        </FormGroup>
        <FormRow>
            <FormGroup>
              <Label>Featured Image</Label>
              <ImageUpload
                onChange={setValue}
                name="featured_image"
              ></ImageUpload>
            </FormGroup>
            <FormGroup></FormGroup>
          </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Goal *</Label>
            <Input control={control} name="goal" placeholder="$0.00 USD" />
          </FormGroup>
          <FormGroup>
            <Label>Raised amount *</Label>
            <Input control={control} name="amount" placeholder="Raised amount" />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <Label>Amount Prefilled</Label>
            <Input control={control} name="prefilled" placeholder="Amount Prefilled" />
            <p className="text-left text-sm text-text3">
              it will help fill amount box by click, Please each amount bt comma, ex: 10,20,30,40
            </p>
          </FormGroup>
          <FormGroup>
            <Label>Video</Label>
            <Input control={control} name="video" placeholder="Video" />
            <p className="text-left text-sm text-text3">Place youtube or Vimeo Video URL</p>
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <Label>Campaign End Method</Label>
            <Dropdown>
              <Dropdown.Select placeholder={getDropdownLabel("method", "Select one")}></Dropdown.Select>
              <Dropdown.List>
                {methodData.map((method) => (
                  <Dropdown.Option key={method} onClick={() => handleSelectDropDownOption("method", method)}>
                    <span className="capitalize">{method}</span>
                  </Dropdown.Option>
                ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
          <FormGroup>
            <Label>Country</Label>
            <Dropdown>
              <Dropdown.Select placeholder={getDropdownLabel("country", "Select country")}></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Search placeholder="Search country..." onChange={setFilterCountry}></Dropdown.Search>
                {countries.length > 0 &&
                  countries.map((country) => (
                    <Dropdown.Option
                      key={country?.name?.common}
                      onClick={() => handleSelectDropDownOption("country", country?.name?.common)}
                    >
                      {country?.name?.common}
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <Label>Start Date</Label>
            <DatePicker onChange={setStartDate} value={startDate} format="dd-MM-yyyy" />
          </FormGroup>
          <FormGroup>
            <Label>End Date</Label>
            <DatePicker onChange={setEndDate} value={endDate} format="dd-MM-yyyy" />
          </FormGroup>
        </FormRow>

        <div className="text-center">
          <Button type="submit" kind="primary" className="mx-auto mt-10 px-10">
            Submit new Campaign
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CampaignAddNew;
