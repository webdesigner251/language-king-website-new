import React, { useState } from "react";
import { Link } from "react-router-dom";
import TestimonialCarousel from "../components/testimonials-carousel";
import BookFreeTrail from "../components/BookFreeTrail";
import CourseImg1 from "../assets/course-img1.png";
import CourseImg2 from "../assets/course-img2.png";
import CourseImg3 from "../assets/course-img3.png";
import avatar from "../assets/avatar-img.png";
import VideoImg1 from "../assets/course-video-img-1.png";
import VideoImg2 from "../assets/course-video-img-2.png";
import VideoImg3 from "../assets/course-video-img-3.png";
import VideoImg4 from "../assets/course-video-img-4.png";
import Icon1 from "../assets/icons/video-icon.svg";
import Icon2 from "../assets/icons/download-icon.svg";
import Icon3 from "../assets/icons/rec-icon.svg";
import Icon4 from "../assets/icons/ai-icon.svg";
import Icon5 from "../assets/icons/whatsapp-icon.svg";
import Icon6 from "../assets/icons/live-icon.svg";
import Icon7 from "../assets/icons/badge-icon.svg";
import ReviewImg1 from "../assets/testimonial-01.png";
import ReviewImg2 from "../assets/testimonial-02.png";
import ReviewImg3 from "../assets/testimonial-03.png";
import ReviewImg4 from "../assets/testimonial-04.png";
import Avatar1 from "../assets/avatar1.png";
import Avatar2 from "../assets/avatar2.png";
import Avatar3 from "../assets/avatar3.png";
import Avatar4 from "../assets/avatar4.png";
import Star from "../assets/icons/star.svg";
import Google from "../assets/icons/google.svg";
import HomeBanner from "../assets/Homepage-banner.png";
import GrainIMG from "../assets/testimonial-grain.png";
import personImage from "../assets/person.png";
import checklist from "../assets/icons/checkmark.svg";
import video from "../assets/videos/placeholder-video.mp4";
import VideoModal from "../components/videoModal";
import CallbackForm from "../components/callback-popup";
import Video1 from "../assets/videos/VID-20250605-WA0001.mp4";
import Video2 from "../assets/videos/VID-20250605-WA0002.mp4";
import Video3 from "../assets/videos/VID-20250605-WA0003.mp4";
import Video4 from "../assets/videos/VID-20250605-WA0004.mp4";

const testimonials = [
  {
    reviewImg: Video1,
    thumbnail: ReviewImg1,
    text: "I’m getting a lot of nutrients in one scoop",
    avatar: Avatar1,
    name: "Natalia",
    subtitle: "PTE - 8 Each",
    sourceIcon: Google,
    time: "10 Hours ago",
    rating: 5,
    starIcon: Star,
  },
  {
    reviewImg: Video2,
    thumbnail: ReviewImg2,
    text: "It’s kind of slipped into our recruitment stream so easily There’s no effort needed... ",
    avatar: Avatar2,
    name: "Jenny",
    subtitle: "PTE - 8 Each",
    sourceIcon: Google,
    time: "1 day ago",
    rating: 5,
    starIcon: Star,
  },
  {
    reviewImg: Video3,
    thumbnail: ReviewImg3,
    text: `All of our hiring team said that it saves them hours. <span class="text-white/50">We’re getting feedback within 20-30 minutes from interviews now, which is ideal for recruiting team that works with time to hire targets.</span>`,
    avatar: Avatar3,
    name: "Mark",
    subtitle: "PTE - 8 Each",
    sourceIcon: Google,
    time: "10 week ago",
    rating: 5,
    starIcon: Star,
  },
  {
    reviewImg: Video4,
    thumbnail: ReviewImg4,
    text: `There is a clear impact on time saved. <span class="text-white/50">We saved 53 hours per month across our recruiting team.</span>`,
    avatar: Avatar4,
    name: "Priyanka",
    subtitle: "NAATI CCL - 78/90",
    sourceIcon: Google,
    time: "10 month ago",
    rating: 5,
    starIcon: Star,
  },
];

