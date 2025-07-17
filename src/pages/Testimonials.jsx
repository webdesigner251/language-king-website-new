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
      <section className="md:pt-[220px] pt-[180px] md:pb-[77px] pb-8 mt-[-120px]">
        <div className="custom-container mx-auto py-0 px-4 sm:px-[32px] w-full relative z-10">
          <div className="grid items-start lg:grid-cols-2 xl:gap-[120px] gap-[90px]">
            <div>
              <div className="2xl:max-w-[590px] xl:max-w-[525px] lg:max-w-[440px]">
                <h1 className="font-inter font-bold 2xl:text-[62px] xl:text-[55px] lg:text-[46px] md:text-[42px] text-[38px] leading-[normal] inline-block 2xl:mt-2 mt-0 text-white">
                  Why Students Love Learning With Us
                </h1>

                <div className="lg:hidden aspect-16/9 block w-full py-[50px]">
                  <VideoPlayer
                    videoSrc={Video1}
                    thumbnail={PlaceholerImage}
                    wrapperClassName="rounded-[10px] h-auto"
                    videoClassName="rounded-[10px] h-auto"
                    thumbnailClassName="rounded-[10px] h-auto"
                  />
                </div>
                <hr className="border-1 border-y-[#252525] my-[40px] lg:block hidden border-max-width" />
              </div>
              <div className="relative ps-[30px] text-[#B7B7B7] md:text-lg sm:text-base text-sm lg:max-w-[600px]">
                <img src={QuoteIcon} alt="QuoteIcon" className=" -ml-7" />
                When I started my journey I really thought that it would be
                impossible for me to clear he test due to my background.
                xxxxxxxxxxxxx
              </div>
              <div className="flex sm:gap-5 gap-4 items-center mt-[50px]">
                <img
                  src={Mainavatar}
                  alt="Mainavatar"
                  className="sm:w-[61px] w-[52px] rounded-[8px]"
                />
                <div className="sm:text-lg text-base">
                  <span className="text-white me-[9px]">Natalia &#9679;</span>
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
                wrapperClassName="rounded-[10px] h-full"
                videoClassName="rounded-[10px] h-full"
                thumbnailClassName="rounded-[10px] h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sm:py-[30px] pt-[25px]">
        <div className="custom-container mx-auto py-0 px-4 sm:px-[32px] w-full relative z-10">
          <div className="flex gap-4 justify-between items-center border-b border-[#252525] py-[16px]">
            <h2 className="sm:text-3xl text-[22px] leading-normal font-bold text-white text-left">
              PTE Hall of Fame
            </h2>
            <div className="flex gap-3 justify-end items-center  relative">
              <button className="custom-prev w-10 h-10 p-[15px] cursor-pointer flex items-center justify-center bg-[#1A1A1A] hover:bg-white/10 transition-all duration-300 ease-in-out border-none rounded">
                <svg
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
              <button className="custom-next w-10 h-10 p-[15px] cursor-pointer flex items-center justify-center bg-[#1A1A1A] hover:bg-white/10 transition-all duration-300 ease-in-out border-none rounded">
                <svg
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
          <div className="sm:py-[28px] pt-[24px]">
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
                      <div className="rounded-[10px] w-full aspect-3/2 h-auto object-cover object-center relative z-10">
                        <VideoPlayer
                          videoSrc={item.video}
                          thumbnail={item.image}
                          wrapperClassName="rounded-[10px] h-full"
                          videoClassName="rounded-[10px] object-contain h-full"
                          thumbnailClassName="rounded-[10px] h-full"
                        />
                      </div>
                      {/* <div className="absolute inset-0 bg-black opacity-35 rounded-[10px]"></div> */}
                    </div>
                    <p className="truncate text-white md:text-xl sm:text-lg text-base my-2">
                      {item.title}
                    </p>
                    <div className="flex sm:gap-5 gap-4 sm:items-end items-center mt-[20px]">
                      <div className="relative">
                        <img
                          src={item.flag}
                          alt="flag"
                          className="sm:w-5 w-4 sm:h-5 h-4 rounded-sm absolute -top-1 -right-1 z-0"
                        />
                        <img
                          src={item.avatar}
                          alt="avatar"
                          className="sm:w-[61px] w-[52px] rounded-[8px] border-2 border-[#D66D11]"
                        />
                      </div>
                      <div className="text-base sm:text-center text-start flex flex-col">
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
        <div className="custom-container mx-auto py-0 px-4 sm:px-[32px] w-full relative z-10">
          <div className="flex gap-4 justify-between items-center border-b border-[#252525] py-[16px]">
            <h2 className="sm:text-3xl text-[22px] leading-normal font-bold text-white text-left">
              NAATI CCL Results
            </h2>
            <div className="flex gap-3 justify-end items-center  relative">
              <button className="custom-prev-new w-10 h-10 p-[15px] cursor-pointer flex items-center justify-center bg-[#1A1A1A] hover:bg-white/10 transition-all duration-300 ease-in-out border-none rounded">
                <svg
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
              <button className="custom-next-new w-10 h-10 p-[15px] cursor-pointer flex items-center justify-center bg-[#1A1A1A] hover:bg-white/10 transition-all duration-300 ease-in-out border-none rounded">
                <svg
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
          <div className="sm:py-[28px] pt-[24px]">
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
                      <div className="rounded-[10px] w-full aspect-3/2 h-auto object-cover object-center relative z-10">
                        <VideoPlayer
                          videoSrc={item.video}
                          thumbnail={item.image}
                          wrapperClassName="rounded-[10px] h-full"
                          videoClassName="rounded-[10px] object-contain h-full"
                          thumbnailClassName="rounded-[10px] h-full"
                        />
                      </div>
                    </div>
                    <p className="truncate text-white md:text-xl sm:text-lg text-base my-2">
                      {item.title}
                    </p>
                    <div className="flex sm:gap-5 gap-4 sm:items-end items-center mt-[20px]">
                      <div className="relative">
                        <img
                          src={item.flag}
                          alt="flag"
                          className="sm:w-5 w-4 sm:h-5 h-4 rounded-sm absolute -top-1 -right-1 z-0"
                        />
                        <img
                          src={item.avatar}
                          alt="avatar"
                          className="sm:w-[61px] w-[52px] rounded-[8px] border-2 border-[#D66D11]"
                        />
                      </div>
                      <div className="text-base sm:text-center text-start flex flex-col">
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

      <section className="pt-[30px] sm:pb-0 pb-[30px]">
        <div className="custom-container mx-auto  px-4 sm:px-[32px] w-full relative z-10">
          <div className="sm:border-y border-t border-[#252525] md:pt-[100px] sm:pt-[70px] pt-[60px] sm:pb-[54px]">
            <div className="flex md:flex-nowrap justify-between flex-wrap lg:gap-[50px] gap-[30px]">
              <div className="2xl:w-[60%] lg:w-[55%] md:w-[50%] w-full">
                <h2 class="lg:text-[52px] sm:text-[42px] text-[32px] leading-[1.2] -mt-[10px] font-bold text-white text-left lg:max-w-full md:max-w-[340px]">
                  Get in touch with us
                </h2>
                <p className="relative text-[#B7B7B7] text-lg max-w-[600px] my-3">
                  Contact us on xxxxxxxxx/ xxxxxxxxx
                </p>
                {/* Mobile Form */}
                <div className="md:hidden block pt-3">
                  <GetInTouch />
                </div>
                <div className="lg:my-[60px] my-[50px]">
                  <h3 className="text-white font-bold md:text-2xl sm:text-xl text-lg">
                    Why Language King?
                  </h3>
                  <ul className="mt-5 sm:ps-5 gap-5 max-w-[690px]">
                    <li className="flex items-start sm:leading-[1.2] leading-[1.4] sm:text-base text-sm text-[#ACACAC] sm:gap-7 gap-4 py-3">
                      <img
                        src={CheckmarkGray}
                        alt="CheckmarkGray"
                        className="w-4 pt-1"
                      />
                      Learn from 8 each tutors. The best way to crack any exam
                      is to learn from the person who has cracked it.
                    </li>
                    <li className="flex items-start sm:leading-[1.2] leading-[1.4] sm:text-base text-sm text-[#ACACAC] sm:gap-7 gap-4 py-3">
                      <img
                        src={CheckmarkGray}
                        alt="CheckmarkGray"
                        className="w-4 pt-1"
                      />
                      Stay up-to-date with changes in exam, and learn the latest
                      strategies from carefully designed video lectures by
                      Abhishek, PTE & NAATI Master Trainer.
                    </li>
                    <li className="flex items-start sm:leading-[1.2] leading-[1.4] sm:text-base text-sm text-[#ACACAC] sm:gap-7 gap-4 py-3">
                      <img
                        src={CheckmarkGray}
                        alt="CheckmarkGray"
                        className="w-4 pt-1"
                      />
                      1-to-1 feedback from experts & personalized timetable to
                      fit your busy schedule, learn from the comfort of your
                      home while sipping coffee.
                    </li>
                    <li className="flex items-start sm:leading-[1.2] leading-[1.4] sm:text-base text-sm text-[#ACACAC] sm:gap-7 gap-4 py-3">
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
                <div className="flex sm:gap-5 gap-3 max-w-[700px]">
                  <img
                    src={PinkQuote}
                    alt="PinkQuote"
                    className="-mt-[80px] sm:w-[50px] w-8"
                  />
                  <p className="lg:text-2xl sm:text-xl text-base text-white">
                    Language King is perfect for new or struggling students,
                    offering expert feedback and guidance to help achieve
                    desired scores.
                  </p>
                </div>
              </div>
              {/* Desktop Form */}
              <div className="lg:w-[532px] md:w-[50%] w-full md:block hidden">
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
