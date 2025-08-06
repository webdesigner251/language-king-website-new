import { useState } from "react";
import BannerBg from "../assets/ebook/e-book-bg.png";
import NewTipsImage from "../assets/ebook/new-tips.png";
import avatar from "../assets/avatar-img.png";
import CheckmarkYellow from "../assets/icons/checkmark-yellow.svg";
import Book1 from "../assets/ebook/book1.png";
import Book2 from "../assets/ebook/book2.png";
import Book3 from "../assets/ebook/book3.png";
import Book4 from "../assets/ebook/book4.png";
import BGgradient from "../assets/ebook/gradient.png";
import Rectangle from "../assets/ebook/rectangle.png";
import Plus from "../assets/icons/plus.svg";

import checkmark from "../assets/icons/green-checkmark.svg";
import EmailIcon from "../assets/icons/green-email-icon.svg";
import ImageWithToggle from "../components/ImageWithToggle";

const faqs = [
  {
    question: "Why is there a $0.99 charge for Free Trial?",
    answer:
      "The $0.99 charge is a small, one-time fee to help us verify your identity and prevent misuse of our free offer. This minimal amount ensures genuine sign-ups and helps maintain a secure platform. The charge is non-refundable but confirms your access to the free E-Book/ PDF for one week.",
  },
  {
    question: "Is the E-Book really free?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime officia esse delectus dolore temporibus ad, repellendus aperiam iste provident veniam aut animi id impedit. Ipsa inventore tenetur dolorem ad?",
  },
  {
    question: "How long do I have access to the E-Book?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime officia esse delectus dolore temporibus ad, repellendus aperiam iste provident veniam aut animi id impedit. Ipsa inventore tenetur dolorem ad?",
  },
  {
    question: "What if I don’t receive the E-book on email?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime officia esse delectus dolore temporibus ad, repellendus aperiam iste provident veniam aut animi id impedit. Ipsa inventore tenetur dolorem ad?",
  },
  {
    question: "Can I use a temporary or disposable email for verification?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime officia esse delectus dolore temporibus ad, repellendus aperiam iste provident veniam aut animi id impedit. Ipsa inventore tenetur dolorem ad?",
  },
  {
    question:
      "How do I cancel or delete my account after downloading the eBook?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime officia esse delectus dolore temporibus ad, repellendus aperiam iste provident veniam aut animi id impedit. Ipsa inventore tenetur dolorem ad?",
  },
  {
    question: "What happens after my free 1-week access ends?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime officia esse delectus dolore temporibus ad, repellendus aperiam iste provident veniam aut animi id impedit. Ipsa inventore tenetur dolorem ad?",
  },
  {
    question: "Is my information secure?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime officia esse delectus dolore temporibus ad, repellendus aperiam iste provident veniam aut animi id impedit. Ipsa inventore tenetur dolorem ad?",
  },
];

