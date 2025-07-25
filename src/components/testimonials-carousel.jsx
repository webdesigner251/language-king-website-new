import VideoPlayer from "./videoPlayer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const TestimonialCarousel = ({ testimonials }) => {
  return (
    <Swiper
      spaceBetween={12}
      slidesPerView={1}
      loop={true}
      pagination={true}
      modules={[Pagination]}
      breakpoints={{
        767: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
    >
      {testimonials.map((item, i) => (
        <SwiperSlide className="h-auto-swiper" key={i}>
          <div className="flex flex-col justify-between h-full sm:gap-2 gap-y-[3.3068783069em]">
            <div>
              {/* <div className="aspect-3/2 relative w-full h-auto overflow-hidden rounded-[10px] mb-[24px]">
                <VideoPlayer
                  videoSrc={item.reviewImg}
                  thumbnail={item.thumbnail}
                  wrapperClassName="rounded-[10px] h-auto"
                  videoClassName="rounded-[10px] object-contain"
                  thumbnailClassName="rounded-[10px] h-auto"
                />
              </div> */}

              <div className="rounded-[10px] w-full aspect-3/2 object-cover object-center relative z-10 mb-2">
                <VideoPlayer
                  videoSrc={item.reviewImg}
                  thumbnail={item.thumbnail}
                  wrapperClassName="rounded-[10px] h-full"
                  videoClassName="rounded-[10px] object-contain h-full"
                  thumbnailClassName="rounded-[10px] h-full"
                />
              </div>
              <p
                className="text-paraGray font-light sm:text-[1.1904761905em] text-base leading-normal md:mb-[40px] sm:mb-[30px] mb-8"
                dangerouslySetInnerHTML={{ __html: item.text }}
              ></p>
            </div>
            <div className="2xl:pt-[64px] md:pt-[52px] sm:pt-[42px] pt-8 border-t border-[#3D3D3D] flex flex-col 2xl:gap-y-[58px] md:gap-y-[42px] gap-7">
              <div className="flex items-center 2xl:gap-[33px] gap-[20px]">
                <img
                  src={item.avatar}
                  alt="Avatar"
                  className="lg:w-[4.7619047619em] lg:h-[4.7619047619em] w-[62px] h-[62px] rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-white/60 2xl:text-[1.5625em] lg:text-[1.455026455em] text-[22px] 2xl:mb-2 mb-1">
                    {item.name}
                  </h4>
                  <span className="font-normal text-[#D8D8D8] 2xl:text-[1.171875em]  lg:text-base text-base">
                    {item.subtitle}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center 2xl:text-base text-sm font-light text-white gap-3">
                  <img
                    src={item.sourceIcon}
                    alt="source"
                    className="w-[1.455026455em]"
                  />{" "}
                  {item.time}
                </div>
                <div className="flex">
                  {[...Array(item.rating)].map((_, idx) => (
                    <img
                      src={item.starIcon}
                      alt="star"
                      key={idx}
                      className="sm:w-[1.455026455em] w-5 h-auto me-1"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialCarousel;
