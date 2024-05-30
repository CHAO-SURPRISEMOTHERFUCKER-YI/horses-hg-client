import Loading from "@/components/Loading";
import { deleteActivity, getActivities } from "@/services/ActivitiesService";
import { Delete, Edit } from "@mui/icons-material";
import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ActivitiesList() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["activities"],
    queryFn: () => getActivities(),
    retry: false,
  });

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteActivity,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["activities"] });
      toast.success(data);
    },
  });

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen">
      <nav className="mt-44 flex justify-end mr-32">
        <Link
          className="bg-green-950 hover:bg-green-900 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
          to="/activities/create"
        >
          {t("NEW_ACTIVITY")}
        </Link>
      </nav>
      <TableContainer className="px-40 py-10 bg-white">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Disponibilidad</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Imagen</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((activity) => (
              <TableRow key={activity._id}>
                <TableCell>{activity.activityName}</TableCell>
                <TableCell>{activity.available}</TableCell>
                <TableCell>{activity.description}</TableCell>
                <TableCell>
                  <Avatar
                    src={`${import.meta.env.VITE_IMAGES_URL}${activity.image}`}
                    alt={activity.activityName}
                    sx={{ width: 100, height: 100 }}
                  />
                </TableCell>
                <TableCell>
                  <button
                    className="bg-emerald-900 p-3 text-white font-bold rounded-full mr-4"
                    onClick={() => navigate(`/horses/${activity._id}/edit`)}
                  >
                    <Edit />
                  </button>
                  <button
                    className="bg-red-700 p-3 text-white font-bold rounded-full"
                    onClick={() => mutate(activity._id)}
                  >
                    <Delete />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
