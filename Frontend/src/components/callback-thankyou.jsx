import CloseIcon from "../assets/close.svg"; // Custom close icon
import checkmark from "../assets/icons/checkmark.svg";
import CallIcon from "../assets/icons/call-icon-gradient.svg";
import MemberIcon from "../assets/icons/member-icon-gradient.svg";
import PhoneICon from "../assets/icons/landline-phone.svg";
import CalenderIcon from "../assets/icons/calender-icon.svg";

const CallbackForm = () => {
  return (
    <div className="text-center">
      <img
        src={checkmark}
        alt="checkmark"
        className="mx-auto sm:w-[3.8vw] w-[13.8888888889vw] xs:mb-2 mb-[5vw] h-auto zoom-pulse"
      />
      <h2 className="font-bold 2xl:text-[2.778em] md:text-[2.249em] text-3xl text-center text-gradient-OrangeRed">
        Thank You!
      </h2>
      <h3 className="font-medium sm:text-[1.1904761905em] text-base text-white">
        We’ve received your information.
      </h3>

      <div className="bg-[#252525] rounded-[1.124em] sm:pt-[1.058em] sm:px-[1.3227513228em] sm:pb-[1.587em] p-4 mt-[1.587em]">
        <div className="inline-flex items-center justify-center">
          <h3 className="font-bold xl:text-[2.1164021164em] md:text-[1.984em] text-2xl inline mx-auto tracking-[1px] relative text-white border-text text-center">
            What Happens Next?
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:gap-[1.323em] gap-4 md:mt-[1.852em] mt-7 text-start">
          <div className="flex items-start sm:gap-[1.587em] gap-5 text-white font-normal md:text-[1.0582010582em] text-[3.8888888889em] xs:leading-[22px] leading-[1.3]">
            <img
              src={CallIcon}
              alt="checklist"
              className="sm:w-[2.1164021164em] w-[28px] sm:h-[2.1164021164em] h-[28px] mt-1"
            />
            We’ll call you within 24 hours to discuss your preferred course,
            target score, and learning needs.
          </div>
          <div className="flex items-start sm:gap-[1.587em] gap-5 text-white font-normal md:text-[1.0582010582em] text-[3.8888888889em] xs:leading-[22px] leading-[1.3]">
            <img
              src={MemberIcon}
              alt="checklist"
              className="sm:w-[2.1164021164em] w-[28px] sm:h-[2.1164021164em] h-[28px] mt-1"
            />
            Our team will review your course interest and create a personalized
            plan tailored to your goals.
          </div>

          <div className="bg-[#121212] xs:rounded-[20px] rounded-[4px]  md:p-[0.794em] p-3 w-full mx-auto flex flex-col justify-center">
            <h4 className="font-bold xl:text-[1.587em] lg:text-[1.455em] md:text-[1.323em] text-[5em] text-white mx-auto pb-[0.6669em] text-center">
              Need urgent assistance?{" "}
            </h4>

            <ul className="flex flex-col xs:gap-[1.0582010582em] gap-[2.7777777778em] max-w-auto mx-auto">
              <li>
                <a
                  href="tel:+61488876999"
                  className="flex items-center xs:gap-[1.058em] gap-[0.7142857143em]  text-white font-semibold md:text-[1.0582010582em] sm:text-[2.5em] xs:text-[2.9166666667em] text-[3.8888888889em]"
                >
                  <img src={PhoneICon} className="w-[2.646em]" />
                  +61 488 877 999 &nbsp; / &nbsp; +61 444 876 555
                </a>
              </li>
              <li>
                <a
                  href="tel:+61488876999"
                  className="flex items-start xs:gap-[1.058em]  gap-[0.7142857143em] text-white font-semibold md:text-[1.0582010582em] sm:text-[2.5em] xs:text-[2.9166666667em] text-[3.8888888889em]"
                >
                  <div className="w-[2.646em] flex items-center justify-center">
                    <img src={CalenderIcon} className="w-[1.852em]" />
                  </div>
                  <span>
                    10 A.M to 7 P.M <br />
                    <span className="italic text-[#abaaa6] font-normal block text-sm">
                      (Mon - Sun | Melbourne Time)
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallbackForm;
