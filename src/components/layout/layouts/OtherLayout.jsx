import { Outlet } from "react-router-dom";

export default function OtherLayout() {
  return (
    <>
      <div className="flex flex-col flex-1">
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden ">
          <main>
            <div className="mx-auto min-h-screen p-4 md:p-6 2xl:p-10 flex justify-center flex-col items-center">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
