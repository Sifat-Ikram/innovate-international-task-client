const Banner = () => {
  return (
    <div className="relative">
      <div className="mt-24 flex w-11/12 mx-auto justify-between items-center gap-8 relative z-50">
        <div className="w-[260px] hover:w-[300px] h-[260px] hover:h-[300px] transition-all duration-300 ease-in-out cursor-pointer bg-red-800"></div>
        <div className="w-[260px] hover:w-[300px] h-[260px] hover:h-[300px] transition-all duration-300 ease-in-out cursor-pointer bg-blue-600"></div>
        <div className="w-[260px] hover:w-[300px] h-[260px] hover:h-[300px] transition-all duration-300 ease-in-out cursor-pointer bg-[#E76666]"></div>
        <div className="w-[260px] hover:w-[300px] h-[260px] hover:h-[300px] transition-all duration-300 ease-in-out cursor-pointer bg-[#A0FCD9]"></div>
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
