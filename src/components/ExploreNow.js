"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Image from "next/image";

const ExploreNow = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 mb-20">
      <div className="md:w-1/2 w-full">
        <p className="text-left text-lg md:text-2xl text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do
          eiusmod tempor incididunt ut labore et
          <br /> dolore magna aliqua. Ut enim ad minim veniam, quis
          <br /> nostrud exercitation ullamco laboris nisi ut aliquip
          <br /> ex ea commodo consequat. Duis aute irure dolor in
          <br />
          reprehenderit in qui officia deserunt mollit anim id
          <br /> est laborum.
        </p>
        <div className="flex justify-center items-center mt-10">
          <Link href={"/exploreNow"}>
            <button className="btn-outline hover:bg-primary text-primary hover:text-white py-2 px-5 border-2 border-primary border-solid hover:border-primary font-semibold text-lg rounded-full">
              Explore Now
            </button>
          </Link>
        </div>
      </div>
      <div className="flex-1 w-full">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          style={{ width: "100%", maxWidth: "395px", height: "395px" }}
        >
          <SwiperSlide className="rounded-md bg-[#1F3B68]">
            <div className="px-5 md:px-10 py-5 flex flex-col justify-between h-full">
              <div className="flex-grow">
                <h1 className="text-white font-bold italic text-2xl md:text-4xl">
                  Lorem ipsum
                </h1>
                <div className="flex gap-[2px] mt-2">
                  <Image
                    src="/Ellipse 12.png"
                    alt="Ellipse 12"
                    height={22}
                    width={22}
                  />
                  <p className="text-[10px] font-medium text-white">
                    Wade Warren
                  </p>
                </div>
              </div>
              <div className="w-full rounded-lg space-y-1 text-white backdrop-blur-lg bg-white/30 shadow-lg p-3 bottom-0">
                <h1 className="text-lg md:text-xl font-medium">
                  Lawrance Stroll
                </h1>
                <h1 className="text-sm font-medium">
                  Hegifueshho dhfsui foiehhsio
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-md bg-[#980FA7]">
            <div className="px-5 md:px-10 py-5 flex flex-col justify-between h-full">
              <div className="flex-grow">
                <h1 className="text-white font-bold italic text-2xl md:text-4xl">
                  Lorem ipsum
                </h1>
                <div className="flex gap-[2px] mt-2">
                  <Image
                    src="/Ellipse 12.png"
                    alt="Ellipse 12"
                    height={22}
                    width={22}
                  />
                  <p className="text-[10px] font-medium text-white">
                    Wade Warren
                  </p>
                </div>
              </div>
              <div className="w-full rounded-lg space-y-1 text-white backdrop-blur-lg bg-white/30 shadow-lg p-3 bottom-0">
                <h1 className="text-lg md:text-xl font-medium">
                  Lawrance Stroll
                </h1>
                <h1 className="text-sm font-medium">
                  Hegifueshho dhfsui foiehhsio
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-md bg-[#31096A]">
            <div className="px-5 md:px-10 py-5 flex flex-col justify-between h-full">
              <div className="flex-grow">
                <h1 className="text-white font-bold italic text-2xl md:text-4xl">
                  Lorem ipsum
                </h1>
                <div className="flex gap-[2px] mt-2">
                  <Image
                    src="/Ellipse 12.png"
                    alt="Ellipse 12"
                    height={22}
                    width={22}
                  />
                  <p className="text-[10px] font-medium text-white">
                    Wade Warren
                  </p>
                </div>
              </div>
              <div className="w-full rounded-lg space-y-1 text-white backdrop-blur-lg bg-white/30 shadow-lg p-3 bottom-0">
                <h1 className="text-lg md:text-xl font-medium">
                  Lawrance Stroll
                </h1>
                <h1 className="text-sm font-medium">
                  Hegifueshho dhfsui foiehhsio
                </h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ExploreNow;
