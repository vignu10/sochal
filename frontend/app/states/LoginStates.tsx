import logo from "../assets/logo.svg"
import Image from "next/image";
const LoginState = () =>  {
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-right px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image  className="mx-auto h-[120px] w-auto" src={logo} alt="" ></Image>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gradient-to-r from-[#DFD0B8] to-[#948979]-500">
              Sign in to your account
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-[#DFD0B8]">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="johndoe@gmail.com"
                    required
                    className="block w-full rounded-md border-0 py-1.5 p-2 bg-gradient-to-r from-[#DFD0B8] to-[#948979]-500 text-[#2d210e] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#153448] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-[#DFD0B8]">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-[#DFD0B8] hover:text-[#948979]">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5  bg-gradient-to-r from-[#DFD0B8] to-[#948979]-500 text-[#2d210e] p-2 font-extrabold shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#153448] sm:text-sm sm:leading-6"
                  />    
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-gradient-to-r from-[#948979] to-[#DFD0B8] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#948979] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#948979]"
                >
                   SIGN IN
                </button>
              </div>
            </form>
          </div>
          <div className="quote-container  bg-[#DFD0B8]">
        <p className="quote-para text-[#153448] p-2 text-center absolute bottom-0">
          "Success is the sum of small efforts, repeated day in and day out. Embrace the habit challenges, for it's the daily work that builds greatness."
        </p>
      </div>
        </div>
      </>
    )
  }
  
export default LoginState;