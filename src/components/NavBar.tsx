import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function NavBar() {
  const { t } = useTranslation();
  return (
    <div className="text-white lg:mx-11 flex items-center space-x-4">
      <button>
        <Link to={"/horses"}>{t("OUR_HORSES")}</Link>
      </button>
      <div className="h-6 bg-white w-px"></div>
      <button>
        <Link to={"/"}>{t("ACTIVITIES")}</Link>
      </button>
      <div className="h-6 bg-white w-px"></div>
      <button>
        <Link to={"/"}>{t("ABOUT_US")}</Link>
      </button>
      <div className="h-6 bg-white w-px"></div>
      <button>
        <Link to={"/"}>{t("CONTACT")}</Link>
      </button>
    </div>
  );
}
