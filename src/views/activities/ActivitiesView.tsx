import Loading from "@/components/Loading";
import { getActivities } from "@/services/ActivitiesService";
import { Grid, Paper } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ActivitiesView() {
  const { t } = useTranslation();

  const { data, isLoading } = useQuery({
    queryKey: ["activities"],
    queryFn: getActivities,
  });

  if (isLoading) return <Loading />;

  if (data)
    return (
    <div className="min-h-screen">
        <h1 className="text-5xl font-black text-center">
          {t("JOIN_ACTIVITIES")}
        </h1>
        <p className="text-2xl font-light text-slate-500 mt-5 text-center mb-10">
          {t("DESCRIPTION_ACTIVITIES")}
        </p>
        {data.length ? (
          <Grid container className=" px-20">
            {data?.map((activity) => (
              <Grid item xs={12} spacing={2} key={activity._id}>
                <Paper className="flex">
                  <img
                    src={`${import.meta.env.VITE_IMAGES_URL}${activity.image}`}
                     className="max-w-lg max-h-60"
                  />
                  <div>
                    <div>{activity.activityName}</div>
                    <div>{activity.available}</div>
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        ) : (
          <p className="text-center pt-52 min-h-screen">
            {t("NO_ACTIVITIES")} {""}
            <Link to="/activities/create" className="text-green-500 font-bold">
              {t("NEW_ACTIVITY")}
            </Link>
          </p>
        )}
      </div>
    );
}
