import Contact from "@/components/Contact";
import SponsorCarousel from "@/components/SponsorCarousel";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <div className="min-w-full px-10 flex">
        <div className="flex overflow-hidden" style={{ height: 660 }}>
          <img
            src="/img/enjoying-wildlife.jpg"
            alt="home_image"
            className="imgHome"
          ></img>
          <div className="flex flex-col justify-center">
            <h1 className="welcome text-8xl">{t("WELCOME")}</h1>
          </div>
        </div>
      </div>
      <div className="text-center text-2xl flex justify-center text-white">
        <Link
          to={"/horses"}
          className="bg-emerald-900 bg-opacity-90 px-8 py-4 rounded-full"
        >
          {t("OUR_HORSES")}
        </Link>
      </div>

      <div className="min-w-full flex">
        <Grid
          container
          className=" bg-emerald-900 m-44 text-white "
          style={{ borderRadius: "60px" }}
        >
          <Grid item xs={12} lg={4} className="px-14 text-center py-12">
            <h3 className="secondTitle">{t("TRANSFORM_LIFE")}</h3>
            <p className="secondPhrase">{t("TRANSFORM_PHRASE")}</p>
          </Grid>
          <Grid item xs={12} lg={4} className="px-14 text-center py-12">
            <h3 className="secondTitle">{t("WHY_SPONSOR")}</h3>
            <p className="secondPhrase">{t("WHY_PHRASE")}</p>
          </Grid>
          <Grid item xs={12} lg={4} className="px-14 text-center py-12">
            <h3 className="secondTitle">{t("MEET_HORSES")}</h3>
            <p className="secondPhrase">{t("MEET_PHRASE")}</p>
          </Grid>
        </Grid>
      </div>
      <div className="min-x-full">
        <h2 className="text-center text-2xl font-semibold">
          {t("OUR_HORSES")}
        </h2>
        <SponsorCarousel />
      </div>
      <div className="min-x-full">
        <Contact />
      </div>
    </>
  );
}
