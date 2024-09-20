"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Overview = () => {
  const [largeDivColor, setLargeDivColor] = useState("#0FA958");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handleDivClick = (color) => {
    setLargeDivColor(color);
  };

  return (
    <div className="relative mb-20">
      <div className="relative z-50">
        <div className="mb-52">
          <Swiper
            slidesPerView={1} // Change to 1 for mobile
            breakpoints={{
              // Add breakpoints for different screen sizes
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            centeredSlides={true}
            spaceBetween={30}
            onSlideChange={handleSlideChange}
            onInit={(swiper) => {
              setActiveIndex(swiper.activeIndex);
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {[
              "#FF9A9A",
              "#CFAAFF",
              "#A0FCD9",
              "#26DBDB",
              "#B126DB",
              "#2E4E3E",
              "#DB4126",
            ].map((bgColor, index) => (
              <SwiperSlide key={index}>
                <div
                  className="mx-5 sm:mx-10 transition-all duration-500"
                  style={{
                    height: index === activeIndex ? "300px" : "250px", // Adjust heights for small screens
                    width: index === activeIndex ? "200px" : "180px", // Adjust widths for small screens
                    backgroundColor: bgColor,
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="absolute bottom-[-30px] right-5 md:right-20 flex z-50">
          <button
            ref={prevRef}
            aria-label="Previous Slide"
            className={`custom-prev flex items-center justify-center p-2 rounded-full ${
              isBeginning
                ? "bg-transparent text-transparent"
                : "bg-black text-[#6BE6A8]"
            }`}
            disabled={isBeginning}
          >
            <IoIosArrowBack />
          </button>
          <button
            ref={nextRef}
            aria-label="Next Slide"
            className={`custom-next flex items-center justify-center ml-4 p-2 rounded-full text-[#6BE6A8] ${
              isEnd
                ? "bg-transparent text-transparent"
                : "bg-black text-[#6BE6A8]"
            }`}
            disabled={isEnd}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-11/12 mx-auto mt-[370px] md:gap-14 lg:gap-20 justify-center items-center relative z-20">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-5">
          <div className="flex justify-center items-center gap-5">
            <div
              className="rounded-3xl h-[300px] md:h-[400px] w-[250px] md:w-[400px]"
              style={{ backgroundColor: largeDivColor }}
            ></div>
            <div className="flex flex-col justify-center items-center gap-5">
              <div
                className="bg-[#0FA958] rounded-3xl h-[70px] w-[70px] md:h-[120px] md:w-[120px]"
                onClick={() => handleDivClick("#0FA958")}
              ></div>
              <div
                className="bg-[#BE92FB] rounded-3xl h-[70px] w-[70px] md:h-[120px] md:w-[120px]"
                onClick={() => handleDivClick("#BE92FB")}
              ></div>
              <div
                className="bg-[#FFACAC] rounded-3xl h-[70px] w-[70px] md:h-[120px] md:w-[120px]"
                onClick={() => handleDivClick("#FFACAC")}
              ></div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <div
              className="bg-[#2E4E3E] rounded-3xl h-[70px] w-[70px] md:h-[120px] md:w-[120px]"
              onClick={() => handleDivClick("#2E4E3E")}
            ></div>
            <div
              className="bg-[#26DBDB] rounded-3xl h-[70px] w-[70px] md:h-[120px] md:w-[120px]"
              onClick={() => handleDivClick("#26DBDB")}
            ></div>
            <div
              className="bg-[#B126DB] rounded-3xl h-[70px] w-[70px] md:h-[120px] md:w-[120px]"
              onClick={() => handleDivClick("#B126DB")}
            ></div>
            <div
              className="bg-[#DB4126] rounded-3xl h-[70px] w-[70px] md:h-[120px] md:w-[120px]"
              onClick={() => handleDivClick("#DB4126")}
            ></div>
          </div>
        </div>
        <div className="w-full md:flex-1 mt-10 md:mt-0">
          <h1 className="text-[32px] md:text-[40px] font-bold text-black text-center md:text-left">
            Collection Featured
          </h1>
          <p className="text-lg md:text-2xl text-black text-left">
            Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do
            eiusmod tet ut labore et dolore magna aliqrit in vol uptate velit
            esse cillumsunt in culpa
          </p>
        </div>
      </div>
      <div className="absolute top-48 w-full z-10">
        <div className="bg-gradient-to-t from-[#6BE6A8] to-[#3C805D] pt-24 pb-40 px-5 md:px-20">
          <h1 className="text-[32px] md:text-[40px] font-bold">Overview</h1>
          <p className="text-base md:text-xl text-black">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor
            <br /> incididunt ut labore et dolore magna aliqua.
            <br /> Ut enim ad minim veniam, quis nostrud
            <br /> exercitation ullamco laboris nisi ut aliquip ex
            <br /> ea commodo consequat.
          </p>
        </div>
        <div
          className="w-full bg-[#6BE6A8]"
          style={{
            height: "200px",
            borderBottomLeftRadius: "50% 80px",
            borderBottomRightRadius: "50% 80px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Overview;
