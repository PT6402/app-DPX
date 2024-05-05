/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import DropdownUser from "./DropdownUser";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const { pathname } = useLocation();
  const urlCheck = pathname.split("/");
  return (
    <header className="sticky top-4 rounded-xl z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none  scale-95">
      <div
        className={`flex flex-grow items-center justify-${
          urlCheck.length >= 4 ? "between" : "end"
        } px-4 py-4 shadow-3 md:px-6 2xl:px-11 gap-3  rounded-xl`}
      >
        {urlCheck.length >= 4 && (
          <Link
            to={"/app-DPX-deploy/ctn_dt"}
            className="inline-flex text-graydark  outline-graydark outline-1 border-0 py-2 px-2  hover:scale-105 outline rounded-xl text-lg items-center justify-between hover:outline-red-500"
          >
            <IoArrowBackCircleOutline size={35} color="red" />
          </Link>
        )}
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-99999 block rounded-lg border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer ">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && "!w-full delay-300"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && "delay-400 !w-full"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && "!w-full delay-500"
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && "!h-0 !delay-[0]"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && "!h-0 !delay-200"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>
        <div className="flex items-center gap-3 2xsm:gap-7">
          <DropdownUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
