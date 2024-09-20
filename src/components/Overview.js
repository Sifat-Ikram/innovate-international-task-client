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
            slidesPerView={4}
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
                  className="mx-10 transition-all duration-500"
                  style={{
                    height: index === activeIndex ? "400px" : "304px",
                    width: index === activeIndex ? "250px" : "234px",
                    backgroundColor: bgColor,
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="absolute bottom-[-30px] right-20 flex z-50">
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

      <div className="flex w-11/12 mx-auto max-md:flex-col mt-[370px] justify-center items-center md:gap-14 lg:gap-20 relative z-20">
        <div className="w-1/2 flex flex-col justify-center items-center gap-5">
          <div className="flex justify-center items-center gap-5">
            <div
              className="rounded-3xl h-[408px] w-[408px]"
              style={{ backgroundColor: largeDivColor }}
            ></div>
            <div className="flex flex-col justify-center items-center gap-5">
              <div
                className="bg-[#0FA958] rounded-3xl h-[120px] w-[120px]"
                onClick={() => handleDivClick("#0FA958")}
              ></div>
              <div
                className="bg-[#BE92FB] rounded-3xl h-[120px] w-[120px]"
                onClick={() => handleDivClick("#BE92FB")}
              ></div>
              <div
                className="bg-[#FFACAC] rounded-3xl h-[120px] w-[120px]"
                onClick={() => handleDivClick("#FFACAC")}
              ></div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div
              className="bg-[#2E4E3E] rounded-3xl h-[120px] w-[120px]"
              onClick={() => handleDivClick("#2E4E3E")}
            ></div>
            <div
              className="bg-[#26DBDB] rounded-3xl h-[120px] w-[120px]"
              onClick={() => handleDivClick("#26DBDB")}
            ></div>
            <div
              className="bg-[#B126DB] rounded-3xl h-[120px] w-[120px]"
              onClick={() => handleDivClick("#B126DB")}
            ></div>
            <div
              className="bg-[#DB4126] rounded-3xl h-[120px] w-[120px]"
              onClick={() => handleDivClick("#DB4126")}
            ></div>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-[40px] font-bold text-black text-center">
            Collection Featured
          </h1>
          <p className="text-black text-2xl text-left">
            Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do
            eiusmod tet ut labore et dolore magna aliqrit in vol uptate velit
            esse cillumsunt in culpa
          </p>
        </div>
      </div>
      <div className="absolute top-56 w-full z-10">
        <div className="bg-gradient-to-t from-[#6BE6A8] to-[#3C805D] pt-24 pb-40 px-20">
          <h1 className="text-[40px] font-bold">Overview</h1>
          <p className="text-xl text-black">
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
            height: "300px",
            borderBottomLeftRadius: "50% 100px",
            borderBottomRightRadius: "50% 100px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Overview;
