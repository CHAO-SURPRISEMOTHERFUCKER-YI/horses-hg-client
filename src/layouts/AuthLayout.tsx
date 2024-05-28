import Logo from "@/components/Logo";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function AuthLayout() {
  return (
    <>
      <div className="bg-gradient-to-b from-green-900 to-green-700 min-h-screen">
        <div className="py-10 lg:py-10 mx-auto w-[360px]">
          <Logo />
          <div className="mt-10">
            <Outlet />
          </div>
        </div>
      </div>
      <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
    </>
  );
}
