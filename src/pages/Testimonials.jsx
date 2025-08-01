import QuoteIcon from "../assets/icons/quote-icon.svg";
import PlaceholerImage from "../assets/placeholder.png";
import Mainavatar from "../assets/avatar5.png";
import Russia1 from "../assets/flags/Russia1.png";
import Avatarnew from "../assets/avatar6.png";
import CheckmarkGray from "../assets/icons/checkmark-gray.svg";
import PinkQuote from "../assets/icons/pink-quote.svg";
import VideoPlayer from "../components/videoPlayer";
// import video from "../assets/videos/placeholder-video.mp4";
import Video1 from "../assets/videos/VID-20250605-WA0001.mp4";
import Video2 from "../assets/videos/VID-20250605-WA0002.mp4";
import Video3 from "../assets/videos/VID-20250605-WA0003.mp4";
import Video4 from "../assets/videos/VID-20250605-WA0004.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import GetInTouch from "../components/Get-in-touch";

// Testimonials slides Data array
const slidesData = [
  {
    id: 1,
    title: "I thought it was not possible at I thought it was not possible at",
    name: "Natalia",
    tag: "8 beach",
    image: PlaceholerImage,
    avatar: Avatarnew,
    flag: Russia1,
    video: Video1,
  },
  {
    id: 2,
    title: "Never imagined I could achieve this score!",
    name: "Alex",
    tag: "9 overall",
    image: PlaceholerImage,
    avatar: Avatarnew,
    flag: Russia1,
    video: Video2,
  },
  {
    id: 3,
    title: "With dedication, everything is possible!",
    name: "Sophia",
    tag: "8.5 band",
    image: PlaceholerImage,
    avatar: Avatarnew,
    flag: Russia1,
    video: Video3,
  },
  {
    id: 4,
    title: "Hard work paid off in the end.",
    name: "Daniel",
    tag: "9 band",
    image: PlaceholerImage,
    avatar: Avatarnew,
    flag: Russia1,
    video: Video4,
  },
  {
    id: 5,
    title: "I thought it was not possible at I thought it was not possible at",
    name: "Natalia",
    tag: "8 beach",
    image: PlaceholerImage,
    avatar: Avatarnew,
    flag: Russia1,
    video: Video1,
  },
  {
    id: 6,
    title: "I thought it was not possible at I thought it was not possible at",
    name: "Natalia",
    tag: "8 beach",
    image: PlaceholerImage,
    avatar: Avatarnew,
    flag: Russia1,
    video: Video2,
  },
];