const videoItems = [
  {
    title: "Impact of Read Aloud on Reading Module",
    thumbnail: VideoImg1,
    videoSrc: video,
  },
  {
    title: "Poor score in Write Essay",
    thumbnail: VideoImg2,
    videoSrc: video,
  },
  {
    title: "Dialogue vs Segment",
    thumbnail: VideoImg3,
    videoSrc: video,
  },
  {
    title: "PTE vs IELTS",
    thumbnail: VideoImg4,
    videoSrc: video,
  },
];

const courses = [
  {
    title: "NAATI CCL Fast Track Course",
    subtitle: "Need to clear the test in 3 days, we’ve got you covered!",
    desc:
      "This is a super fast-paced course. It’s geared for speed, designed for those who need to clear the test on urgent basis, and do whatever it takes to clear it.",
    image: CourseImg1,
    avatar: avatar,
    showRibbon: true,
    ribbonText: "New course!",
    className: "bg-course-green-bg hover:bg-course-green-hover-bg",
    textClass: "text-[#52D34E] [text-shadow:0px_5px_0px_#000000]",
    btnClass: "bg-gradient-GreenBtn",
    btn1Text: "Take the Course",
    btn2Text: "View Details",
    btn1Link: null, // if you want to use openPopup instead, pass null
    btn2Link: "/naaticcl",
  },
  {
    title: "PTE Master Class",
    subtitle: "Missed your score by a few marks! Clear in 2 weeks",
    desc:
      "This is literally the best advice that I give every student. My strategies will teach you how to get 90 in each module. I’ve helped students out for 5+ years as a super-friendly teacher to get their desired score, now it’s your turn.",
    image: CourseImg2,
    avatar: avatar,
    showRibbon: false,
    className: "course-drop-shadow bg-course-blue-bg hover:bg-course-blue-hover-bg",
    textClass: "text-gradient-secondary",
    btnClass: "bg-gradient-secondary",
    btn1Text: "Take the Course",
    btn2Text: "View Details",
    btn1Link: null,
    btn2Link: "/pte-masterclass",
  },
  {
    title: "PTE Master Handbook",
    subtitle: "PTE 79+ in 7 days\nCrack PTE in 1 attempt",
    desc:
      "Learn exactly what students did to achieve their desired band. This book explains the exam structure, target scores, key tasks to focus on, and the 7-day strategy you need to follow to go from 5 to 8 each as quickly as possible.",
    image: CourseImg3,
    avatar: avatar,
    showRibbon: false,
    className: "course-drop-shadow bg-course-black-bg hover:bg-course-black-hover-bg border-[#333434]",
    textClass: "dark-text-custom",
    btnClass: "bg-gradient-dark",
    btn1Text: "Free E-Book",
    btn2Text: "View Details",
    btn1Link: "/free-e-book",
    btn2Link: "/free-e-book",
  },
];


