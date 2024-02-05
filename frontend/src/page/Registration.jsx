import { Link } from "react-router-dom";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { Blocks } from "react-loader-spinner";

const Registration = () => {

  return (
    <div className='bg-[url("/bg.svg")] bg-cover bg-center h-screen flex items-center px-3'>
      <div className="h-[90%] w-[1320px] mx-auto flex justify-center bg-white bg-opacity-5 rounded-xl shadow-md backdrop-blur-md overflow-hidden">
        <div className="w-1/2 hidden md:block bg-[url('/rgbg.webp')] bg-cover bg-center h-full"></div>
        <div className="md:w-1/2  h-full flex flex-col justify-center md:items-end items-center md:pr-16 lg:pr-40">
          <h1 className="md:text-3xl text-2xl text-center md:text-right font-bold text-white">
            Get started with easily register
          </h1>
          <p className="text-base text-[#ddd] mt-1 mb-6">
            Free register and you can enjoy it
          </p>
          <div className="flex flex-col gap-y-6">
            <div className="relative">
              <fieldset className="border border-white/75 pb-2 px-2">
                <legend className="px-2 text-xs text-white/70">
                  Email Address
                </legend>
                <input
                  className="bg-transparent ring-0 border-0 outline-none px-2 text-white"
                  type="email"
                />
              </fieldset>
              <p className="absolute bottom-[-2px] right-0 translate-y-full text-xs text-red-500 font-semibold">
                error show here
              </p>
            </div>
            <div className="relative">
              <fieldset className="border border-white/75 pb-2 px-2">
                <legend className="px-2 text-xs text-white/70">
                  Full name
                </legend>
                <input
                  className="bg-transparent ring-0 border-0 outline-none px-2 text-white"
                  type="text"
                />
              </fieldset>
              <p className="absolute bottom-[-2px] right-0 translate-y-full text-xs text-red-500 font-semibold">
                error show here
              </p>
            </div>
            <div className="relative">
              <fieldset className="border border-white/75 pb-2 px-2 relative">
                <legend className="px-2 text-xs text-white/70">Password</legend>
                <input
                  className="bg-transparent ring-0 border-0 outline-none px-2 text-white"
                  type="password"
                />

              
                  <IoMdEye
                    onClick={() => setPasswordShow(!passwordShow)}
                    className="absolute right-4 top-[5px] text-white/60 cursor-pointer"
                  />
               
                  <IoMdEyeOff
                    onClick={() => setPasswordShow(!passwordShow)}
                    className="absolute right-4 top-[5px] text-white/60 cursor-pointer"
                  />
             
              </fieldset>
              <p className="absolute bottom-[-2px] right-0 translate-y-full text-xs text-red-500 font-semibold">
                passworderr
              </p>
            </div>
  

              <input
                className="py-3 bg-blue-400  w-full mt-5 mb-7 rounded cursor-pointer"
                type="button"
                value="Sign up"
              />
   
          </div>
          <p className="text-base text-white/70">
            Already have an account ?{" "}
            <span className="text-red-500 cursor-pointer">
              <Link to="/">Sign in</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
