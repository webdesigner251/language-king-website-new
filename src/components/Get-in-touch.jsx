// import React, { useState } from "react";
// import PhoneInput from "./PhoneInput";
// import CustomDropdown from "./custom-dropdown";
// import Thankyou from "./Thankyou";

// const GetInTouch = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     course: "default",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) {
//       newErrors.name = "Full name is required";
//     }
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^\d{10,}$/.test(formData.phone.trim())) {
//       newErrors.phone = "Enter a valid phone number";
//     }
//     if (formData.course === "default") {
//       newErrors.course = "Please select a course";
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       console.log("Form submitted", formData);
//       // Add form submission logic here
//     }
//   };

//   return (
//     <>
//       <div className="bg-white rounded-[9px] md:p-[44px] sm:p-5 p-4">
//         <p
//           className="font-normal leading-[22px] tracking-[0.011em] text-black lg:text-lg sm:text-base text-sm"
//           style={{ textShadow: "1px 1px 0px rgba(0, 0, 0, 0.3)" }}
//         >
//           Please fill out the below form. Our team will be in touch shortly.
//         </p>
//         <form className="sm:pt-6 pt-4" onSubmit={handleSubmit}>
//           {/* Full Name */}
//           <div className="flex flex-col mb-4">
//             <label
//               htmlFor="name"
//               className="text-black font-bold text-sm mb-[6px]"
//             >
//               Full Name*
//             </label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your first & last name"
//               value={formData.name}
//               onChange={handleChange}
//               className={`border-2 rounded-md bg-white py-[16px] sm:px-[24px] px-4 sm:text-lg text-base ${
//                 errors.name ? "border-red-500" : "border-[#949AA5]"
//               }`}
//             />
//             {errors.name && (
//               <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="25"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                   role="img"
//                 >
//                   <path
//                     fill="currentColor"
//                     d="m21.809 19.417-8.33-15.342a1.64 1.64 0 0 0-.614-.631 1.7 1.7 0 0 0-1.722 0c-.26.152-.472.37-.614.63L2.2 19.418a1.58 1.58 0 0 0 .05 1.614c.152.233.362.424.612.555.249.132.529.2.813.196h16.66c.287 0 .57-.072.819-.208.25-.137.459-.334.607-.572a1.58 1.58 0 0 0 .049-1.585M11.17 9.67c0-.215.088-.42.244-.571a.85.85 0 0 1 .589-.237c.22 0 .433.085.59.237a.8.8 0 0 1 .243.57v4.845c0 .214-.088.42-.244.571a.85.85 0 0 1-.589.237.85.85 0 0 1-.589-.237.8.8 0 0 1-.244-.57zm.875 9.285a1.3 1.3 0 0 1-.879-.347 1.22 1.22 0 0 1-.388-.84 1.16 1.16 0 0 1 .344-.868q.173-.174.402-.27a1.26 1.26 0 0 1 1.358.25c.236.221.374.522.387.84a1.16 1.16 0 0 1-.343.868 1.24 1.24 0 0 1-.881.367"
//                   ></path>
//                 </svg>
//                 {errors.name}
//               </span>
//             )}
//           </div>

//           {/* Phone Number */}
//           <div className="flex flex-col mb-4">
//             <label
//               htmlFor="phone"
//               className="text-black font-bold text-sm mb-[6px]"
//             >
//               Phone Number*
//             </label>
//             <PhoneInput
//               formData={formData}
//               setFormData={setFormData}
//               errors={errors}
//               inputClassName="w-full border-2 rounded-md bg-white sm:text-lg text-base"
//             />
//           </div>

//           {/* Course Interested In */}
//           <div className="flex flex-col mb-4">
//             <label
//               htmlFor="course"
//               className="text-black font-bold text-sm mb-[6px]"
//             >
//               Course Interested in*
//             </label>
//             <CustomDropdown
//               selected={formData.course}
//               onChange={(value) =>
//                 setFormData((prev) => ({ ...prev, course: value }))
//               }
//               error={errors.course}
//               buttonClassName="bg-white rounded-md"
//             />

//             {errors.course && (
//               <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="25"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                   role="img"
//                 >
//                   <path
//                     fill="currentColor"
//                     d="m21.809 19.417-8.33-15.342a1.64 1.64 0 0 0-.614-.631 1.7 1.7 0 0 0-1.722 0c-.26.152-.472.37-.614.63L2.2 19.418a1.58 1.58 0 0 0 .05 1.614c.152.233.362.424.612.555.249.132.529.2.813.196h16.66c.287 0 .57-.072.819-.208.25-.137.459-.334.607-.572a1.58 1.58 0 0 0 .049-1.585M11.17 9.67c0-.215.088-.42.244-.571a.85.85 0 0 1 .589-.237c.22 0 .433.085.59.237a.8.8 0 0 1 .243.57v4.845c0 .214-.088.42-.244.571a.85.85 0 0 1-.589.237.85.85 0 0 1-.589-.237.8.8 0 0 1-.244-.57zm.875 9.285a1.3 1.3 0 0 1-.879-.347 1.22 1.22 0 0 1-.388-.84 1.16 1.16 0 0 1 .344-.868q.173-.174.402-.27a1.26 1.26 0 0 1 1.358.25c.236.221.374.522.387.84a1.16 1.16 0 0 1-.343.868 1.24 1.24 0 0 1-.881.367"
//                   ></path>
//                 </svg>
//                 {errors.course}
//               </span>
//             )}
//           </div>

//           {/* Privacy Notice */}
//           <span className="font-normal text-[#949AA4] sm:text-sm text-xs py-3 block">
//             Your information will be used to consider and fulfill your request
//             and will be handled pursuant to our{" "}
//             <a href="#" className="underline">
//               Privacy Policy
//             </a>
//             .
//           </span>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="align-middle inline-flex items-center justify-center text-center primary-btn bg-[#E42552] text-white px-3 py-4 w-full font-bold sm:text-xl text-lg relative z-10 mt-4 rounded-md"
//           >
//             Get In Touch
//           </button>
//         </form>
//       </div>
//       <div className="bg-[#121211] rounded-[20px] px-5 pt-6 pb-8 shadow-[0_0_44px_5px_rgba(255,176,193,1)]">
//         <Thankyou />
//       </div>
//     </>
//   );
// };

// export default GetInTouch;

import React, { useState } from "react";
import PhoneInput from "./PhoneInput";
import CustomDropdown from "./custom-dropdown";
import ContactThankyou from "./Contact-thankyou";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "default",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      {!isSubmitted ? (
        <div className="bg-white rounded-[9px] md:pt-[2.084em] md:px-[2.292em] md:pb-[2.292em] p-4">
          <p
            className="font-normal leading-[1.2] tracking-[0.011em] text-black lg:text-[1.1903em] md:text-[16px] text-[16px]"
            style={{ textShadow: "1px 1px 0px rgba(0, 0, 0, 0.3)" }}
          >
            Please fill out the below form. Our team will be in touch shortly.
          </p>
          <form className="sm:pt-[2.116em] pt-4">
            {/* Full Name */}
            <div className="flex flex-col mb-[1.323em]">
              <label
                htmlFor="name"
                className="text-black font-bold md:text-[0.926em] text-sm mb-[0.529em]"
              >
                Full Name*
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your first & last name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                className="border-1 border-[#949AA5] rounded-md bg-white md:py-[0.794em] py-[12px] sm:px-[1.1903em] px-[18px] md:text-[1.1903em] text-[16px]"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col mb-[1.323em]">
              <label
                htmlFor="phone"
                className="text-black font-bold md:text-[0.926em] text-sm mb-[0.529em]"
              >
                Phone Number*
              </label>
              <PhoneInput
                formData={formData}
                setFormData={setFormData}
                errors={{}} // no validation errors
                flagwrapper="border-[#949AA5]"
                wrapperClassName="w-full border-1 rounded-md bg-white border-[#949AA5]"
                inputClassName="md:py-[0.794em] py-[12px] sm:px-[1.1903em] px-[18px] md:text-[1.1903em] text-[16px]"
              />
            </div>

            {/* Course Interested In */}
            <div className="flex flex-col mb-[1.323em]">
              <label
                htmlFor="course"
                className="text-black font-bold md:text-[0.926em] text-sm mb-[0.529em]"
              >
                Course Interested in*
              </label>
              <CustomDropdown
                selected={formData.course}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, course: value }))
                }
                error={null}
                buttonClassName="bg-white rounded-md border-1 md:py-[0.794em] py-[12px] sm:px-[1.1903em] px-[18px] md:text-[1.1903em] text-[16px]"
              />
            </div>

            {/* Privacy Notice */}
            <span className="font-normal text-[#949AA4] md:text-[0.926em] text-sm leading-[1.3] py-[0.529em] block">
              Your information will be used to consider and fulfill your request
              and will be handled pursuant to our{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .
            </span>

            {/* Button */}
            <button
              type="button"
              onClick={() => setIsSubmitted(true)}
              className="align-middle inline-flex items-center justify-center text-center primary-btn bg-[#E42552] text-white px-3 md:py-[1.058em] py-4 w-full font-bold md:text-[1.1903em] text-base relative z-10 mt-[1.058em] rounded-md"
            >
              Get In Touch
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-[#121211] rounded-[1.042em] px-[1.354em] pt-[1.653em] pb-[2.183em] shadow-[0_0_44px_5px_rgba(255,176,193,0.7)]">
          <ContactThankyou />
        </div>
      )}
    </>
  );
};

export default GetInTouch;
