import Image from "next/image";
import Link from "next/link";

const SignUpSection = () => {
  return (
    <div className="flex max-md:flex-col justify-center items-center gap-20 w-11/12 mx-auto mt-56 mb-20">
      <div className="w-3/5 h-[600px] flex max-md:flex-col justify-center items-center gap-20">
        <div className="flex flex-col gap-10 md:gap-20">
          <div className="relative">
            <div className="shadow flex justify-center items-center h-[295px] w-[285px] max-md:w-11/12 max-md:mx-auto rounded-3xl">
              <div className="h-[285px] md:w-[275px] items-center flex rounded-3xl bg-gradient-to-tr from-[#1300EE] to-[#1A0EA4] px-8">
                <h1 className="text-4xl font-medium text-white">Photo 1</h1>
              </div>
            </div>
            <div className="shadow h-20 w-20 rounded-full p-1 left-40 md:left-60 top-60 absolute">
              <Image
                src="/Ellipse 1.png"
                alt="Img-1"
                width={80}
                height={80}
                className=""
              />
            </div>
          </div>
          <div className="relative md:ml-16">
            <div className="h-[217px] w-[208px] items-center flex rounded-3xl bg-gradient-to-tr from-[#FA6F6F] to-[#A51D1D] px-8">
              <h1 className="text-4xl font-medium text-white">Photo 3</h1>
            </div>
            <div className="shadow h-20 w-20 rounded-full p-1 left-40 top-40 absolute">
              <Image
                src="/Ellipse 2.png"
                alt="Img-1"
                width={80}
                height={80}
                className=""
              />
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <div className="h-[217px] w-[208px] items-center flex rounded-3xl px-8 bg-[url('/Rectangle%203.png')] bg-cover bg-center">
              <h1 className="text-4xl font-medium">Photo 2</h1>
            </div>
            <div className="shadow h-20 w-20 rounded-full p-1 left-40 top-40 absolute">
              <Image
                src="/Ellipse 3.png"
                alt="Img-1"
                width={80}
                height={80}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 max-md:mt-20">
        <p className="text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore e.
        </p>
        <div className="flex justify-center items-center mt-10">
          <Link href={"/signUp"}>
            <button className="btn-outline hover:bg-primary text-primary hover:text-white py-2 px-5 border-2 border-primary border-solid hover:border-primary font-semibold text-lg rounded-full">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpSection;
