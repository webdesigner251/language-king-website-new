import React, { useState } from "react";

const courses = ["PTE", "NAATI CCL", "IELTS", "Other Inquiry"];

const CustomDropdown = ({
  selected,
  onChange,
  error,
  wrapperClassName = "",
  buttonClassName = "",
  listClassName = "",
  itemClassName = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${wrapperClassName}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left c-dropdown border-[#949AA5] ${error ? "border-red-500" : "border-[#949AA5]"
          } ${selected === "default" ? "text-[#919191]" : "text-black"
          } ${buttonClassName}`}
      >
        {selected === "default" ? "Select an option" : selected}
      </button>

      {isOpen && (
        <ul
          className={`absolute left-0 z-20 mt-0 w-full bg-white border border-gray-300 shadow-lg max-h-60 overflow-y-auto ${listClassName}`}
        >
          {courses.map((course) => (
            <li
              key={course}
              onClick={() => {
                onChange(course);
                setIsOpen(false);
              }}
              className={`sm:px-[1.058em] sm:py-[0.794em] px-[0.794em] xs:py-[0.529em] py-[3.8888888889vw] bg-white hover:bg-[#F2F2F2] sm:text-[1.058em] xs:text-[2.5em] text-[4.16667vw] leading-normal cursor-pointer text-black ${itemClassName}`}
            >
              {course}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
