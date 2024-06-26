import adminLogo from "@/app/assets/admin-image.svg";
import userLogo from "@/app/assets/user-image.svg";
import Image from "next/image";
import Link from "next/link";

export default function UserauthState() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="grid grid-flow-row justify-center ">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-center gap-[50px]">
          <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10 md:mx-10">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#3C5B6F] transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center   transition-all duration-300 group-hover:text-[#fff]">
                <Image
                  className="mx-auto h-[120px] w-auto"
                  src={adminLogo}
                  alt=""
                ></Image>
              </span>
              <div className="space-y-6 pt-5 text-base leading-7 text-[#DFD0B8] transition-all duration-300 group-hover:text-[#fff]/90">
                <p>Admin access requires credentials to enter.</p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <p>
                  <Link
                    href="/login"
                    className="text-[#DFD0B8] transition-all duration-300 group-hover:text-[#fff]"
                  >
                    Login &rarr;
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#3C5B6F] transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center   transition-all duration-300 group-hover:text-[#fff]">
                <Image
                  className="mx-auto h-[120px] w-auto"
                  src={userLogo}
                  alt=""
                ></Image>
              </span>
              <div className="space-y-6 pt-5 text-base leading-7 text-[#DFD0B8] transition-all duration-300 group-hover:text-white/90">
                <p>Watch all of the uploaded videos here !</p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <p>
                  <Link
                    href="dashboard"
                    className="text-[#DFD0B8] transition-all duration-300 group-hover:text-[#fff]"
                  >
                    Enter &rarr;
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
