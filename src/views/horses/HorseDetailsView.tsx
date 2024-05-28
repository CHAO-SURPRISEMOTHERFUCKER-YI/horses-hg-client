import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getHorseById } from "@/services/HorsesService";

export default function HorseDetailsView() {
  const params = useParams();
  const horseId = params.horseId!;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["editHorse", horseId],
    queryFn: () => getHorseById(horseId),
    retry: false,
  });
  if (isLoading) return "Cargando...";
  if (isError) return <Navigate to="/404" />;

  if (data)
    return (
      <>
        <h1 className="text-5xl font-black">{data.horseName}</h1>
        <p className="text-2xl font-light text-gray-500 mt-5 ">{data.description}</p>
      </>
    );
}
