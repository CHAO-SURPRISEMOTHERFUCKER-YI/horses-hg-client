import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getActivityById } from "@/services/ActivitiesService";
import EditActivityForm from "@/components/activities/EditActivityForm";

export default function EditActivity() {
  const params = useParams();
  const activityId = params.activityId!;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["editActivity", activityId],
    queryFn: () => getActivityById(activityId),
    retry: false,
  });
  if (isLoading) return "Cargando...";
  if (isError) return <Navigate to="/404" />;

  if (data) return <EditActivityForm data={data} activityId={activityId}/>;
}
