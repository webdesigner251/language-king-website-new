import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PTEBanner from "../assets/pte-banner.png";
import HomeBanner from "../assets/Homepage-banner.png";
import avatar from "../assets/avatar-img.png";
import AppleIcon from "../assets/icons/apple-icon.svg";
import AndroidIcon from "../assets/icons/android-icon.svg";
import WindowsIcon from "../assets/icons/windows-icon.svg";
import Checkmark from "../assets/icons/blue-checkmark.svg";
import Coursecover1 from "../assets/course/read-aloud.png";
import Coursecover2 from "../assets/course/low-score.png";
import Coursecover3 from "../assets/course/word-essay.png";
import Coursecover4 from "../assets/course/integrated-task.png";
import Coursecover5 from "../assets/course/master-reading.png";
import Coursecover6 from "../assets/course/4-steps-rop.png";
import Coursecover7 from "../assets/course/extra-words.png";
import PTEResponse from "../assets/course/pte-res.png";
import LandingTeacherImage1 from "../assets/course/landing-teacher-1.png";
import LandingTeacherImage2 from "../assets/course/landing-teacher-2.png";
import LandingTeacherImage3 from "../assets/course/landing-teacher-3.png";
import LandingTeacherImage4 from "../assets/course/landing-teacher-4.png";
import LandingTeacherImage5 from "../assets/course/landing-teacher-5.png";
import LandingTeacherImage6 from "../assets/course/landing-teacher-6.png";
import LandingTeacherImage7 from "../assets/course/landing-teacher-7.png";
import PTEResponse1 from "../assets/course/major-mistakes.png";
import Russia from "../assets/students/Russia.png";
import Spain from "../assets/students/Spain.png";
import India from "../assets/students/India.png";
import China from "../assets/students/China.png";
import Philippines from "../assets/students/Philippines.png";
import Vietnam from "../assets/students/Vietnam.png";
import Pakistan from "../assets/students/Pakistan.png";
import Malaysia from "../assets/students/Malaysia.png";
import Indonesia from "../assets/students/Indonesia.png";
import SriLanka from "../assets/students/SriLanka.png";
import Bangladesh from "../assets/students/Bangaladesh.png";
import Nepal from "../assets/students/Nepal.png";
import SKorea from "../assets/students/SKorea.png";
import Iran from "../assets/students/Iran.png";
import Thailand from "../assets/students/Thailand.png";
import Brazil from "../assets/students/Brazil.png";

import Russia1 from "../assets/flags/Russia1.png";
import Spain1 from "../assets/flags/Spain1.png";
import India1 from "../assets/flags/India1.png";
import China1 from "../assets/flags/China1.png";
import Philippines1 from "../assets/flags/Philippines1.png";
import Vietnam1 from "../assets/flags/Vietnam1.png";
import Pakistan1 from "../assets/flags/Pakistan1.png";
import Malaysia1 from "../assets/flags/Malaysia1.png";
import Indonesia1 from "../assets/flags/Indonesia1.png";
import SriLanka1 from "../assets/flags/SriLanka1.png";
import Bangladesh1 from "../assets/flags/Bangaladesh1.png";
import Nepal1 from "../assets/flags/Nepal1.png";
import SKorea1 from "../assets/flags/SKorea1.png";
import Iran1 from "../assets/flags/Iran1.png";
import Thailand1 from "../assets/flags/Thailand1.png";
import Brazil1 from "../assets/flags/Brazil1.png";
import freeLesson from "../assets/course/free-lesson.png";
import video from "../assets/videos/placeholder-video.mp4";
import Support1 from "../assets/course/support-1.png";
import Support2 from "../assets/course/support-2.png";
import Support3 from "../assets/course/support-3.png";
import Support4 from "../assets/course/support-4.png";
import Support5 from "../assets/course/support-5.png";
import Support6 from "../assets/course/support-6.png";
import divider3 from "../assets/course/Group.png";
import CourseImg1 from "../assets/course-img1.png";
import CourseImg3 from "../assets/course-img3.png";

import facebookIcon from "../assets/icons/facebook-dark.svg";
import InstaIcon from "../assets/icons/instagram-dark.svg";
import TiktokIcon from "../assets/icons/tiktok-dark.svg";
import facebookIconLight from "../assets/icons/facebook-icon-light.svg";
import InstaIconLight from "../assets/icons/instagram-icon-light.svg";
import TiktokIconLight from "../assets/icons/tiktok-icon-light.svg";

