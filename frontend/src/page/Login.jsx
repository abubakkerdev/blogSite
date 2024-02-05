import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='bg-[url("/bg.svg")] bg-cover bg-center h-screen flex items-center px-3'>
      <div className="h-[90%] w-[1320px] md:px-8 mx-auto flex justify-center bg-white bg-opacity-5 rounded-xl shadow-md backdrop-blur-md overflow-hidden">
        <div className="flex flex-col items-center justify-center h-full md:w-1/2 md:items-start lg:pl-40">
          <h1 className="text-xl font-bold text-white mb lg:text-3xl mb-3">
            Login to your account!
          </h1>

          <div className="flex flex-col">
            <fieldset className="px-2 pb-2 mb-5 border border-white/75">
              <legend className="px-2 text-xs text-white/70">
                Email Address
              </legend>
              <input
                className="px-2 text-white bg-transparent border-0 outline-none ring-0"
                type="email"
                placeholder="Youraddres@email.com"
              />
            </fieldset>

            <fieldset className="px-2 pb-2 border border-white/75">
              <legend className="px-2 text-xs text-white/70">Password</legend>
              <input
                className="px-2 text-white bg-transparent border-0 outline-none ring-0"
                type="password"
                placeholder="Enter your password"
              />
            </fieldset>
            <Link
              className="w-full py-2 mt-5 text-center transition-all duration-200 bg-blue-300 rounded cursor-pointer hover:bg-blue-600 hover:text-white mb-7"
              to="/home"
            >
              Login to Continue
            </Link>
          </div>
          <p className="text-base text-white/70">
            Don’t have an account ?{" "}
            <span className="text-red-500 cursor-pointer">
              <Link to="/registration">Sign up</Link>
            </span>
          </p>
        </div>
        <div className="w-1/2 hidden md:block bg-[url('/rgbg.png')] bg-auto md:bg-contain bg-no-repeat bg-left h-full"></div>
      </div>
    </div>
  );
};

export default Login;
