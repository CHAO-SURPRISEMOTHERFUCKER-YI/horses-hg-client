import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar";
import NavMenu from "@/components/NavMenu";
import { useAuth } from "@/hooks/useAuth";

export default function Layout() {
  const { data } = useAuth();

  return (
    <>
      <div className="layout"></div>
      <header
        className="bg-emerald-950 bg-opacity-90 py-5 fixed top-0 min-w-full z-20"
        style={{ borderBottom: "10px solid #1b5737" }}
      >
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="w-40 ml-4">
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>
          <NavBar />
          <NavMenu name={data?.name ?? ""} role={data?.role ?? ""} />
        </div>
      </header>
      <section className="bg">
        <div className="mt-52"></div>
        <Outlet />
      </section>
      <footer className=" bg-emerald-950 text-white py-4 static bottom-0 w-full">
        <div className="container mx-auto text-center">
          <p className="text-sm">{new Date().getFullYear()} Horses HG</p>
        </div>
      </footer>

      <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
    </>
  );
}
