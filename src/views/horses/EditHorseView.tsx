import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getHorseById } from "@/services/HorsesService";
import EditHorseForm from "@/components/horses/EditHorseForm";

export default function EditHorseView() {
  const params = useParams();
  const horseId = params.horseId!;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["editHorse", horseId],
    queryFn: () => getHorseById(horseId),
    retry: false,
  });
  if (isLoading) return "Cargando...";
  if (isError) return <Navigate to="/404" />;

  if (data) return <EditHorseForm data={data} horseId={horseId}/>;
}
