import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getHorses } from "@/services/HorsesService";
import Loading from "@/components/Loading";
import { useTranslation } from "react-i18next";
import { Grid, Paper, Typography } from "@mui/material";

export default function HorsesView() {
  const { t } = useTranslation();

  const { data, isLoading } = useQuery({
    queryKey: ["horses"],
    queryFn: getHorses,
  });

  if (isLoading) return <Loading />;

  if (data)
    return (
      <>
        <h1 className="text-5xl font-black text-center">
          {t("SPONSOR_HORSE")}
        </h1>
        <p className="text-2xl font-light text-slate-500 mt-5 text-center mb-10">
          {t("DESCRIPTION_HORSE")}
        </p>

        {data.length ? (
          <Grid container spacing={3} className="px-52 py-10">
            {data.map((horse) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={horse._id}>
                <Paper elevation={3} style={{ padding: 20 }}>
                  <Typography variant="h6">
                    <Link
                      to={`/horses/${horse._id}`}
                      className="text-gray-600 cursor-pointer hover:underline text-3xl font-bold"
                    >
                      {" "}
                      {horse.horseName}{" "}
                    </Link>
                  </Typography>
                  <img
                    src={`${import.meta.env.VITE_IMAGES_URL}${horse.image}`}
                    alt={horse.horseName}
                    className="mt-3 w-full"
                  />
                  <div>{horse.description}</div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        ) : (
          <p className="text-center py-20">
            {t("NO_HORSES")} {""}
            <Link to="/horses/create" className="text-green-500 font-bold">
              {t("NEW_HORSE")}
            </Link>
          </p>
        )}
      </>
    );
}