const PlusIcon = () => (
  <svg
    width="100%"
    height="auto"
    viewBox="0 0 45 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="2.87183"
      width="41"
      height="41"
      rx="10"
      stroke="white"
      stroke-opacity="0.5"
      stroke-width="4"
      stroke-linejoin="round"
    />
    <path
      d="M15 23.8718H30"
      stroke="white"
      stroke-opacity="0.5"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.5 31.3718V16.3718"
      stroke="white"
      stroke-opacity="0.5"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const MinusIcon = () => (
  <svg
    width="100%"
    height="auto"
    viewBox="0 0 45 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="2.87183"
      width="41"
      height="41"
      rx="10"
      stroke="white"
      stroke-width="4"
      stroke-linejoin="round"
    />
    <path
      d="M15 23.8718H30"
      stroke="white"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const FreeEBooksubmit = () => {
  // const [count, setCount] = useState(0);

  // const increment = () => setCount((prev) => prev + 1);
  // const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  // FAq section
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="2xl:pt-[80px] sm:pt-[70px] pt-[60px] sm:pb-[60px] pb-[40px] relative flex flex-column justify-center items-center lg:mt-0 sm:mt-8 mt-6 min-h-[90vh] border-b border-[#707070]">
        <div className="sm:bg-transparent bg-gradient-FadetoBlack h-full w-full absolute top-0 z-10 lg:hidden block"></div>
        <img
          src={BannerBg}
          alt="BannerBg"
          className="absolute w-full h-full top-0 left-0 right-0 bottom-0 object-cover"
        />
        <div className="custom-container mx-auto py-0 px-4 sm:px-[32px] w-full z-10 relative">
          <div className="flex 2xl:gap-x-[100px] xl:gap-x-[100px] gap-x-[140px] sm:flex-nowrap flex-wrap">
            <div className="sm:w-[20%] w-full flex flex-col justify-between">
              <img
                src={NewTipsImage}
                alt="NewTipsImage"
                className="h-auto xl:max-w-[250px] max-w-[200px] -mt-[20px] sm:mx-0 mx-auto"
              />
              <span className="uppercase font-semibold text-white/50 sm:block hidden">
                LEARN FROM THE EXPERT + MORE:
              </span>
              <div className="sm:flex items-center gap-3 mt-[32px] hidden">
                <img
                  src={avatar}
                  alt="avatar"
                  className="w-[50px] h-[50px] rounded-full border-4 border-white/10"
                />
                <div>
                  <span className="text-white text-lg font-semibold">
                    Abhishek
                  </span>
                  <h3 className="text-base font-light text-white/60 leading-[1.2]">
                    PTE Master Trainer
                  </h3>
                </div>
              </div>
            </div>
            <div className="sm:w-[80%]">
              <div className="flex flex-col justify-between gap-y-[50px] h-full">
                <div className="flex lg:flex-nowrap flex-wrap gap-5 justify-between lg:pe-[30px]">
                  <div className="lg:max-w-[70%] max-w-full">
                    <h1 className="text-white main-heading font-bold">
                      PTE Reading Blanks{" "}
                      <span className="text-[#F1CD5A] block">Free E-book</span>
                    </h1>
                    <p className="font-light md:text-lg sm:leading-[28px] leading-[22px] sm:text-base max-w-[800px] text-sm text-white mt-3">
                      Learn how to solve PTE Reading Blanks with confidence,
                      master linkers, starters, and connectors, test your skills
                      with an interactive quiz, and boost your score
                      effortlessly
                    </p>
                  </div>
                  <div className="lg:max-w-[30%] max-w-full lg:block hidden">
                    <h2 className="text-white xl:text-lg text-base font-bold my-[25px]">
                      YOU’LL LEARN HOW TO:
                    </h2>
                    <ul className="">
                      <li className="flex items-center sm:leading-[1.5] leading-[1.4] sm:text-base text-sm text-white sm:gap-7 gap-4 py-2">
                        <img
                          src={CheckmarkYellow}
                          alt="CheckmarkYellow"
                          className="w-4"
                        />
                        Attempt R&W blanks
                      </li>
                      <li className="flex items-center sm:leading-[1.5] leading-[1.4] sm:text-base text-sm text-white sm:gap-7 gap-4 py-2">
                        <img
                          src={CheckmarkYellow}
                          alt="CheckmarkYellow"
                          className="w-4"
                        />
                        Difference b/w linkers, <br /> starters and connectors
                      </li>
                      <li className="flex items-center sm:leading-[1.5] leading-[1.4] sm:text-base text-sm text-white sm:gap-7 gap-4 py-2">
                        <img
                          src={CheckmarkYellow}
                          alt="CheckmarkYellow"
                          className="w-4"
                        />
                        Quiz to test your learning
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lg:max-w-[70%] max-w-full flex lg:flex-nowrap flex-wrap items-center sm:justify-start justify-center lg:gap-[40px] sm:gap-7 gap-4 sm:order-0 -order-1 ">
                  <div className="relative rounded-lg sm:w-auto w-full ">
                    <a
                      href="#"
                      className="align-middle inline-flex items-center justify-center text-center primary-btn primary-btn-rounded bg-gradient-primary text-black px-3 sm:py-3 py-[14px] font-normal  sm:text-xl text-lg relative z-10 sm:min-w-[242px] sm:w-auto w-full rounded-lg "
                    >
                      Start 7-Day Trial
                    </a>
                  </div>
                  <div>
                    <h4 className="text-[#F1CD5A] text-lg font-semibold sm:text-start text-center">
                      Save $33 by using AI Portal{" "}
                      <span className="sm:inline hidden">
                        + Prediction File + 6 Books
                      </span>
                    </h4>
                    <span className="uppercase font-semibold text-white/50 text-[13px] mt-[5px] sm:inline hidden">
                      See below
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="flex sm:flex-nowrap flex-wrap sm:mt-[25px ] items-end sm:gap-0 gap-[20px]">
                    <div className="sm:w-[25%] w-full">
                      <span className="text-white md:text-lg sm:text-base text-sm font-semibold">
                        Other Books
                      </span>
                      <h3 className="sm:text-base text-sm font-light text-white/60 leading-[1.2]">
                        PTE Study Material
                      </h3>
                    </div>
                    <div className="sm:w-[75%] w-full sm:grid grid-cols-4 flex justify-between gap-[20px]">
                      <img
                        src={Book1}
                        alt="Book1"
                        className="w-auto h-[61px] max-w-[50px]"
                      />
                      <img
                        src={Book2}
                        alt="Book2"
                        className="w-auto h-[61px] max-w-[50px]"
                      />
                      <img
                        src={Book3}
                        alt="Book3"
                        className="w-auto h-[61px] max-w-[50px]"
                      />
                      <img
                        src={Book4}
                        alt="Book4"
                        className="w-auto h-[61px] max-w-[50px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <img
          src={BGgradient}
          alt="BGgradient"
          className="w-full h-full object-cover absolute top-0 left-0 right-0"
        />
        <div className="custom-container mx-auto sm:py-[64px] py-[40px] px-4 sm:px-[32px] w-full z-10 relative ">
          <div className="max-w-[550px] mx-auto bg-black rounded-xl px-7 py-7">
            <div className="text-center">
              <img
                src={checkmark}
                alt="checkmark"
                className="mx-auto sm:w-[53px] w-[50px] mb-2 h-auto zoom-pulse"
              />
              <h2 className="font-bold xl:text-[32px] md:text-[30px] text-2xl text-center text-[#00C360] py-2">
                Payment Successful
              </h2>
              <h3 className="font-medium sm:text-lg text-base text-white">
                We’ve received your information
              </h3>

              <div className="pt-4 w-full">
                <div className="grid grid-cols-2 py-[2px] w-full justify-between sm:text-base text-sm font-medium">
                  <span className="text-[#B7B7B7] text-start">
                    Receipt Number:
                  </span>
                  <span className="text-[#E4FAE5] text-end">25393-0095</span>
                </div>

                <div className="grid grid-cols-2 py-[2px] w-full justify-between sm:text-base text-sm font-medium">
                  <span className="text-[#B7B7B7] text-start">
                    Invoice Number
                  </span>
                  <span className="text-[#E4FAE5] text-end">
                    2025-K00B1-754
                  </span>
                </div>

                <div className="grid grid-cols-2 py-[2px] w-full justify-between sm:text-base text-sm font-medium">
                  <span className="text-[#B7B7B7] text-start">
                    Payment Method
                  </span>
                  <span className="text-[#E4FAE5] text-end">Visa-4242</span>
                </div>

                <div className="grid grid-cols-2 py-[2px] w-full justify-between sm:text-base text-sm font-medium">
                  <span className="text-[#B7B7B7] text-start">
                    Transaction ID:
                  </span>
                  <span className="text-[#E4FAE5] text-end">137370531</span>
                </div>
              </div>

              <a
                href="#"
                className="sm:text-lg text-base text-black bg-[#00DD6C] w-full py-[13px] px-4 block mt-4 rounded-md font-bold"
              >
                Download Receipt
              </a>

              <div className="bg-[#252525] rounded-[20px] sm:pt-5 sm:px-7 sm:pb-7 p-4 mt-6">
                <div className="inline-flex items-center justify-center">
                  <h3 className="font-bold xl:text-[32px] md:text-[30px] text-2xl inline mx-auto tracking-[1px] relative  text-white border-text text-center">
                    What Happens Next?
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:gap-6 gap-4 mt-7 text-start">
                  <div className="flex items-start sm:gap-6 gap-5 text-white font-medium 2xl:text-lg text-base 2xl:leading-[24px] leading-[22px]">
                    <img
                      src={EmailIcon}
                      alt="checklist"
                      className="sm:w-[32px] w-[28px] sm:h-[32px] h-[28px] mt-1"
                    />
                    You'll receive an E-mail in the next few mins. Follow the
                    steps to access your E-book and start learning.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-y border-[#707070] relative z-10">
          <div className="custom-container mx-auto md:py-[100px] sm:py-[70px] py-[40px] px-4 sm:px-[32px] w-full z-10 relative">
            <h2 className="font-inter font-normal main-heading 2xl:mt-2 mt-0 text-white text-center sm:mb-10 mb-5">
              FAQ
            </h2>
            <div className="max-w-4xl mx-auto sm:p-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`py-4 ${
                    index !== faqs.length - 1 ? "border-b border-[#9D9B9B]" : ""
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full text-left gap-4"
                  >
                    <span className="md:text-[22px] sm:text-xl text-lg font-bold leading-[28px] text-white w-[calc(100%-28px)] sm:w-[calc(100%-35px)]">
                      {faq.question}
                    </span>
                    <span className="w-[28px] sm:w-[35px] basis-[28px] sm:basis-[35px] flex items-center justify-center">
                      {openIndex === index ? <MinusIcon /> : <PlusIcon />}
                    </span>
                  </button>

                  {openIndex === index && faq.answer && (
                    <div className="sm:mt-4 mt-2 md:text-lg sm:text-lg font-medium text-base text-white/50 max-w-[93%]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreeEBooksubmit;