const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
    <>
      <section className="banner-wrapper min-h-[110vh] sm:pt-[17.857em] pt-[450px] sm:pb-[6.614em] pb-[60px] mt-[-150px] relative flex items-center overflow-hidden">
        <img
          src={HomeBanner}
          alt="HomeBanner"
          className="scale-[1.1] absolute w-full h-full top-0 left-0 right-0 bottom-0 object-cover"
        />
        <div className="custom-container mx-auto py-0 sm:px-[2.1164021164em] px-4  w-full z-10 relative ">
          <div className="lg:max-w-[54.8941798942em] max-w-full">
            <div className="flex flex-col 2xl:gap-6 gap-3">
              <h2 className="text-gradient-primary font-bold lg:text-[1.5873015873em] sm:text-[2.34375em] text-2xl leading-[1.3333]">
                # Australia’s No.1
              </h2>
              <h1 className="font-inter font-bold lg:text-[4.021em] sm:text-[4.688em] leading-[1.12] text-[36px] text-white">
                PTE, IELTS & NAATI CCL Coaching Institute
              </h1>
              <p className="md:text-lg text-base font-light md:max-w-[600px] text-white/75">
                Join 10,000+ satisfied students in achieving their desired Test
                Scores. Helped many students, now it's your turn!
              </p>
            </div>
            <div className="md:mt-[3.175em] mt-[40px] flex sm:flex-nowrap flex-wrap sm:gap-[2.050em] gap-[16px] xl:max-w-[39.6825396825em] lg:max-w-[46.875em] md:max-w-[58.59375em]">
              <Link
                to="/home2"
                className="inline-flex justify-center items-center text-center primary-btn bg-gradient-primary text-black px-[0.7936507937em] sm:py-[clamp(12px, calc(-6.0000px + 100.0000vw), 14px)] py-[14px] sm:w-[50%] w-full sm:font-semibold font-bold md:text-[1.3227513228em] text-lg relative z-10 leading-[1.2]"
              >
                Get-a Callback
              </Link>
              <Link
                to="/free-e-book"
                className="align-middle inline-flex items-center gap-[18px] justify-center text-center bg-transparent border-2 border-Cadmium-Orange text-white transition-all duration-300 ease hover:bg-white/10 px-[0.7936507937em] sm:py-[clamp(12px, calc(-6.0000px + 100.0000vw), 14px)] py-[14px] sm:w-[50%] w-full sm:font-semibold font-bold md:text-[1.3227513228em] text-lg relative z-10 leading-[1.2]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 22 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.93 11.9998L0 23.9253V0.0742188L21.93 11.9998Z"
                    fill="url(#paint0_linear_702_4078)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_702_4078"
                      x1="0"
                      y1="11.9997"
                      x2="21.93"
                      y2="11.9997"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#D7FF53" />
                      <stop offset="1" stopColor="#FD4F2B" />
                    </linearGradient>
                  </defs>
                </svg>
                Watch FREE Lessons
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 lg:scroll-mt-[90px]" id="courses">
        <div className="custom-container mx-auto py-0 px-4 sm:px-[2.1164021164em] z-50 border-t border-[#252525]">
          <div className="">
            <h2 className="text-white font-bold lg:text-[1.7453703704em] text-lg relative inline-block z-10 sm:my-[38px] mt-[30px] mb-[20px] stroke-heading">
              Our Courses
            </h2>
          </div>
          <div className="flex flex-col gap-[32px]">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`border-[1.5px] border-white/10 grid items-center lg:grid-cols-2 sm:gap-[2.5132275132em] gap-[32px] transition-all duration-300 ease group px-4 sm:px-[1.5873015873em] py-4 sm:py-[1.5873015873em] relative ${course.className}`}
              >
                {course.showRibbon && (
                  <div className="ribbon ribbon-top-left z-10">
                    <span>{course.ribbonText}</span>
                  </div>
                )}

                {/* Course Image */}
                <div className="overflow-hidden relative z-0 max-h-[450px]">
                  <img
                    src={course.image}
                    alt={`Course ${index + 1}`}
                    className="w-full h-full object-cover transition-all duration-300 ease group-hover:scale-[1.05]"
                  />
                </div>

                {/* Content */}
                <div className="lg:py-[16px]">
                  <h2
                    className={`${course.textClass} font-bold inline-block lg:text-[1.5873015873em] sm:text-[2.34375em] text-lg`}
                  >
                    {course.title}
                  </h2>
                  <h2 className="font-bold lg:text-[2.6455026455em] md:text-[3.125em] sm:text-[3.9113428944em] text-2xl text-white sm:leading-[1.098] leading-[1.2] my-[12px] whitespace-pre-line">
                    {course.subtitle}
                  </h2>
                  <p className="lg:text-[1.1904761905em] sm:text-[1.953125em] text-base font-light max-w-[800px] text-white/75 mb-0">
                    {course.desc}
                  </p>

                  {/* Avatar */}
                  <div className="sm:flex items-center gap-3 my-[12px] hidden">
                    <img
                      src={course.avatar}
                      alt="avatar"
                      className="lg:w-[3.3068783069em] lg:h-[3.3068783069em] w-[4.8828125em] h-[4.8828125em] rounded-full border-4 border-white/10"
                    />
                    <h3 className="lg:text-[1.0582010582em] text-base font-light text-white/60">
                      Taught by{" "}
                      <span className="text-white font-semibold">Abhishek</span>
                    </h3>
                  </div>

                  {/* Buttons */}
                  <div className="sm:pt-[0.7936507937em] pt-[12px] flex lg:flex-nowrap flex-wrap lg:gap-[2.0502645503em] gap-[16px] lg:max-w-[800px]">
                    {course.btn1Link ? (
                      <Link
                        to={course.btn1Link}
                        className={`inline-flex justify-center items-center text-center text-white sm:px-[0.7936507937em] px-3 sm:py-[clamp(12px, calc(-6.0000px + 100.0000vw), 14px)] py-[14px] lg:w-[50%] w-full font-semibold lg:text-[1.3227513228em] text-lg leading-[1.2] relative z-10 shadow-[0px_4px_0px_rgba(0,0,0,0.25),_0px_3px_0px_rgba(0,0,0,0.25)] cursor-pointer ${course.btnClass}`}
                      >
                        {course.btn1Text}
                      </Link>
                    ) : (
                      <a
                        onClick={openPopup}
                        className={`inline-flex justify-center items-center text-center text-white sm:px-[0.7936507937em] px-3 sm:py-[clamp(12px, calc(-6.0000px + 100.0000vw), 14px)] py-[14px] lg:w-[50%] w-full font-semibold lg:text-[1.3227513228em] text-lg leading-[1.2] relative z-10 shadow-[0px_4px_0px_rgba(0,0,0,0.25),_0px_3px_0px_rgba(0,0,0,0.25)] cursor-pointer ${course.btnClass}`}
                      >
                        {course.btn1Text}
                      </a>
                    )}
                    <Link
                      to={course.btn2Link}
                      className="bg-transparent border-[1.5px] border-white/20 inline-flex justify-center items-center text-center text-white sm:px-[0.7936507937em] px-3 sm:py-[clamp(12px, calc(-6.0000px + 100.0000vw), 14px)] py-[14px] lg:w-[50%] w-full font-semibold lg:text-[1.3227513228em] text-lg leading-[1.2] relative z-10 shadow-[0px_4px_0px_rgba(0,0,0,0.25),_0px_3px_0px_rgba(0,0,0,0.25)]"
                    >
                      {course.btn2Text}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {showPopup && <CallbackForm onClose={closePopup} />}

      <section className="pb-[32px]">
        <div className="custom-container mx-auto py-0 px-4 sm:px-[2.1164021164em]">
          <div className="bg-[#252525] px-4 sm:px-8 ">
            <div className="sm:py-[2.6455026455em] py-7">
              <h2 className="lg:text-[1.5873015873em] text-[21px] leading-normal font-bold text-white text-left mb-4">
                Try these FREE video lessons
              </h2>

              <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-[28px] gap-[52px]">
                {videoItems.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="border-b-[8px] border-[#A6A6A6] mb-3 shadow-[0px_5.03162px_0px_#000000]">
                      <div
                        className="w-full aspect-16/9 cursor-pointer relative"
                        onClick={() => {
                          setActiveVideo(item.videoSrc);
                          setIsModalOpen(true);
                        }}
                      >
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center transition">
                          <div
                            className={`w-16 h-16 bg-black/40 rounded-full flex items-center justify-center`}
                          >
                            <svg
                              className="w-10 h-10 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-white font-bold 2xl:text-[1.5873015873em] lg:text-[1.455026455em] text-[21px] sm:leading-[1.3] leading-[28px]">
                      {item.title}
                    </h3>
                    <span className="text-white/60 sm:mt-[6px] mt-[4px] block lg:text-[1.0582010582em] text-base font-semibold">
                      PTE MasterClass
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoSrc={activeVideo}
      />

      <section className="pb-8">
        <div className="custom-container mx-auto py-0 px-4 sm:px-[2.1164021164em]">
          <div className="bg-black1 flex flex-col sm:gap-[3.7698412698em] gap-[42px] sm:leading-[auto] leading-[40px] border border-white/10 group md:px-[2.5132275132em] sm:px-6 px-4 md:pt-[3.9682539683em] md:pb-[5.6216931217em] pt-6 pb-7  relative">
            <h2 className="lg:text-[2.7777777778em] sm:text-[2.6455026455em] text-[32px] leading-[1.2] font-bold text-white text-left">
              What’s included in every Course
            </h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-around gap-x-[1.3227513228em] gap-y-[3.9682539683em]">
              <div className="text-center">
                <img
                  src={Icon1}
                  alt="Icon"
                  className="mx-auto sm:mb-[1.6534391534em] mb-6 lg:max-w-[5.8201058201em] sm:max-w-[7.6171875em] max-w-[78px]"
                />
                <span className="text-white/50 md:text-[1.1904761905em] text-sm block max-w-[17.8571428571em] mx-auto">
                  <span className="block text-[#E9E9E9]">Video Lectures -</span>{" "}
                  Basic to advance
                </span>
              </div>
              <div className="text-center">
                <img
                  src={Icon2}
                  alt="Icon"
                  className="mx-auto sm:mb-[1.6534391534em] mb-6 lg:max-w-[5.8201058201em] sm:max-w-[7.6171875em] max-w-[78px]"
                />
                <span className="text-white/50 md:text-[1.1904761905em] text-sm block max-w-[17.8571428571em] mx-auto">
                  <span className="block text-[#E9E9E9]">Study Material -</span>{" "}
                  Templates and prediction file
                </span>
              </div>
              <div className="text-center">
                <img
                  src={Icon3}
                  alt="Icon"
                  className="mx-auto sm:mb-[1.6534391534em] mb-6 lg:max-w-[5.8201058201em] sm:max-w-[7.6171875em] max-w-[78px]"
                />
                <span className="text-white/50 md:text-[1.1904761905em] text-sm block max-w-[17.8571428571em] mx-auto">
                  <span className="block text-[#E9E9E9]">
                    Class Recordings -{" "}
                  </span>
                  Video library of past classes
                </span>
              </div>
              <div className="text-center">
                <img
                  src={Icon4}
                  alt="Icon"
                  className="mx-auto sm:mb-[1.6534391534em] mb-6 lg:max-w-[5.8201058201em] sm:max-w-[7.6171875em] max-w-[78px]"
                />
                <span className="text-white/50 md:text-[1.1904761905em] text-sm block max-w-[17.8571428571em] mx-auto">
                  <span className="block text-[#E9E9E9]">AI Portal -</span>Mock
                  Test & 5000+ exam questions
                </span>
              </div>
              <div className="text-center">
                <img
                  src={Icon5}
                  alt="Icon"
                  className="mx-auto sm:mb-[1.6534391534em] mb-6 lg:max-w-[5.8201058201em] sm:max-w-[7.6171875em] max-w-[78px]"
                />
                <span className="text-white/50 md:text-[1.1904761905em] text-sm block max-w-[17.8571428571em] mx-auto">
                  <span className="block text-[#E9E9E9]">Feedback -</span>
                  Ask an Expert
                </span>
              </div>
              <div className="text-center">
                <img
                  src={Icon6}
                  alt="Icon"
                  className="mx-auto sm:mb-[1.6534391534em] mb-6 lg:max-w-[5.8201058201em] sm:max-w-[7.6171875em] max-w-[78px]"
                />
                <span className="text-white/50 md:text-[1.1904761905em] text-sm block max-w-[17.8571428571em] mx-auto">
                  <span className="block text-[#E9E9E9]">Live Classes - </span>
                  Learn with other students
                </span>
              </div>
              <div className="text-center">
                <img
                  src={Icon7}
                  alt="Icon"
                  className="mx-auto sm:mb-[1.6534391534em] mb-6 lg:max-w-[5.8201058201em] sm:max-w-[7.6171875em] max-w-[78px]"
                />
                <span className="text-white/50 md:text-[1.1904761905em] text-sm block max-w-[17.8571428571em] mx-auto">
                  <span className="block text-[#E9E9E9]">
                    Expert Trainers -
                  </span>
                  Learn from certified trainers
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="custom-container mx-auto py-0 px-4 sm:px-[2.1164021164em]">
          <div className="bg-[#212121] px-4 sm:px-8 sm:pb-[32px] pb-4 relative z-10">
            <div className="relative z-20">
              <div className="sm:py-[2.1164021164em] py-7 flex justify-between items-center">
                <h2 className="sm:text-[1.9841269841em] text-2xl font-bold text-white text-left">
                  Testimonials
                </h2>
                <div className="flex items-center justify-end">
                  <Link
                    to="/testimonials"
                    className="bg-black2 sm:px-[1.9841269841em] sm:py-[0.7936507937em] p-[9px] text-center rounded-[6px] text-white sm:text-[1.1904761905em] text-base leading-[1.32] font-semibold "
                  >
                    View all
                  </Link>
                </div>
              </div>
              <TestimonialCarousel testimonials={testimonials} />
            </div>
            <img
              src={GrainIMG}
              alt="GrainIMG"
              className="absolute top-0  w-full h-full left-0 right-0 z-0 object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="custom-container mx-auto py-0 px-4 sm:px-[2.1164021164em]">
          <div className="bg-[#121212] px-4 py-6 sm:px-[2.1164021164em] sm:py-[44px] border-[1.5px] border-white/10 transition-all duration-300 ease group relative">
            <div className="flex md:flex-nowrap flex-wrap gap-[8.5978835979em] items-stretch justify-between middle-border">
              <div className="md:block hidden md:w-[50%] w-full">
                <img
                  src={personImage}
                  alt="personImage"
                  className="w-full rounded-[11px]"
                />
                <h2 className="font-bold text-white lg:text-[2.6455026455em] text-3xl mt-[32px]">
                  What’s covered in class:
                </h2>
                <div className="grid lg:grid-cols-2 grid-cols-1 mt-[42px] gap-7 ">
                  <div className="flex items-center gap-4 text-white font-medium">
                    <img
                      src={checklist}
                      alt="checklist"
                      className="w-[1.7195767196em] h-[1.7195767196em]"
                    />
                    <span className="lg:text-[1.455026455em] text-xl">
                      Basic Introduction
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-white font-medium">
                    <img
                      src={checklist}
                      alt="checklist"
                      className="w-[1.7195767196em] h-[1.7195767196em]"
                    />
                    <span className="lg:text-[1.455026455em] text-xl">
                      Test Format & Overview
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-white font-medium">
                    <img
                      src={checklist}
                      alt="checklist"
                      className="w-[1.7195767196em] h-[1.7195767196em]"
                    />
                    <span className="lg:text-[1.455026455em] text-xl">
                      Level of English
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-white font-medium">
                    <img
                      src={checklist}
                      alt="checklist"
                      className="w-[1.7195767196em] h-[1.7195767196em]"
                    />
                    <span className="lg:text-[1.455026455em] text-xl">
                      Scorecard Analysis
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-white font-medium">
                    <img
                      src={checklist}
                      alt="checklist"
                      className="w-[1.7195767196em] h-[1.7195767196em]"
                    />
                    <span className="lg:text-[1.455026455em] text-xl">
                      And more!
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:w-[50%] w-full">
                <h2 className="font-bold lg:text-[2.7777777778em] sm:text-4xl text-[26px] text-gradient-OrangeRed border-b-2 border-[#2A2A2A] pb-5">
                  Book a FREE Trial Class
                </h2>
                <p className="font-normal text-white/75 lg:text-[1.455026455em] sm:text-xl text-base pt-7">
                  Please fill out the below form. Our team will be in touch shortly.
                </p>
                <div className="sm:pt-6 pt-4">
                  <BookFreeTrail />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  );
};

export default Home;
