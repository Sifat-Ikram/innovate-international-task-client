"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Overview = () => {
  const [largeDivColor, setLargeDivColor] = useState("#0FA958");

  const handleDivClick = (color) => {
    setLargeDivColor(color);
  };

  return (
    <div className="relative mb-20">
      <div className="relative z-50 mb-20">
        <div>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>

        {/* Navigation buttons with icons aligned bottom right */}
        <div className="absolute bottom-0 right-0 flex mb-4 mr-4">
          <button className="swiper-button-prev bg-gray-200 p-3 rounded flex items-center">
            <FaArrowLeft size={20} />
          </button>
          <button className="swiper-button-next bg-gray-200 p-3 rounded flex items-center ml-2">
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="flex w-11/12 mx-auto max-md:flex-col justify-center items-center md:gap-14 lg:gap-20 relative z-20">
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
      <div className="absolute top-0 w-full z-10">
        <div className="bg-gradient-to-t from-[#6BE6A8] to-[#3C805D] pt-20 pb-40 px-10">
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
