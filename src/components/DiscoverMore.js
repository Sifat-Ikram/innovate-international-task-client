import Image from "next/image";
import { IoFilterSharp } from "react-icons/io5";
import img1 from "../../public/Ellipse 9.png";
import img2 from "../../public/Ellipse 11.png";
import img3 from "../../public/Ellipse 8.png";
import img4 from "../../public/Ellipse 10.png";

const DiscoverMore = () => {
  return (
    <div className="w-11/12 mx-auto space-y-10 mb-10">
      <h1 className="text-4xl font-black">DISCOVER MORE</h1>
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-3">
          <button className="p-2 text-white bg-[#3F05D4] text-xs font-medium rounded-full">
            All Categories
          </button>
          <button className="py-1 px-3 hover:text-white text-sm font-semibold hover:bg-[#3F05D4] bg-base-200 rounded-full">
            Art
          </button>
          <button className="py-1 px-3 hover:text-white text-sm font-semibold hover:bg-[#3F05D4] bg-base-200 rounded-full">
            Celebrities
          </button>
          <button className="py-1 px-3 hover:text-white text-sm font-semibold hover:bg-[#3F05D4] bg-base-200 rounded-full">
            Gaming
          </button>
          <button className="py-1 px-3 hover:text-white text-sm font-semibold hover:bg-[#3F05D4] bg-base-200 rounded-full">
            Sport
          </button>
          <button className="py-1 px-3 hover:text-white text-sm font-semibold hover:bg-[#3F05D4] bg-base-200 rounded-full">
            Music
          </button>
        </div>
        <button className="py-2 px-3 hover:text-white text-sm flex justify-center items-center gap-3 font-semibold text-[#3F05D4] hover:bg-[#3F05D4] bg-base-200 rounded-full">
          <IoFilterSharp /> All Filters
        </button>
      </div>
      <div className="mt-10 grid grid-cols-4">
        <div className="h-[403px] w-[292px] rounded-2xl shadow-xl p-3 space-y-6">
          <div className="relative">
            <div className="h-[213px] w-[260px] rounded-2xl bg-gradient-to-br from-[#DED4F8] to-[#BE92FB]"></div>
            <div className="flex items-center ml-2 absolute -mt-5">
              <Image
                src={img1}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-50"
              />
              <Image
                src={img2}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-40 -ml-3"
              />
              <Image
                src={img3}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-30 -ml-3"
              />
              <Image
                src={img4}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-20 -ml-3"
              />
            </div>
          </div>
          <div className="ml-2 space-y-6">
            <h1 className="text-[#9747FF] text-xl font-semibold">Art stuff</h1>
            <div className="flex justify-between items-center">
              <h1 className="text-xs font-light text-[#5D06CD]">598 TK</h1>
              <h1 className="text-xs font-light">1 of 09</h1>
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-gradient-to-br rounded-full py-4 px-5 from-[#9747FF] to-[#651BC6] text-white text-xs font-medium">
                DSVBD
              </button>
              <button className="bg-gradient-to-br rounded-full py-4 px-5 from-[#26DBDB] to-[#A0FCD9] text-black text-xs font-medium">
                DSVBD
              </button>
            </div>
          </div>
        </div>
        <div className="h-[403px] w-[292px] rounded-2xl shadow-xl p-3 space-y-6">
          <div className="relative">
            <div className="h-[213px] w-[260px] rounded-2xl bg-gradient-to-br from-[#0FA958] to-[#94FFE6]"></div>
            <div className="flex items-center ml-2 absolute -mt-5">
              <Image
                src={img1}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-50"
              />
              <Image
                src={img2}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-40 -ml-3"
              />
              <Image
                src={img3}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-30 -ml-3"
              />
              <Image
                src={img4}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-20 -ml-3"
              />
            </div>
          </div>
          <div className="ml-2 space-y-6">
            <h1 className="text-[#047439] text-xl font-semibold">ABCD</h1>
            <div className="flex justify-between items-center">
              <h1 className="text-xs font-light text-[#005528]">777 TK</h1>
              <h1 className="text-xs font-light text-[#005528]">1 hr 19</h1>
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-gradient-to-br rounded-full py-4 px-5 from-[#9747FF] to-[#651BC6] text-white text-xs font-medium">
                DSVBD
              </button>
              <button className="bg-gradient-to-br rounded-full py-4 px-5 from-[#6D8BB4] to-[#016EFF] text-white text-xs font-medium">
                DSVBD
              </button>
            </div>
          </div>
        </div>
        <div className="h-[403px] w-[292px] rounded-2xl shadow-xl p-3 space-y-6">
          <div className="relative">
            <div className="h-[213px] w-[260px] rounded-2xl bg-gradient-to-br from-[#2768BF] to-[#E6E6E6]"></div>
            <div className="flex items-center ml-2 absolute -mt-5">
              <Image
                src={img1}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-50"
              />
              <Image
                src={img2}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-40 -ml-3"
              />
              <Image
                src={img3}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-30 -ml-3"
              />
              <Image
                src={img4}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-20 -ml-3"
              />
            </div>
          </div>
          <div className="ml-2 space-y-6">
            <h1 className="text-xl font-semibold">EFGH</h1>
            <div className="flex justify-between items-center">
              <h1 className="text-xs font-light">58 TK</h1>
              <h1 className="text-xs font-light">1 of 64</h1>
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-gradient-to-br rounded-full py-4 px-5 from-[#26DBDB] to-[#A0FCD9] text-black text-xs font-medium">
                DSVBD
              </button>
              <button className="bg-gradient-to-br rounded-full py-4 px-5 from-[#9747FF] to-[#E76666] text-black text-xs font-medium">
                DSVBD
              </button>
            </div>
          </div>
        </div>
        <div className="h-[403px] w-[292px] rounded-2xl shadow-xl p-3 space-y-6">
          <div className="relative">
            <div className="h-[213px] w-[260px] rounded-2xl bg-gradient-to-br from-[#4C2F72] to-[#BE92FB]"></div>
            <div className="flex items-center ml-2 absolute -mt-5">
              <Image
                src={img1}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-50"
              />
              <Image
                src={img2}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-40 -ml-3"
              />
              <Image
                src={img3}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-30 -ml-3"
              />
              <Image
                src={img4}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-20 -ml-3"
              />
            </div>
          </div>
          <div className="ml-2 space-y-6">
            <h1 className="text-xl font-semibold">XYZ</h1>
            <div className="flex justify-between items-center">
              <h1 className="text-xs font-light">0 TK</h1>
              <h1 className="text-xs font-light">1 of 06</h1>
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-gradient-to-br rounded-full py-4 px-5 from-[#26DBDB] to-[#A0FCD9] text-black text-xs font-medium">
                DSVBD
              </button>
              <button className="bg-gradient-to-br rounded-full py-4 px-5 from-[#9747FF] to-[#E76666] text-black text-xs font-medium">
                DSVBD
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-52 grid grid-cols-4">
        <div className="h-[403px] w-[292px] rounded-2xl shadow-xl p-3 space-y-6">
          <div className="relative">
            <div className="h-[213px] w-[260px] rounded-2xl bg-gradient-to-br from-[#DED4F8] to-[#BE92FB]"></div>
            <div className="flex items-center ml-2 absolute -mt-5">
              <Image
                src={img1}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-50"
              />
              <Image
                src={img2}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-40 -ml-3"
              />
              <Image
                src={img3}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-30 -ml-3"
              />
              <Image
                src={img4}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-20 -ml-3"
              />
            </div>
          </div>
          <div className="ml-2 space-y-6">
            <h1 className="text-[#9747FF] text-xl font-semibold">Art stuff</h1>
            <div className="flex justify-between items-center">
              <h1 className="text-xs font-light text-[#5D06CD]">598 TK</h1>
              <h1 className="text-xs font-light">1 of 09</h1>
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-gradient-to-br rounded-full py-4 px-5 from-[#9747FF] to-[#651BC6] text-white text-xs font-medium">
                DSVBD
              </button>
              <button className="bg-gradient-to-br rounded-full py-4 px-5 from-[#26DBDB] to-[#A0FCD9] text-black text-xs font-medium">
                DSVBD
              </button>
            </div>
          </div>
        </div>
        <div className="h-[403px] w-[292px] rounded-2xl shadow-xl p-3 space-y-6">
          <div className="relative">
            <div className="h-[213px] w-[260px] rounded-2xl bg-gradient-to-br from-[#0FA958] to-[#94FFE6]"></div>
            <div className="flex items-center ml-2 absolute -mt-5">
              <Image
                src={img1}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-50"
              />
              <Image
                src={img2}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-40 -ml-3"
              />
              <Image
                src={img3}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-30 -ml-3"
              />
              <Image
                src={img4}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-20 -ml-3"
              />
            </div>
          </div>
          <div className="ml-2 space-y-6">
            <h1 className="text-[#047439] text-xl font-semibold">ABCD</h1>
            <div className="flex justify-between items-center">
              <h1 className="text-xs font-light text-[#005528]">777 TK</h1>
              <h1 className="text-xs font-light text-[#005528]">1 hr 19</h1>
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-gradient-to-br rounded-full py-4 px-5 from-[#9747FF] to-[#651BC6] text-white text-xs font-medium">
                DSVBD
              </button>
              <button className="bg-gradient-to-br rounded-full py-4 px-5 from-[#6D8BB4] to-[#016EFF] text-white text-xs font-medium">
                DSVBD
              </button>
            </div>
          </div>
        </div>
        <div className="h-[403px] w-[292px] rounded-2xl shadow-xl p-3 space-y-6">
          <div className="relative">
            <div className="h-[213px] w-[260px] rounded-2xl bg-gradient-to-br from-[#2768BF] to-[#E6E6E6]"></div>
            <div className="flex items-center ml-2 absolute -mt-5">
              <Image
                src={img1}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-50"
              />
              <Image
                src={img2}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-40 -ml-3"
              />
              <Image
                src={img3}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-30 -ml-3"
              />
              <Image
                src={img4}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-20 -ml-3"
              />
            </div>
          </div>
          <div className="ml-2 space-y-6">
            <h1 className="text-xl font-semibold">EFGH</h1>
            <div className="flex justify-between items-center">
              <h1 className="text-xs font-light">58 TK</h1>
              <h1 className="text-xs font-light">1 of 64</h1>
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-gradient-to-br rounded-full py-4 px-5 from-[#26DBDB] to-[#A0FCD9] text-black text-xs font-medium">
                DSVBD
              </button>
              <button className="bg-gradient-to-br rounded-full py-4 px-5 from-[#9747FF] to-[#E76666] text-black text-xs font-medium">
                DSVBD
              </button>
            </div>
          </div>
        </div>
        <div className="h-[403px] w-[292px] rounded-2xl shadow-xl p-3 space-y-6">
          <div className="relative">
            <div className="h-[213px] w-[260px] rounded-2xl bg-gradient-to-br from-[#4C2F72] to-[#BE92FB]"></div>
            <div className="flex items-center ml-2 absolute -mt-5">
              <Image
                src={img1}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-50"
              />
              <Image
                src={img2}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-40 -ml-3"
              />
              <Image
                src={img3}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-30 -ml-3"
              />
              <Image
                src={img4}
                alt="Ellipse"
                height={20}
                width={20}
                className="h-9 w-9 z-20 -ml-3"
              />
            </div>
          </div>
          <div className="ml-2 space-y-6">
            <h1 className="text-xl font-semibold">XYZ</h1>
            <div className="flex justify-between items-center">
              <h1 className="text-xs font-light">0 TK</h1>
              <h1 className="text-xs font-light">1 of 06</h1>
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-gradient-to-br rounded-full py-4 px-5 from-[#26DBDB] to-[#A0FCD9] text-black text-xs font-medium">
                DSVBD
              </button>
              <button className="bg-gradient-to-br rounded-full py-4 px-5 from-[#9747FF] to-[#E76666] text-black text-xs font-medium">
                DSVBD
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverMore;
