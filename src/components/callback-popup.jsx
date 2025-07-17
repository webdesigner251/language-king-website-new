import { useState } from "react";
import CloseIcon from "../assets/close.svg"; // Custom close icon
import PhoneInput from "./PhoneInput";
import CustomDropdown from "./custom-dropdown";

const CallbackForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "default",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (formData.course === "default") {
      newErrors.course = "Please select a course";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      // Submit form logic here
    }
  };

  return (
    <div
      className="fixed h-full top-0 bottom-0 left-0 right-0 inset-0 z-[51] bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-[#121212] 2xl:p-6 px-[28px] py-[18px] w-full sm:max-w-xl max-w-[90%] relative max-h-[95%] sm:h-auto overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b-2 border-[#2A2A2A] pb-[18px]">
          <h2 className="text-white 2xl:text-[30px] md:text-[28px] text-2xl font-bold">
            Get-a-Callback
          </h2>
          <button
            onClick={onClose}
            className="flex items-center justify-center sm:p-3 p-2 sm:w-[47px] sm:h-[47px]  w-[30px] h-[30px]  bg-chinese-Black border border-davys-Grey focus:outline-none cursor-pointer shadow-[0px_4px_0px_#000000] text-white"
          >
            <img src={CloseIcon} alt="CloseIcon" className="w-7 h-7" />
          </button>
        </div>
        <p className="font-normal text-white/75 2xl:text-xl md:text-lg leading-[24px] sm:text-base text-sm pt-6">
          Please fill out the below form. Our team will be in touch shortly.
        </p>
        <div className="sm:pt-6 pt-4">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="name"
                className="text-white font-semibold 2xl:text-lg text-base mb-[6px]"
              >
                Full Name*
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your first & last name"
                value={formData.name}
                onChange={handleChange}
                className={`placeholder:text-[#919191] bg-white py-[13px] sm:px-[24px] px-4 sm:text-lg text-base ${errors.name ? "border-red-500 border" : "border-[#949AA5] border-0"
                  }`}
              />

              {errors.name && (
                <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="25"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      fill="currentColor"
                      d="m21.809 19.417-8.33-15.342a1.64 1.64 0 0 0-.614-.631 1.7 1.7 0 0 0-1.722 0c-.26.152-.472.37-.614.63L2.2 19.418a1.58 1.58 0 0 0 .05 1.614c.152.233.362.424.612.555.249.132.529.2.813.196h16.66c.287 0 .57-.072.819-.208.25-.137.459-.334.607-.572a1.58 1.58 0 0 0 .049-1.585M11.17 9.67c0-.215.088-.42.244-.571a.85.85 0 0 1 .589-.237c.22 0 .433.085.59.237a.8.8 0 0 1 .243.57v4.845c0 .214-.088.42-.244.571a.85.85 0 0 1-.589.237.85.85 0 0 1-.589-.237.8.8 0 0 1-.244-.57zm.875 9.285a1.3 1.3 0 0 1-.879-.347 1.22 1.22 0 0 1-.388-.84 1.16 1.16 0 0 1 .344-.868q.173-.174.402-.27a1.26 1.26 0 0 1 1.358.25c.236.221.374.522.387.84a1.16 1.16 0 0 1-.343.868 1.24 1.24 0 0 1-.881.367"
                    ></path>
                  </svg>
                  {errors.name}
                </span>
              )}
            </div>

            <div className="flex flex-col mb-4">
              <label
                htmlFor="phone"
                className="text-white font-semibold 2xl:text-lg text-base mb-[6px] block"
              >
                Phone Number*
              </label>
              <PhoneInput
                formData={formData}
                setFormData={setFormData}
                errors={errors}
                wrapperClassName="border-0"
                inputClassName="w-full rounded-[0px] py-[13px] sm:px-[24px] px-4"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label
                htmlFor="course"
                className="text-white font-semibold 2xl:text-lg text-base mb-[6px]"
              >
                Course Interested in*
              </label>

              <CustomDropdown
                selected={formData.course}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, course: value }))
                }
                error={errors.course}
                buttonClassName="bg-white py-[13px] sm:px-[24px] px-4"
                listClassName="rounded-[0px]"
              />

              {errors.course && (
                <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="25"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      fill="currentColor"
                      d="m21.809 19.417-8.33-15.342a1.64 1.64 0 0 0-.614-.631 1.7 1.7 0 0 0-1.722 0c-.26.152-.472.37-.614.63L2.2 19.418a1.58 1.58 0 0 0 .05 1.614c.152.233.362.424.612.555.249.132.529.2.813.196h16.66c.287 0 .57-.072.819-.208.25-.137.459-.334.607-.572a1.58 1.58 0 0 0 .049-1.585M11.17 9.67c0-.215.088-.42.244-.571a.85.85 0 0 1 .589-.237c.22 0 .433.085.59.237a.8.8 0 0 1 .243.57v4.845c0 .214-.088.42-.244.571a.85.85 0 0 1-.589.237.85.85 0 0 1-.589-.237.8.8 0 0 1-.244-.57zm.875 9.285a1.3 1.3 0 0 1-.879-.347 1.22 1.22 0 0 1-.388-.84 1.16 1.16 0 0 1 .344-.868q.173-.174.402-.27a1.26 1.26 0 0 1 1.358.25c.236.221.374.522.387.84a1.16 1.16 0 0 1-.343.868 1.24 1.24 0 0 1-.881.367"
                    ></path>
                  </svg>
                  {errors.course}
                </span>
              )}
            </div>

            <span className="font-normal text-[#949AA4] text-sm leading-[1.2] py-[10px] block">
              Your information will be used to consider and fulfill your request
              and will be handled pursuant to our{" "}
              <a href="#" className="underline">
                Privacy Policy.
              </a>
            </span>

            <button
              type="submit"
              className="align-middle inline-flex items-center justify-center text-center primary-btn bg-gradient-OrangeRed text-white px-3 py-4 w-full font-bold 2xl:text-xl text-lg relative z-10 mt-3 mb-3"
            >
              Get In Touch
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CallbackForm;