const PTEMasterClass = () => {
  const courseData = [
    {
      title: "PTE 1-Line Strategy",
      image: Coursecover1,
      description:
        "Find the truth behind 1-Line Strategy in Read Aloud, and who can use it.",
    },
    {
      title: "Low score after Nov 2024",
      image: Coursecover2,
      description:
        "Learn how to attempt images without text and the answer to speaking till the end. Can you answer be checked by a person?",
    },
    {
      title: "1 Word Essay Templates",
      image: Coursecover3,
      description:
        "Can you use Old Essay Templates in 2025? Watch Ab discuss about human evaluation, use of templates, and much more.",
    },
    {
      title: "Integrated tasks",
      image: Coursecover4,
      description: "Does Speaking affect your Reading & Listening Score ?",
    },
    {
      title: "Master Reading Blanks",
      image: Coursecover5,
      description:
        "Is “Grammar” really important in Reading & Writing Fill in the Blanks?",
    },
    {
      title: "4 Step ROP Hack",
      image: Coursecover6,
      description:
        "Solve any Re-order paragraph with our 4 Step Master Techinique.",
    },
    {
      title: "Extra words in WFD",
      image: Coursecover7,
      description:
        "Should you add extra words ? Can it lower score in Writing Module ? Let’s discuss what no one else will.",
    },
  ];

  const courseData2 = [
    {
      title: "Helped Many Students",
      image: LandingTeacherImage1,
      description:
        "AB’s goal is to help students get their desired score, and he has a proven track record of making that happen.",
    },
    {
      title: "5+ Years in Results Delivered",
      image: LandingTeacherImage2,
      description:
        "AB has helped students of all levels—from beginners to advanced—across diverse backgrounds achieve their desired score.",
    },
    {
      title: "20+ Teachers Trained",
      image: LandingTeacherImage3,
      description:
        "AB has taught 20+ Teachers in the field. Learn from the Master who has taught other teachers.",
    },
    {
      title: "Book Author",
      image: LandingTeacherImage4,
      description:
        "Author of popular book: NAATI CCL: Learn the Right Vocabulary",
    },
    {
      title: "2x NAATI CCL",
      image: LandingTeacherImage5,
      description:
        "Ab has cleared the NAATI CCL Test twice with only 3 days preparation. Learn all the exam-related tricks from him.",
    },
    {
      title: "PTE Certified Trainer",
      image: LandingTeacherImage6,
      description:
        "Successfully completed TRAIN THE TRAINER Workshop conducted by PTE Academic ULVI and PTE Home",
    },
    {
      title: "Need to Think",
      image: LandingTeacherImage7,
      description: "Need to Think",
    },
  ];

  const tabs = ["band8", "band7", "band65", "others"];
  const [activeTab, setActiveTab] = useState("band8");

  const tabImages = {
    band8: PTEResponse,
    band7: PTEResponse1,
    band65: PTEResponse,
    others: PTEResponse1,
  };
  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = tabs.indexOf(prev);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  });

  const students = [
    { name: "Natalie", country: "Russia", flag: Russia1, image: Russia },
    { name: "Greg", country: "Spain", flag: Spain1, image: Spain },
    { name: "Priyanka", country: "India", flag: India1, image: India },
    { name: "Jing", country: "China", flag: China1, image: China },
    {
      name: "Carmela",
      country: "Philippines",
      flag: Philippines1,
      image: Philippines,
    },
    { name: "Minh", country: "Vietnam", flag: Vietnam1, image: Vietnam },
    { name: "Asma", country: "Pakistan", flag: Pakistan1, image: Pakistan },
    { name: "Farhana", country: "Malaysia", flag: Malaysia1, image: Malaysia },
    { name: "Bima", country: "Indonesia", flag: Indonesia1, image: Indonesia },
    {
      name: "Tharushi",
      country: "Sri Lanka",
      flag: SriLanka1,
      image: SriLanka,
    },
    {
      name: "Abdul",
      country: "Bangladesh",
      flag: Bangladesh1,
      image: Bangladesh,
    },
    { name: "Sudip", country: "Nepal", flag: Nepal1, image: Nepal },
    { name: "Deiji", country: "S. Korea", flag: SKorea1, image: SKorea },
    { name: "Natalie", country: "Iran", flag: Iran1, image: Iran },
    { name: "Natalie", country: "Thailand", flag: Thailand1, image: Thailand },
    { name: "Natalie", country: "Brazil", flag: Brazil1, image: Brazil },
  ];

  const [showVideo, setShowVideo] = useState(false);

  const supportData = [
    {
      image: Support1,
      title: "Live 24/7 Support",
      description:
        "Connect with expert tutors anytime, anywhere — get instant help, guidance, and problem-solving on demand.",
    },
    {
      image: Support2,
      title: "Personalized plans",
      description:
        "Get a tailored study plan designed just for you — focused on your goals, timeline, and target score.",
    },
    {
      image: Support3,
      title: "Online Classes with Feedback",
      description:
        "Learn tried-and-tested tips and tricks from 90 each tutors. Get feedback, learn with other students, ask doubts, and much more.",
    },
    {
      image: Support4,
      title: "Missed a Class",
      description:
        "Don't worry we got you covered. Class recordings are available 24/7 for instant access.",
    },
    {
      image: Support5,
      title: "Watch PTE Band 8 Tips & Tricks",
      description:
        "Watch pre-recorded video lectures covering all 20 tasks — from Basic to Advanced Strategies, Updated Templates, and Latest Tips and Tricks.",
    },
    {
      image: Support6,
      title: "Study Material",
      description:
        "Carefully curated resources including Templates, Prediction File, Question Bank, and Real Exam Questions.",
    },
  ];

  const grouped = [];
  for (let i = 0; i < supportData.length; i += 2) {
    grouped.push(supportData.slice(i, i + 2));
  }

  return (
    <>
      <div className="bg-black/20 relative h-full">
        <section className="sm:pt-[270px] pt-[450px] sm:pb-[100px] pb-[60px] mt-[-150px] relative flex flex-column justify-center items-center">

          {/* <div className="sm:w-[66%] w-full top-0 right-0 lg:h-[75%] sm:h-[66%] h-[50%] absolute">
            <img
              src={PTEBanner} 
              alt="HomeBanner"
              className=" w-full h-full top-0 left-0 right-0 bottom-0 object-cover"
            />
            <div className="course-banner-gradient absolute w-full h-full top-0 left-0 right-0 bottom-0"></div>
          </div> */}
          <div className="2xl:w-[66%] w-full 2xl:h-[75%] sm:h-full h-[50%] top-0 right-0 bottom-0 absolute">
            <img
              src={PTEBanner}
              alt="HomeBanner"
              className=" w-full h-full top-0 left-0 right-0 bottom-0 object-cover"
            />
            <div className="course-banner-gradient absolute w-full h-full top-0 left-0 right-0 bottom-0"></div>
          </div>
          <div className="custom-container mx-auto py-0 px-4 sm:px-[32px] w-full relative z-10">
            <div className="grid lg:grid-cols-2 items-end">
              <div className="">
                <div className="flex flex-col 2xl:gap-4 gap-3">
                  <h2 className="text-[#0A8AF2] font-bold 2xl:text-[28px] text-2xl">
                    PTE MasterClass
                  </h2>
                  <h1 className="font-inter font-bold main-heading 2xl:mt-2 mt-0 text-white">
                    Missed your score! <br />
                    Clear in 2 weeks
                  </h1>
                  <p className="md:text-lg sm:text-xl text-base font-normal max-w-[660px] text-white/75">
                    This is literally the best advice that I give every student.
                    My strategies will teach you how to get 90 in each module.
                    I’ve helped students out for 5+ years as a super-friendly
                    teacher to get their desired score, now it’s your turn.
                  </p>
                  <div className="flex items-center gap-3 my-[12px]">
                    <img
                      src={avatar}
                      alt="avatar"
                      className="w-[50px] h-[50px] rounded-full border-4 border-white/10"
                    />
                    <h3 className="sm:text-lg text-base font-light text-white/60">
                      Taught by{" "}
                      <span className="text-white font-size: font-semibold">
                        Abhishek
                      </span>
                    </h3>
                  </div>
                </div>
                <div className="sm:mt-[38px] mt-3 flex sm:flex-nowrap flex-wrap sm:gap-[31px] gap-[16px] lg:max-w-[600px] md:max-w-[82%]">
                  <a
                    href="#"
                    className="align-middle inline-flex items-center justify-center text-center primary-btn bg-gradient-secondary text-white px-3 sm:py-3 py-[14px] sm:w-[50%] w-full font-semibold sm:text-xl text-lg relative z-10"
                  >
                    Take the Course
                  </a>
                  <a
                    href="#"
                    className="align-middle inline-flex items-center gap-[18px] justify-center text-center bg-[#111] border-[1.5px] border-[#333434] text-white px-3 sm:py-3 py-[14px] sm:w-[50%] w-full font-semibold sm:text-xl text-lg transition-all duration-300 ease hover:bg-[#111]/80"
                  >
                    <svg
                      width="21"
                      height="23"
                      viewBox="0 0 21 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.6718 11.2245L0.647949 22.0227V0.42627L20.6718 11.2245Z"
                        fill="url(#paint0_linear_814_2245)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_814_2245"
                          x1="20.6718"
                          y1="-1.24423"
                          x2="18.2482"
                          y2="25.8636"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#17FFBA" />
                          <stop offset="0.130208" stop-color="#76B4C8" />
                          <stop offset="1" stop-color="#2F57A7" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Watch a Free Lesson
                  </a>
                </div>
              </div>
              <div className="text-end lg:block hidden">
                <h4 className="font-normal text-[#A1A0A0] text-xl text-end">
                  Devices Supported:
                </h4>
                <div className="max-w-[200px] ms-auto mt-[32px] flex justify-between items-center">
                  <img src={AppleIcon} alt="AppleIcon" className="w-auto h-8" />
                  <img
                    src={AndroidIcon}
                    alt="AndroidIcon"
                    className="w-auto h-8"
                  />
                  <img
                    src={WindowsIcon}
                    alt="WindowsIcon"
                    className="w-auto h-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="custom-container mx-auto py-0 px-4 sm:px-[32px] w-full">
            <div className="flex justify-between items-center relative">
              {/* <hr className="border-[#252525] sm:w-auto w-[20%]" /> */}
              <div className="text-center w-auto mx-auto z-10 relative bg-[#0c0c0c]/80 px-3">
                <span className="font-normal lg:text-xl text-base text-white/60 text-center sm:inline hidden">
                  Helped <strong className="text-white">10K+ students</strong> get
                  their desired scores
                </span>
                <span className="font-normal lg:text-xl text-base text-white/60 text-center sm:hidden inline w-[320px]">
                  Now teaching{" "}
                  <div className="text-white inline-block">10K+ students!</div>
                </span>
              </div>
              <hr className="border-[#252525] w-full absolute left-0 right-0 z-[-1]" />
            </div>
          </div>
        </section>

        <section className="py-[80px]">
          <div className="custom-container mx-auto py-0 px-4 sm:px-[32px] w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[32px] sm:gap-y-[58px] gap-[42px]">
              <h2 className="text-gradient-secondary font-bold sm:text-[30px] text-2xl sm:leading-[36px] leading-[32px] inline-block 2xl:max-w-[350px] lg:max-w-[300px]">
                This course covers all 20 tasks with easy to understand video
                lessons and more.
              </h2>

              {courseData.map((course, index) => (
                <div className="flex flex-col gap-4" key={index}>
                  <div className="flex items-start gap-1">
                    <div className="border border-white/40 sm:px-[6px] sm:py-[7px] px-[5px] py-[6px] me-[9px]">
                      <svg
                        width="18"
                        height="16"
                        viewBox="0 0 18 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.18724 5.9984C2.84642 6.33491 3.32419 6.66505 3.58908 7.23134C3.89223 7.90339 4.26872 8.61289 4.57197 9.28495C4.6835 9.42817 4.93813 9.47187 5.08123 9.37246C5.11616 9.30415 5.18939 9.34149 5.22433 9.27306C5.40225 9.10535 5.65352 8.97485 5.7582 8.76968C6.56807 7.54503 7.63594 6.53815 8.59227 5.38818C8.66214 5.25144 8.69708 5.18301 8.84006 5.0836C10.3755 3.8844 11.6529 2.46727 13.3383 1.51701C13.7325 1.2872 14.0536 1.02 14.4862 0.895959C15.4911 0.374321 16.6178 0.518383 17.5035 1.31538C17.9081 1.60811 17.995 2.3422 17.639 2.67776C17.4261 2.91402 17.2132 3.15017 16.8922 3.4174C16.1419 3.98285 15.3917 4.54817 14.7147 5.15095C13.7166 6.02097 12.7569 6.99675 11.9819 8.1531C11.2419 9.24101 10.3171 10.1485 9.53876 11.1306C9.11294 11.603 8.76034 12.1128 8.40787 12.6225C8.12515 12.9955 7.88072 13.4743 7.52477 13.81C5.99615 15.3574 6.24741 15.227 4.2417 14.6343C3.91384 14.5532 3.65583 14.3353 3.36286 14.1857C2.40731 13.5254 1.73789 12.6665 1.46276 11.5776C1.11099 10.2772 0.685965 8.93944 0.260933 7.6017C0.219191 7.32174 0.250692 7.07911 0.320526 6.94237C0.599827 6.39517 1.02904 6.09696 1.56981 5.94198C1.78612 5.87991 2.07908 6.02949 2.18724 5.9984Z"
                          fill="url(#paint0_linear_1024_1236)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1024_1236"
                            x1="6.19843"
                            y1="-4.57243"
                            x2="18.847"
                            y2="3.07249"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#17FFBA" />
                            <stop offset="0.130208" stop-color="#76B4C8" />
                            <stop offset="1" stop-color="#2F57A7" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <span className="font-bold 2xl:text-2xl text-xl text-white leading-[32px]">
                      {course.title}
                    </span>
                  </div>
                  <img
                    src={course.image}
                    alt={`Image of ${course.title}`}
                    className="w-full h-auto object-contain"
                  />
                  <p className="font-normal sm:text-base text-sm leading-[24px] text-white/60">
                    {course.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="">
          <div className="custom-container mx-auto px-4 sm:px-[32px] w-full">
            <div className="flex lg:flex-nowrap flex-wrap items-center lg:py-[100px] py-[70px] border-y-2 border-[#252525] sm:gap-[50px] gap-[35px]">
              <div className="lg:w-[79%] tab-content">
                <img
                  src={tabImages[activeTab]}
                  alt="PTE Response"
                  className="w-full h-auto animate-fade-in"
                />
              </div>

              <div className="lg:w-[26%] flex flex-col gap-y-[19px]">
                <h2 className="text-gradient-Bluedark font-bold sm:text-[30px] text-2xl sm:leading-[36px] leading-[32px] max-w-[320px]">
                  Watch AB grade students’ responses and give Feedback
                </h2>
                <p className="font-normal 2xl:text-xl 2xl:leading-[28px] sm:text-lg text-sm leading-[24px] text-white/60">
                  One of the best ways to learn what works and what doesn’t is
                  to simply review other students’ responses and scores.
                </p>

                <p className="font-normal 2xl:text-xl 2xl:leading-[28px] sm:text-lg text-sm leading-[24px] text-white/60">
                  We'll review scores for:
                </p>

                <ul className="tab-links">
                  {tabs.map((tab) => (
                    <li key={tab}>
                      <button
                        onClick={() => setActiveTab(tab)}
                        className="flex gap-3 items-center group w-full text-left"
                      >
                        <img src={Checkmark} alt="Checkmark" className="w-5" />
                        <span
                          className={`font-medium 2xl:text-xl sm:text-lg text-sm cursor-pointer transition-all duration-300 ease-in-out ${activeTab === tab
                            ? "text-white"
                            : "text-white/60 group-hover:text-white"
                            }`}
                        >
                          {tab === "band8"
                            ? "Band 8"
                            : tab === "band7"
                              ? "Band 7"
                              : tab === "band65"
                                ? "Band 6.5"
                                : "And others!"}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-[80px] pb-[40px]">
          <div className="custom-container mx-auto py-0 px-4 sm:px-[32px] w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[32px] sm:gap-y-[58px] gap-[42px]">
              <div>
                <h2 className="text-gradient-Bluedark font-semibold sm:text-[30px] text-2xl sm:leading-[36px] leading-[32px] inline-block 2xl:max-w-[410px] lg:max-w-[300px] mb-[30px]">
                  Having an instructor like AB bring you the real experience
                  needed to get desired score.
                </h2>
                <div className="flex flex-col items-start gap-[22px]">
                  <div className="bg-[#1A1A1A] py-[14px] ps-[14px] pe-[45px] rounded-[100px] flex items-center gap-4 group transition-all duration-300 ease hover:bg-white">
                    <img
                      src={facebookIcon}
                      alt="facebookIcon"
                      className="w-10 h-10 group-hover:hidden transition-all duration-300 ease"
                    />
                    <img
                      src={facebookIconLight}
                      alt="facebookIcon"
                      className="w-10 h-10 hidden group-hover:flex transition-all duration-300 ease"
                    />
                    <div>
                      <h4 className="font-aileron text-sm text-white transition-all duration-300 ease group-hover:text-black font-bold leading-[1.1]">
                        Join the Facebook Community
                      </h4>
                      <span className="text-[12px] text-white/50 font-semibold transition-all duration-300 ease group-hover:text-black/50 break-all block leading-[14px] mt-1">
                        facebook.com/languageking
                      </span>
                    </div>
                  </div>
                  <div className="bg-[#1A1A1A] py-[14px] ps-[14px] pe-[45px] rounded-[100px] flex items-center gap-4 group transition-all duration-300 ease hover:bg-white">
                    <img
                      src={InstaIcon}
                      alt="InstaIcon"
                      className="w-10 h-10 group-hover:hidden transition-all duration-300 ease"
                    />
                    <img
                      src={InstaIconLight}
                      alt="facebookIcon"
                      className="w-10 h-10 hidden group-hover:flex transition-all duration-300 ease"
                    />
                    <div>
                      <h4 className="font-aileron text-sm text-white transition-all duration-300 ease group-hover:text-black font-bold leading-[1.1]">
                        Follow us on Instagram
                      </h4>
                      <span className="text-[12px] text-white/50 font-semibold transition-all duration-300 ease group-hover:text-black/50 break-all block leading-[14px] mt-1">
                        instagram.com/languageking
                      </span>
                    </div>
                  </div>
                  <div className="bg-[#1A1A1A] py-[14px] ps-[14px] pe-[45px] rounded-[100px] flex items-center gap-4 group transition-all duration-300 ease hover:bg-white">
                    <img
                      src={TiktokIcon}
                      alt="TiktokIcon"
                      className="w-10 h-10 group-hover:hidden transition-all duration-300 ease"
                    />
                    <img
                      src={TiktokIconLight}
                      alt="facebookIcon"
                      className="w-10 h-10 hidden group-hover:flex transition-all duration-300 ease"
                    />
                    <div>
                      <h4 className="font-aileron text-sm text-white transition-all duration-300 ease group-hover:text-black font-bold leading-[1.1]">
                        Explore our content on TikTok
                      </h4>
                      <span className="text-[12px] text-white/50 font-semibold transition-all duration-300 ease group-hover:text-black/50 break-all block leading-[14px] mt-1">
                        tiktok.com/@languageking
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {courseData2.map((course, index) => (
                <div className="flex flex-col gap-4" key={index}>
                  <div className="flex items-start gap-1">
                    <span className="font-semibold 2xl:text-2xl text-xl text-white leading-[32px]">
                      {course.title}
                    </span>
                  </div>
                  <img
                    src={course.image}
                    alt={`Image of ${course.title}`}
                    className="w-full h-auto object-contain"
                  />
                  <p className="font-normal sm:text-base text-sm leading-[24px] text-white/60">
                    {course.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-[90px]">
          <div className="custom-container mx-auto py-0 px-4 sm:px-[32px] w-full">
            <h3 className="text-white font-semibold text-2xl mb-[40px]">
              + AB has worked with most diverse students in the world like:
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-8 xl:grid-cols-16 gap-x-[20px] sm:gap-x-[22px] 2xl:gap-x-[32px]  gap-y-[45px]">
              {students.map((student, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 relative">
                    <img
                      src={student.flag}
                      alt={student.country}
                      className="w-5 h-5 rounded-sm absolute top-0 right-0 z-0"
                    />
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col items-center mt-3 text-center">
                    <p className="2xl:text-lg text-base leading-[1.3] text-white mb-0">
                      {student.name}
                    </p>
                    <span className="text-sm mt-[3px] font-light text-[#FFED00]">
                      {student.country}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="video-wrapper">
          <div className="custom-container mx-auto px-4 sm:px-[32px] w-full">
            <div className="flex lg:flex-nowrap flex-wrap items-center lg:py-[80px] py-[70px] mb-[70px] border-y-2 border-[#252525] sm:gap-[25px] gap-[35px]">
              <div className="lg:w-[77%] w-full tab-content relative">
                {!showVideo ? (
                  <>
                    <div
                      onClick={() => setShowVideo(true)}
                      className="cursor-pointer"
                    >
                      <img
                        src={freeLesson}
                        alt="PTE Response"
                        className="w-full h-auto animate-fade-in"
                      />
                    </div>
                    <button
                      onClick={() => setShowVideo(true)}
                      className="flex w-auto text-left gap-3 sm:text-xl absolute sm:bottom-5 sm:left-5 bottom-1 left-1 bg-black/90 sm:px-5 sm:py-3 items-center text-white px-3 py-2 xs:text-base text-sm"
                    >
                      <svg
                        className="sm:w-[15px] h-auto w-[9px]"
                        width="15"
                        height="21"
                        viewBox="0 0 15 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.8689 10.7426L0.630859 20.5043L0.63086 0.980957L14.8689 10.7426Z"
                          fill="url(#paint0_linear_1020_7271)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1020_7271"
                            x1="14.8689"
                            y1="-0.529178"
                            x2="12.0969"
                            y2="23.8573"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#17FFBA" />
                            <stop offset="0.130208" stopColor="#76B4C8" />
                            <stop offset="1" stopColor="#2F57A7" />
                          </linearGradient>
                        </defs>
                      </svg>
                      Watch a part of How to Tease Continuation
                    </button>
                  </>
                ) : (
                  <video
                    src={video}
                    controls
                    autoPlay
                    className="w-full h-auto rounded-md shadow-lg"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>

              <div className="lg:w-[28%] w-full">
                <div className="sm:max-w-[345px] flex flex-col gap-y-[19px]">
                  <h2 className="text-gradient-Bluedark font-bold 2xl:text-[40px] sm:text-[36px] text-2xl 2xl:leading-[50px] sm:leading-[42px] leading-[32px]">
                    Try a Free Lesson Real Quick
                  </h2>
                  <p className="font-normal 2xl:text-xl 2xl:leading-[28px] sm:text-lg text-sm leading-[24px] text-white/60">
                    Watch AB guiding a student and a funny interaction between
                    them.
                  </p>

                  <p className="font-normal 2xl:text-xl 2xl:leading-[28px] sm:text-lg text-sm leading-[24px] text-white/60">
                    As an expert - AB guides his students through various
                    hurdles, by providing insightful feedback.
                  </p>
                  <a
                    href="#"
                    className="align-middle inline-flex items-center justify-center text-center primary-btn bg-gradient-secondary text-white px-[50px] sm:py-[15.5px] py-[14px] font-semibold leading-[24px] text-xl relative z-10 w-full"
                  >
                    Take the Course
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="custom-container sm:px-[32px] px-4">
          <div className="pb-[80px] border-y-2 border-[#252525]">
            <div className="mx-auto 2xl:px-[135px] md:px-[100px] sm:px-[50px] px-4 w-full bg-[#FFDD74] pb-[30px]">
              <div className="sm:pt-[52px] pt-[12px]">
                <h2 className="text-black 2xl:text-[40px] sm:text-5xl text-[28px] leading-normal sm:font-bold font-extrabold">
                  Support{" "}
                </h2>
                <p className="text-black xl:text-[44px] md:text-3xl text-[28px] leading-7 font-normal mt-2">
                  In Every Possible Way
                </p>
              </div>
              {grouped.map((row, rowIndex) => (
                <div className="" key={rowIndex}>
                  {rowIndex !== 0 && (
                    <div className="relative">
                      <img
                        src={divider3}
                        alt="Divider"
                        className="w-full sm:opacity-30 opacity-40 absolute left-0 right-0 bottom-0"
                      />
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] sm:pt-[60px] sm:pb-[90px] py-[50px]">
                    {row.map((item, index) => (
                      <div key={index}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="rounded-[10px] sm:mb-7 mb-4 w-full"
                        />
                        <h4 className="text-black text-2xl md:text-3xl font-bold mb-2">
                          {item.title}
                        </h4>
                        <p className="text-black sm:text-lg text-base">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-8 pt-[58px] lg:scroll-mt-[90px]" id="courses">
          <div className="custom-container mx-auto py-0 px-4 sm:px-[32px] z-50">
            <div className="pb-[30px]">
              <h2 className="sm:text-3xl text-2xl leading-[1.2] font-semibold text-white text-left">
                Check out some other courses
              </h2>
            </div>
            <div className="flex flex-col gap-[32px]">
              <div className="bg-course-green-bg hover:bg-course-green-hover-bg border-[1.5px] border-white/10 grid items-center lg:grid-cols-2 gap-[38px] transition-all duration-300 ease group px-4 sm:px-6 py-4 sm:py-6 relative">
                <div className="ribbon ribbon-top-left z-10">
                  <span>New course!</span>
                </div>

                <div className="overflow-hidden relative z-0 max-h-[450px]">
                  <img
                    src={CourseImg1}
                    alt="CourseImg1"
                    className="w-full h-full object-cover transition-all duration-300 ease group-hover:scale-[1.05]"
                  />
                </div>
                <div className="lg:py-[16px]">
                  <h2 className="text-[#52D34E] [text-shadow:0px_5px_0px_#000000] font-bold md:text-[24px] inline-block sm:text-2xl text-lg">
                    NAATI CCL Fast Track Course
                  </h2>
                  <h2 className="font-bold xl:text-[40px] md:text-[32px] sm:text-[30px] text-2xl text-white xl:leading-[2.8rem] leading-[1.2] my-[12px]">
                    Need to clear the test in 3 days, we’ve got you covered!
                  </h2>
                  <p className="md:text-xl lg:text-lg text-base font-light max-w-[800px] text-white/75 mb-0">
                    This is a super fast-paced course. It’s geared for speed,
                    designed for those who need to clear the test on urgent
                    basis, and do whatever it takes to clear it.
                  </p>
                  <div className="sm:flex items-center gap-3 my-[12px] hidden">
                    <img
                      src={avatar}
                      alt="avatar"
                      className="w-[50px] h-[50px] rounded-full border-4 border-white/10"
                    />
                    <h3 className="text-base font-light text-white/60">
                      Taught by{" "}
                      <span className="text-white font-semibold">Abhishek</span>
                    </h3>
                  </div>
                  <div className="pt-[12px] flex lg:flex-nowrap flex-wrap lg:gap-[31px] gap-[16px] lg:max-w-[800px]">
                    <Link
                      to="/naaticcl"
                      className="primary-btn bg-gradient-GreenBtn inline-flex justify-center items-center text-center text-white px-3 sm:py-3 py-[14px] lg:w-[50%] w-full font-semibold sm:text-xl text-lg relative z-10 shadow-[0px_4px_0px_rgba(0,0,0,0.25),_0px_3px_0px_rgba(0,0,0,0.25)]"
                    >
                      Take the Course
                    </Link>
                    <Link
                      to="/naaticcl"
                      className="text-center bg-transparent border-[1.5px] border-white/20 inline-flex justify-center items-center text-white px-3 sm:py-3 py-[14px] lg:w-[50%] w-full font-semibold sm:text-xl text-lg z-10 transition-all duration-300 ease hover:bg-white/10 shadow-[0px_4px_0px_rgba(0,0,0,0.25),_0px_3px_0px_rgba(0,0,0,0.25)]"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>

              <div className="course-drop-shadow bg-course-black-bg hover:bg-course-black-hover-bg border-[1.5px] border-[#333434] grid items-center lg:grid-cols-2 gap-[38px] transition-all duration-300 ease group px-4 sm:px-6 py-4 sm:py-6 relative">
                <div className="overflow-hidden relative z-0 max-h-[450px]">
                  <img
                    src={CourseImg3}
                    alt="CourseImg3"
                    className="w-full h-full object-cover transition-all duration-300 ease group-hover:scale-[1.05]"
                  />
                </div>
                <div className="lg:py-[16px]">
                  <h2 className="dark-text-custom font-bold md:text-[24px] inline-block sm:text-2xl text-lg">
                    PTE Master Handbook
                  </h2>
                  <h2 className="font-bold xl:text-[40px] md:text-[32px] sm:text-[30px] text-2xl text-white xl:leading-[2.8rem] leading-[1.2] my-[8px]">
                    PTE 79+ in 7 days <br />
                    Crack PTE in 1 attempt
                  </h2>
                  <p className="md:text-xl lg:text-lg text-base font-light max-w-[800px] text-white/75 mb-0">
                    Learn exactly what students did to achieve their desired
                    band. This book explains the exam structure, target scores,
                    key tasks to focus on, and the 7-day strategy you need to
                    follow to go from 5 to 8 each as quickly as possible.
                  </p>
                  <div className="sm:flex items-center gap-3 my-[12px] hidden">
                    <img
                      src={avatar}
                      alt="avatar"
                      className="w-[50px] h-[50px] rounded-full border-4 border-white/10"
                    />
                    <h3 className="text-base font-light text-white/60">
                      Taught by{" "}
                      <span className="text-white font-semibold">Abhishek</span>
                    </h3>
                  </div>
                  <div className="pt-[12px] flex lg:flex-nowrap flex-wrap lg:gap-[31px] gap-[16px] lg:max-w-[800px]">
                    <a
                      href="#"
                      className="primary-btn bg-gradient-dark leading-[28px] inline-flex justify-center items-center text-center text-white px-3 sm:py-3 py-[14px] lg:w-[50%] w-full font-semibold sm:text-xl text-lg relative z-10 shadow-[0px_4px_0px_rgba(0,0,0,0.25),_0px_3px_0px_rgba(0,0,0,0.25)]"
                    >
                      Free E-Book
                    </a>
                    <a
                      href="#"
                      className="text-center bg-transparent border-[1.5px] border-white/20 inline-flex justify-center items-center text-white px-3 sm:py-3 py-[14px] lg:w-[50%] w-full font-semibold sm:text-xl text-lg transition-all z-10 duration-300 ease hover:bg-white/10 shadow-[0px_4px_0px_rgba(0,0,0,0.25),_0px_3px_0px_rgba(0,0,0,0.25)]"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <a
        href="#"
        className="align-middle inline-flex items-center justify-center text-center primary-btn bg-gradient-secondary text-white px-3 sm:py-3 py-[14px] w-full font-semibold sm:text-xl text-lg z-10 fixed bottom-0 left-0 right-0 md:hidden"
      >
        Take the Course
      </a>
    </>
  );
};

export default PTEMasterClass;
