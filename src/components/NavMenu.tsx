import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AccountCircle, Language } from "@mui/icons-material";
import { Popover, Transition } from "@headlessui/react";
import { useQueryClient } from "@tanstack/react-query";
import { Fragment } from "react";
import { User } from "../types";

type NavMenuProps = {
  name: User["name"];
  role: User["role"];
};

export default function NavMenu({ name, role }: NavMenuProps) {
  const { t, i18n } = useTranslation();
  const queryClient = useQueryClient();
  const logout = () => {
    localStorage.removeItem("USER_TOKEN");
    queryClient.invalidateQueries({ queryKey: ["user"] });
    window.location.reload();
  };

  return (
    <div className="text-white lg:mx-11 flex items-center">
      <Popover className="relative mx-2">
        <Popover.Button>
          <Language />
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute lg:max-w-min -translate-x-1/2 lg:-translate-x-48">
            <div className="w-full lg:w-36 rounded-xl bg-white p-2 text-sm font-semibold text-gray-900 shadow-lg">
              <button
                className="block w-full p-2 text-center hover:bg-gray-100"
                type="button"
                onClick={() => i18n.changeLanguage("es")}
              >
                ES
              </button>
              <button
                className="block w-full p-2 text-center hover:bg-gray-100"
                type="button"
                onClick={() => i18n.changeLanguage("en")}
              >
                EN
              </button>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      {name ? (
        <>
          <Popover className="relative mx-2">
            <Popover.Button>
              <AccountCircle />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen lg:max-w-min -translate-x-1/2 lg:-translate-x-48">
                <div className="w-full lg:w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
                  <p className="text-center">
                    {t("GREETINGS")}
                    {name}
                  </p>
                  <Link
                    to="/profile"
                    className="block p-2 hover:text-purple-950"
                  >
                    {t("PROFILE")}
                  </Link>
                  {role === "admin" ? (
                    <Link
                      to="/horses/list"
                      className="block p-2 hover:text-purple-950"
                    >
                      {t("MY_HORSES")}
                    </Link>
                  ) : (
                    <Link to="/" className="block p-2 hover:text-purple-950">
                      {t("MY_HORSES")}
                    </Link>
                  )}

                  {role === "admin" ? (
                    <Link
                      to="/activities/list"
                      className="block p-2 hover:text-purple-950"
                    >
                      {t("MY_ACTIVITIES")}
                    </Link>
                  ) : (
                    <Link to="/" className="block p-2 hover:text-purple-950">
                      {t("MY_ACTIVITIES")}
                    </Link>
                  )}

                  <button
                    className="block p-2 hover:text-purple-950"
                    type="button"
                    onClick={logout}
                  >
                    {t("LOGOUT")}
                  </button>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </>
      ) : (
        <Button color="inherit" startIcon={<AccountCircle />}>
          <Link to={"/auth/login"}>{t("LOGIN")}</Link>
        </Button>
      )}
    </div>
  );
}
