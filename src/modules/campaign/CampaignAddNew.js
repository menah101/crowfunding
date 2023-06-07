import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import { Dropdown } from "components/dropdown";
import { Input } from "components/input";
import Textarea from "components/input/Textarea";
import { Label } from "components/label";
import React from "react";
import { useForm } from "react-hook-form";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageUploader from "quill-image-uploader";
import axios from "axios";
import { Button } from "components/button";
// import { apiURL, imgbbAPI } from "config/config";
Quill.register("modules/imageUploader", ImageUploader);

const CampaignAddNew = () => {
  const { handleSubmit, control } = useForm();
  const handleAddNewCampaign = (values) => {};

  const [content, setContent] = React.useState("");

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

  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="text-center">
        <h1 className="py-4 px-14 bg-text4 bg-opacity-5 rounded-xl font-bold text-[25px] inline-block">
          Start a Campaign 🚀
        </h1>
      </div>
      <form onSubmit={handleSubmit(handleAddNewCampaign())}>
        <FormRow>
          <FormGroup>
            <Label>Campaign Title *</Label>
            <Input control={control} name="title" placeholder="Write a title" />
          </FormGroup>
          <FormGroup>
            <Label>Select a category *</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select the category"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Architecture</Dropdown.Option>
                <Dropdown.Option>Crypto</Dropdown.Option>
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
              <Dropdown.Select placeholder="Select one"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Architecture</Dropdown.Option>
                <Dropdown.Option>Crypto</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
          <FormGroup>
            <Label>Country</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select country"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Architecture</Dropdown.Option>
                <Dropdown.Option>Crypto</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <Label>Start Date</Label>
            <Input control={control} name="start_date" placeholder="Start Date" />
          </FormGroup>
          <FormGroup>
            <Label>End Date</Label>
            <Input control={control} name="end_date" placeholder="End Date" />
          </FormGroup>
        </FormRow>

        <div className="text-center">
          <Button kind="primary" className="mx-auto mt-10 px-10" >Submit new Campaign</Button>
        </div>

      </form>
    </div>
  );
};

export default CampaignAddNew;
