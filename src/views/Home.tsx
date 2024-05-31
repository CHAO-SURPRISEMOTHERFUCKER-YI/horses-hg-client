import Contact from "@/components/Contact";
import SponsorCarousel from "@/components/SponsorCarousel";
import { Email, Phone, Place } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <div className="min-w-full px-10 flex">
        <div className="flex overflow-hidden my-56">
          <img
            src="/img/enjoying-wildlife.jpg"
            alt="home_image"
            className="imgHome"
          ></img>
          <div className="flex flex-col justify-center">
            <h1 className="welcome text-8xl absolute">{t("WELCOME")}</h1>
          </div>
        </div>
      </div>
      <div className="text-center text-2xl flex justify-center text-white mt-2">
        <Link
          to={"/horses"}
          className="bg-emerald-900 bg-opacity-90 px-8 py-4 rounded-full hover:bg-opacity-100"
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
        <h2 className="text-center text-3xl my-3 font-bold text-emerald-900">
          {t("OUR_HORSES")}
        </h2>
        <SponsorCarousel />
      </div>
      <div className="min-w-full flex">
        <Grid
          container
          className=" bg-emerald-900 my-40 xl:mx-96 lg:mx-44 mx-20 text-white"
          style={{ borderRadius: "60px" }}
        >
          <Grid item xs={12} className="px-14 text-center py-12">
            <h3 className="secondTitle">{t("ACTIVITY_TITLE")}</h3>
            <p className="secondPhrase mb-10">{t("ACTIVITY_PHRASE")}</p>
            <Link
              to={"/activities"}
              className="bg-white text-emerald-900 font-bold px-8 py-4 rounded-full"
            >
              {t("SEE_ACTIVITIES")}
            </Link>
          </Grid>
        </Grid>
      </div>
      <div id="contact">
        <Grid container className="min-h-screen">
          <Grid
            item
            xs={4}
            className="flex justify-center items-center bg-emerald-900"
          >
            <div style={{ width: "60%" }} className="text-white text-2">
              <h3 className="font-bold text-3xl mb-8">{t("CONTACT_US")}</h3>
              <table>
                <tr>
                  <td>
                    <Place />
                  </td>
                  <td className="p-3 text-right">Address</td>
                  <td className="p-3"><a href="https://maps.app.goo.gl/bCz1vnzmwHh1qwkW9" target="_blank">Na Chmelnici 285, Klatovy IV, 339 01 Klatovy, Pilsen</a></td>
                </tr>
                <tr>
                  <td>
                    <Phone />
                  </td>
                  <td className="p-3 text-right">Phone</td>
                  <td className="p-3"><a href="tel:638774107">638774107</a></td>
                </tr>
                <tr>
                  <td>
                    <Email />
                  </td>
                  <td className="p-3 text-right">Email</td>
                  <td className="p-3"><a href="mailto:chyrsq2001@gmail.com">chyrsq2001@gmail.com</a></td>
                </tr>
              </table>
            </div>
          </Grid>
          <Grid
            item
            xs={8}
            className="flex justify-center items-center bg-white"
          >
            <Contact />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
