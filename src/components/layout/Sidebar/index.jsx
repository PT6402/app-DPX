/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const { infoUser } = useSelector((state) => state.userSlice);
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex rounded-xl h-screen w-72.5 flex-col scale-95 overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <NavLink
                  to="/ctn_dt"
                  className={`group relative flex items-center gap-2.5 rounded-xl py-5 px-4 font-medium text-bodydark1 duration-300 ease-in-out dark:hover:bg-meta-4 ${
                    pathname.includes("ctn_dt") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  CTN / ĐT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/vip"
                  className={`group relative flex items-center gap-2.5 rounded-xl py-5 px-4 font-medium text-bodydark1 duration-300 ease-in-out  dark:hover:bg-meta-4 ${
                    pathname.includes("vip") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  VIP
                </NavLink>
              </li>
              {infoUser != null && infoUser?.Role == "super-admin" && (
                <li>
                  <NavLink
                    to="/add_admin"
                    className={`group relative flex items-center gap-2.5 rounded-xl py-5 px-4 font-medium text-bodydark1 duration-300 ease-in-out dark:hover:bg-meta-4 ${
                      pathname.includes("add_admin") &&
                      "bg-graydark dark:bg-meta-4"
                    }`}
                  >
                    Add Admin
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
}
