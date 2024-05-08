import { Outlet } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { DialogComponet, Loading } from "../../common";
export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isLoading } = useSelector((state) => state.loadingSlice);
  return (
    <>
      <DialogComponet />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 ">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {isLoading && <Loading />}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <main>
            <div className=" mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 ">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