const Testimonials = () => {
  return (
    <>
      <section className="md:pt-[14.5502645503em] pt-[180px] md:pb-[5.0925925926em] pb-8 mt-[-7.9365079365em]">
        <div className="custom-container mx-auto py-0 px-4 sm:px-[2.1164021164em] w-full relative z-10">
          <div className="grid items-start lg:grid-cols-2 xl:gap-[7.9365079365em] gap-[5.9523809524em]">
            <div>
              <div className="2xl:max-w-[39.0211640212em] xl:max-w-[34.7222222222em] lg:max-w-[34.96875em]">
                <h1 className="font-inter font-bold lg:text-[3.6375661376em] md:text-[4.1015625em] text-[38px] leading-[normal] inline-block 2xl:mt-2 mt-0 text-white">
                  Why Students Love Learning With Us
                </h1>

                <div className="lg:hidden aspect-16/9 block w-full py-[3.3068783069em]">
                  <VideoPlayer
                    videoSrc={Video1}
                    thumbnail={PlaceholerImage}
                    wrapperClassName="md:rounded-[0.6613756614em] rounded-[10px]  h-auto"
                    videoClassName="md:rounded-[0.6613756614em] rounded-[10px]  h-auto"
                    thumbnailClassName="md:rounded-[0.6613756614em] rounded-[10px]  h-auto"
                  />
                </div>
                <hr className="border-1 border-y-[#252525] my-[2.6455026455em] lg:block hidden border-max-width" />
              </div>
              <div className="relative ps-[1.6666666667em] text-[#B7B7B7] lg:text-[1.1904761905em] sm:text-base text-sm lg:max-w-[33.3333333333em] leading-[1.56]">
                <img src={QuoteIcon} alt="QuoteIcon" className="-ml-[1.5555555556em]" />
                When I started my journey I really thought that it would be
                impossible for me to clear he test due to my background.
                xxxxxxxxxxxxx
              </div>
              <div className="flex sm:gap-[1.3227513228em] gap-4 items-center mt-[3.3068783069em]">
                <img
                  src={Mainavatar}
                  alt="Mainavatar"
                  className="sm:w-[4.0343915344em] w-[52px] rounded-[8px]"
                />
                <div className="sm:text-[1.1904761905em] text-base">
                  <span className="text-white me-[0.5em]">Natalia &#9679;</span>
                  <span className="text-white/40 uppercase">
                    PTE & NAATI CCL
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:block hidden aspect-16/9">
              <VideoPlayer
                videoSrc={Video1}
                thumbnail={PlaceholerImage}
                wrapperClassName="md:rounded-[0.6613756614em] rounded-[10px]  h-full"
                videoClassName="md:rounded-[0.6613756614em] rounded-[10px]  h-full"
                thumbnailClassName="md:rounded-[0.6613756614em] rounded-[10px]  h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sm:py-[1.9841269841em] pt-[25px]">
        <div className="custom-container mx-auto py-0 px-4 sm:px-[2.1164021164em] w-full relative z-10">
          <div className="flex gap-4 justify-between items-center border-b border-[#252525] py-[1.0582010582em]">
            <h2 className="sm:text-[1.9841269841em] text-[22px] leading-normal font-bold text-white text-left">
              PTE Hall of Fame
            </h2>
            <div className="flex gap-3 justify-end items-center  relative">
              <button className="custom-prev md:w-10 md:h-10 w-[2.6455026455em] h-[2.6455026455em] p-[0.9920634921em] cursor-pointer flex items-center justify-center bg-[#1A1A1A] hover:bg-white/10 transition-all duration-300 ease-in-out border-none rounded">
                <svg
                  className="md:w-[0.7936507937em]"
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 18L2 10L10 2"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="custom-next md:w-10 md:h-10 w-[2.6455026455em] h-[2.6455026455em] p-[0.9920634921em] cursor-pointer flex items-center justify-center bg-[#1A1A1A] hover:bg-white/10 transition-all duration-300 ease-in-out border-none rounded">
                <svg
                  className="md:w-[0.7936507937em]"
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L10 10L2 18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="sm:py-[1.8518518519em] pt-[24px]">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              spaceBetween={30}
              slidesPerView={1.2}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {slidesData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div>
                    <div className="relative">
                      <div className="md:rounded-[0.6613756614em] rounded-[10px]  w-full aspect-3/2 h-auto object-cover object-center relative z-10">
                        <VideoPlayer
                          videoSrc={item.video}
                          thumbnail={item.image}
                          wrapperClassName="md:rounded-[0.6613756614em] rounded-[10px]  h-full"
                          videoClassName="md:rounded-[0.6613756614em] rounded-[10px]  object-contain h-full"
                          thumbnailClassName="md:rounded-[0.6613756614em] rounded-[10px]  h-full"
                        />
                      </div>
                      {/* <div className="absolute inset-0 bg-black opacity-35 md:rounded-[0.6613756614em] rounded-[10px] "></div> */}
                    </div>
                    <p className="truncate text-white md:text-[1.3227513228em] sm:text-[1.1904761905em] leading-[1.4] text-base my-[0.4em]">
                      {item.title}
                    </p>
                    <div className="flex sm:gap-[1.3227513228em] gap-4 sm:items-end items-center mt-[1.3227513228em]">
                      <div className="relative">
                        <img
                          src={item.flag}
                          alt="flag"
                          className="sm:w-[1.3227513228em] w-4 sm:h-[1.3227513228em] h-4 rounded-sm absolute -top-1 -right-1 z-0"
                        />
                        <img
                          src={item.avatar}
                          alt="avatar"
                          className="sm:w-[4.0343915344em] w-[52px] rounded-[0.5291005291em] border-2 border-[#D66D11]"
                        />
                      </div>
                      <div className="md:text-[1.0582010582em] text-base sm:text-center text-start flex flex-col">
                        <span className="text-white/40 uppercase">
                          {item.name}
                        </span>
                        <span className="text-white text-sm block">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="sm:py-[30px] pt-[25px]">
        <div className="custom-container mx-auto py-0 px-4 sm:px-[2.1164021164em] w-full relative z-10">
          <div className="flex gap-4 justify-between items-center border-b border-[#252525] py-[1.0582010582em]">
            <h2 className="sm:text-[1.9841269841em] text-[22px] leading-normal font-bold text-white text-left">
              NAATI CCL Results
            </h2>
            <div className="flex gap-3 justify-end items-center  relative">
              <button className="custom-prev md:w-10 md:h-10 w-[2.6455026455em] h-[2.6455026455em] p-[0.9920634921em] cursor-pointer flex items-center justify-center bg-[#1A1A1A] hover:bg-white/10 transition-all duration-300 ease-in-out border-none rounded">
                <svg
                  className="md:w-[0.7936507937em]"
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 18L2 10L10 2"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="custom-next md:w-10 md:h-10 w-[2.6455026455em] h-[2.6455026455em] p-[0.9920634921em] cursor-pointer flex items-center justify-center bg-[#1A1A1A] hover:bg-white/10 transition-all duration-300 ease-in-out border-none rounded">
                <svg
                  className="md:w-[0.7936507937em]"
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L10 10L2 18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="sm:py-[1.8518518519em] pt-[24px]">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".custom-next-new",
                prevEl: ".custom-prev-new",
              }}
              spaceBetween={30}
              slidesPerView={1.2}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {slidesData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div>
                    <div className="relative">
                      <div className="md:rounded-[0.6613756614em] rounded-[10px]  w-full aspect-3/2 h-auto object-cover object-center relative z-10">
                        <VideoPlayer
                          videoSrc={item.video}
                          thumbnail={item.image}
                          wrapperClassName="md:rounded-[0.6613756614em] rounded-[10px]  h-full"
                          videoClassName="md:rounded-[0.6613756614em] rounded-[10px]  object-contain h-full"
                          thumbnailClassName="md:rounded-[0.6613756614em] rounded-[10px]  h-full"
                        />
                      </div>
                      {/* <div className="absolute inset-0 bg-black opacity-35 md:rounded-[0.6613756614em] rounded-[10px] "></div> */}
                    </div>
                    <p className="truncate text-white md:text-[1.3227513228em] sm:text-[1.1904761905em] leading-[1.4] text-base my-[0.4em]">
                      {item.title}
                    </p>
                    <div className="flex sm:gap-[1.3227513228em] gap-4 sm:items-end items-center mt-[1.3227513228em]">
                      <div className="relative">
                        <img
                          src={item.flag}
                          alt="flag"
                          className="sm:w-[1.3227513228em] w-4 sm:h-[1.3227513228em] h-4 rounded-sm absolute -top-1 -right-1 z-0"
                        />
                        <img
                          src={item.avatar}
                          alt="avatar"
                          className="sm:w-[4.0343915344em] w-[52px] rounded-[0.5291005291em] border-2 border-[#D66D11]"
                        />
                      </div>
                      <div className="md:text-[1.0582010582em] text-base sm:text-center text-start flex flex-col">
                        <span className="text-white/40 uppercase">
                          {item.name}
                        </span>
                        <span className="text-white text-sm block">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="sm:pt-[1.9841269841em] pt-[30px] sm:pb-0 pb-[1.9841269841em]">
        <div className="custom-container mx-auto  px-4 sm:px-[2.1164021164em] w-full relative z-10">
          <div className="border-t border-[#252525] md:pt-[6.6137566138em] sm:pt-[4.6296296296em] pt-[60px] sm:pb-[3.5714285714em]">
            <div className="flex md:flex-nowrap justify-between flex-wrap gap-[8.856em]">
              <div className="md:w-[50%] w-full">
                <h2 class="lg:text-[3.4391534392em] sm:text-[4.1015625em] text-[32px] leading-[1.2] -mt-[10px] font-bold text-white text-left lg:max-w-full">
                  Get in touch with us
                </h2>
                <p className="relative text-[#B7B7B7] md:text-[1.1904761905em] leading-[1.556] text-base max-w-[33.3333333333em] my-[0.6666666667em]">
                  Contact us on xxxxxxxxx/ xxxxxxxxx
                </p>
                {/* Mobile Form */}
                <div className="md:hidden block pt-3">
                  <GetInTouch />
                </div>
                <div className="lg:my-[3.9682539683em] my-[50px]">
                  <h3 className="text-white font-bold md:text-[1.5873015873em] sm:text-xl text-lg leading-[32px]">
                    Why Language King?
                  </h3>
                  <ul className="mt-[1.3227513228em] sm:ps-[1.3227513228em] gap-5 md:max-w-[45.6349206349em]">
                    <li className="flex items-start sm:leading-[1.2] leading-[1.4] sm:text-[1.0582010582em] text-sm text-[#ACACAC] sm:gap-[1.8518518519em] gap-4 sm:py-[0.75em]">
                      <img
                        src={CheckmarkGray}
                        alt="CheckmarkGray"
                        className="w-4 pt-1"
                      />
                      Learn from 8 each tutors. The best way to crack any exam
                      is to learn from the person who has cracked it.
                    </li>
                    <li className="flex items-start sm:leading-[1.2] leading-[1.4] sm:text-[1.0582010582em] text-sm text-[#ACACAC] sm:gap-[1.8518518519em] gap-4 sm:py-[0.75em]">
                      <img
                        src={CheckmarkGray}
                        alt="CheckmarkGray"
                        className="w-4 pt-1"
                      />
                      Stay up-to-date with changes in exam, and learn the latest
                      strategies from carefully designed video lectures by
                      Abhishek, PTE & NAATI Master Trainer.
                    </li>
                    <li className="flex items-start sm:leading-[1.2] leading-[1.4] sm:text-[1.0582010582em] text-sm text-[#ACACAC] sm:gap-[1.8518518519em] gap-4 sm:py-[0.75em]">
                      <img
                        src={CheckmarkGray}
                        alt="CheckmarkGray"
                        className="w-4 pt-1"
                      />
                      1-to-1 feedback from experts & personalized timetable to
                      fit your busy schedule, learn from the comfort of your
                      home while sipping coffee.
                    </li>
                    <li className="flex items-start sm:leading-[1.2] leading-[1.4] sm:text-[1.0582010582em] text-sm text-[#ACACAC] sm:gap-[1.8518518519em] gap-4 sm:py-[0.75em]">
                      <img
                        src={CheckmarkGray}
                        alt="CheckmarkGray"
                        className="w-4 pt-1"
                      />
                      Access to AI based portal with real time scoring, 5000+
                      practice questions, including sectional and full mock
                      test.
                    </li>
                  </ul>
                </div>
                <div className="flex items-start sm:gap-5 gap-3 md:max-w-[46.296em]">
                  <img
                    src={PinkQuote}
                    alt="PinkQuote"
                    className="sm:mt-[-1em] mt-[-2em] sm:w-[3.230em] w-8"
                  />
                  <p className="lg:text-[1.5873015873em] md:text-[1.323em] leading-[1.333333] text-lg text-white">
                    Language King is perfect for new or struggling students,
                    offering expert feedback and guidance to help achieve
                    desired scores.
                  </p>
                </div>
              </div>
              {/* Desktop Form */}
              <div className="lg:w-[35.219em] md:w-[50%] w-full md:block hidden">
                <GetInTouch />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
