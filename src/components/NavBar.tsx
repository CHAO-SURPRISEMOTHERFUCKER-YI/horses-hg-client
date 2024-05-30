import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function NavBar() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavContact = (section: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: section } });
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  const navTo = (url: string) => {
    navigate(url);
    window.scrollTo(0, 0);
  };

  return (
    <div className="text-white lg:mx-11 flex items-center space-x-4">
      <button onClick={() => navTo("/horses")}>{t("OUR_HORSES")}</button>
      <div className="h-6 bg-white w-px"></div>
      <button onClick={() => navTo("/activities")}>{t("ACTIVITIES")}</button>
      <div className="h-6 bg-white w-px"></div>
      <button onClick={() => navTo("/about_us")}>{t("ABOUT_US")}</button>
      <div className="h-6 bg-white w-px"></div>
      <button onClick={() => handleNavContact("contact")}>
        {t("CONTACT")}
      </button>
    </div>
  );
}
