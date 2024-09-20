const Banner = () => {
  return (
    <div className="relative z-10">
      <div className="mt-24 flex flex-wrap w-11/12 mx-auto justify-center md:justify-between items-center gap-8 relative z-50">
        <div className="w-[180px] h-[180px] md:w-[260px] md:h-[260px] hover:w-[200px] md:hover:w-[300px] hover:h-[200px] md:hover:h-[300px] transition-all duration-300 ease-in-out cursor-pointer bg-red-800"></div>
        <div className="w-[180px] h-[180px] md:w-[260px] md:h-[260px] hover:w-[200px] md:hover:w-[300px] hover:h-[200px] md:hover:h-[300px] transition-all duration-300 ease-in-out cursor-pointer bg-blue-600"></div>
        <div className="w-[180px] h-[180px] md:w-[260px] md:h-[260px] hover:w-[200px] md:hover:w-[300px] hover:h-[200px] md:hover:h-[300px] transition-all duration-300 ease-in-out cursor-pointer bg-[#E76666]"></div>
        <div className="w-[180px] h-[180px] md:w-[260px] md:h-[260px] hover:w-[200px] md:hover:w-[300px] hover:h-[200px] md:hover:h-[300px] transition-all duration-300 ease-in-out cursor-pointer bg-[#A0FCD9]"></div>
      </div>
      <div
        className="w-full bg-[#363636] rounded-b-full absolute top-0 -mt-24 z-10"
        style={{
          height: "200px",
          borderBottomLeftRadius: "100%",
          borderBottomRightRadius: "100%",
        }}
      ></div>
    </div>
  );
};

export default Banner;
