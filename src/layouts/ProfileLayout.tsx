import Tabs from "@/components/profile/Tabs";
import { Outlet } from "react-router-dom";

export default function ProfileLayout() {
  return (
    <>
      <div className="mx-60">
        <Tabs />
        <Outlet />
      </div>
    </>
  );
}
