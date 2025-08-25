import React, { useState } from "react";
import PhoneInput from "./PhoneInput";
import CustomDropdown from "./custom-dropdown";

const BookFreeTrail = () => {
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
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col lg:mb-[1.0582010582em] md:mb-[1.5625em] sm:mb-[2.0860495437em] xs:mb-[2.5em] mb-[4.6875vw]">
          <label
            htmlFor="name"
            className="text-white font-semibold md:text-[1.1904761905em] md:leading-[1.555] xs:text-[2.5em] text-[4.1666666667em] mb-[0.3333333333em]"
          >
            Full Name*
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your first & last name"
            value={formData.name}
            onChange={handleChange}
            className={`md:text-[1.1904761905em] xs:text-[2.5em] text-[4.1666666667em] md:py:[0.8888888889em] py-[14px] md:px-[1.3333333333em] px-6 leading-[1.778] placeholder:text-[#919191] bg-white border ${errors.name ? "border-red-500" : "border-transparent"
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

        <div className="flex flex-col lg:mb-[1.0582010582em] md:mb-[1.5625em] sm:mb-[2.0860495437em] xs:mb-[2.5em] mb-[4.6875vw]">
        <label
            htmlFor="phone"
            className="text-white font-semibold md:text-[1.1904761905em] md:leading-[1.555] xs:text-[2.5em] text-[4.1666666667em] mb-[0.3333333333em]"
          >
            Phone Number*
          </label>
          <PhoneInput
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            wrapperClassName="border-0"
            inputClassName="w-full rounded-[0px] md:text-[1.1904761905em] xs:text-[2.5em] text-[4.1666666667em] md:py:[0.8888888889em] py-[14px] md:px-[1.3333333333em] px-4 leading-[1.778]"
          />
        </div>

        <div className="flex flex-col lg:mb-[1.0582010582em] md:mb-[1.5625em] sm:mb-[2.0860495437em] xs:mb-[2.5em] mb-[4.6875vw]">
          <label
            htmlFor="course"
            className="text-white font-semibold md:text-[1.1904761905em] md:leading-[1.555] xs:text-[2.5em] text-[4.1666666667em] mb-[0.3333333333em]"
          >
            Course Interested in*
          </label>

          <CustomDropdown
            selected={formData.course}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, course: value }))
            }
            error={errors.course}
            buttonClassName="bg-white border-0 md:text-[1.1904761905em] xs:text-[2.5em] text-[4.1666666667em] md:py:[0.8888888889em] py-[14px] md:px-[1.3333333333em] px-6 leading-[1.778]"
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

        <span className="font-normal text-[#949AA4] md:text-[1.0582010582em] md:leading-[1.5] xs:text-[2.5em] text-[3.6458333333em] py-[0.75em] block">
          Your information will be used to consider and fulfill your request and
          will be handled pursuant to our{" "}
          <a href="#" className="underline">
            Privacy Policy.
          </a>
        </span>

        <button
          type="submit"
          className="align-middle inline-flex items-center justify-center text-center primary-btn bg-gradient-OrangeRed text-white px-[0.6em] py-[0.8em] w-full font-bold md:text-[1.3227513228em] xs:text-[2.8125em] md:leading-[1.4] text-[5em] relative z-10 mt-[0.8em]"
        >
          Get In Touch
        </button>
      </form>
    </>
  );
};

export default BookFreeTrail;
