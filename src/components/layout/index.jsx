/* eslint-disable react/prop-types */
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import Previous from "../model/FormStep/common/Previous";
import Next_Submit from "../model/FormStep/common/Next_Submit";
import HeaderStep from "../model/FormStep/common/headerStep";
const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname.split("/");

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        {!pathname.includes("user") && (
          <>
            <Sidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            <div className="flex flex-col flex-1">
              <Header
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <main>
                  <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 ">
                    <Outlet />
                  </div>
                </main>
              </div>
            </div>
          </>
        )}
        {/*  */}
        {pathname.includes("user") && (
          <>
            <div className="flex flex-col flex-1">
              <HeaderStep title />
              <div className="  relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden ">
                <main>
                  <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 ">
                    <Outlet />
                  </div>
                </main>
              </div>
              <div className="bottom-0 left-0 right-0 py-5 bg-white shadow-md">
                <div className="max-w-3xl mx-auto px-4">
                  <div className="flex justify-between">
                    <Previous />
                    <Next_Submit />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {/*  */}
      </div>
    </div>
  );
};

export default Layout;
