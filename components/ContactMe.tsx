import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import { PageInfo } from "../typings";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = { pageInfo: PageInfo };

const ContactMe = ({ pageInfo }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    (window.location.href = `mailto:sainiantrix@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`);

  return (
    <div className="h-screen text-center max-w-7xl px-4 mx-auto">
      <h3 className="pt-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="h-4/5 pt-8 flex flex-col space-y-4 md:space-y-8 justify-start md:justify-center w-full overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <h4 className="text-3xl xl:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk</span>
        </h4>
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl xl:text-2xl">{pageInfo.phoneNumber}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl xl:text-2xl">{pageInfo.email}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl xl:text-2xl">{pageInfo.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto "
        >
          <div className="flex space-x-2 ">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
            rows={3}
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
