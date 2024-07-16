import { Outlet } from "react-router-dom";
import Header from "../header";

function CommonLayout() {
  return (
    <div className="flec flex-auto flex-col">
      <div className="flex flex-auto">
        <main className="flex flex-col min-w-0 w-full bg-white border-gray-300 min-h-screen">
          <Header />
          <div className="flex flex-auto flex-col justify-between h-[calc(100%-64px)]">
            <div className="h-full">
              <div className="h-full flex flex-auto flex-col px-4 sm:px-6 md:px-6 py-4 sm:py-6">
                <div className="mx-auto container h-full p-0">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CommonLayout;
