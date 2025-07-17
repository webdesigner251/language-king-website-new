import checkmark from "../assets/icons/green-checkmark.svg";
import CallIcon from "../assets/icons/call-icon.svg";
import MemberIcon from "../assets/icons/member-icon.svg";
import PhoneICon from "../assets/icons/landline-phone.svg";
import CalenderIcon from "../assets/icons/calender-icon.svg";

const ContactThankyou = () => {
  return (
    <>
      <div className="text-center">
        <img
          src={checkmark}
          alt="checkmark"
          className="mx-auto sm:w-[53px] w-[50px] mb-2 h-auto zoom-pulse"
        />
        <h2 className="font-bold 2xl:text-[42px] md:text-[34px] text-3xl text-center text-[#00C360]">
          Thank You!
        </h2>
        <h3 className="font-medium sm:text-lg text-base text-white">
          We’ve received your information.
        </h3>

        <div className="bg-[#252525] rounded-[17px] sm:pt-4 sm:px-6 sm:pb-6 p-4 mt-6">
          <div className="inline-flex items-center justify-center">
            <h3 className="font-bold xl:text-[32px] md:text-[30px] text-2xl inline mx-auto tracking-[1px] relative  text-white border-text text-center">
              What Happens Next?
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:gap-5 gap-4 mt-7 text-start">
            <div className="flex items-start sm:gap-6 gap-5 text-white font-medium 2xl:text-lg text-base 2xl:leading-[24px] leading-[22px]">
              <img
                src={CallIcon}
                alt="checklist"
                className="sm:w-[32px] w-[28px] sm:h-[32px] h-[28px] mt-1"
              />
              We’ll call you within 24 hours to discuss your preferred course, target score, and learning needs.
            </div>
            <div className="flex items-start sm:gap-6 gap-5 text-white font-medium 2xl:text-lg text-base 2xl:leading-[24px] leading-[22px]">
              <img
                src={MemberIcon}
                alt="checklist"
                className="sm:w-[32px] w-[28px] sm:h-[32px] h-[28px] mt-1"
              />
              Our team will review your course interest and create a personalized plan tailored to your goals.
            </div>

            <div className="bg-[#121212] rounded-2xl p-3  w-full mx-auto flex flex-col justify-center">
              <h4 className="font-bold xl:text-2xl lg:text-[22px] md:text-[20px] text-xl text-white  mx-auto pb-4 text-center">
                Need immediate assistance?{" "}
              </h4>

              <ul className="flex flex-col gap-[18px] max-w-auto mx-auto">
                <li>
                  <a
                    href="tel:+61488876999"
                    className="flex items-center gap-4 text-white font-semibold 2xl:text-lg sm:text-base text-sm"
                  >
                    <img src={PhoneICon} className="w-10" />
                    +61 488 877 999 &nbsp; / &nbsp; +61 444 876 555
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+61488876999"
                    className="flex items-start gap-4 text-white font-semibold 2xl:text-lg sm:text-base text-sm"
                  >
                    <div className="w-10 flex items-center justify-center">
                      <img src={CalenderIcon} className="w-7" />
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
    </>
  );
};

export default ContactThankyou;
