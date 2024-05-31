import { useState } from "react";
import Loading from "@/components/Loading";
import { getHorses } from "@/services/HorsesService";
import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Edit, Delete } from "@mui/icons-material";
import DeleteHorse from "@/components/horses/DeleteHorse";

export default function HorsesList() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [deleteHorseId, setDeleteHorseId] = useState<string>("");

  const { data, isLoading } = useQuery({
    queryKey: ["horses"],
    queryFn: () => getHorses(),
    retry: false,
  });

  const handleDelete = (horseId: string) => {
    setDeleteHorseId(horseId);
  };

  const handleClose = () => {
    setDeleteHorseId("");
  };

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen">
      <nav className="flex justify-end mr-32">
        <Link
          className="bg-green-950 hover:bg-green-900 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
          to="/horses/create"
        >
          {t("NEW_HORSE")}
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
            {data?.map((horse) => (
              <TableRow key={horse._id}>
                <TableCell>{horse.horseName}</TableCell>
                <TableCell>{horse.available}</TableCell>
                <TableCell>{horse.description}</TableCell>
                <TableCell>
                  <Avatar
                    src={`${import.meta.env.VITE_IMAGES_URL}${horse.image}`}
                    alt={horse.horseName}
                    sx={{ width: 100, height: 100 }}
                  />
                </TableCell>
                <TableCell>
                  <button
                    className="bg-emerald-900 p-3 text-white font-bold rounded-full mr-4"
                    onClick={() => navigate(`/horses/${horse._id}/edit`)}
                  >
                    <Edit />
                  </button>
                  <button
                    className="bg-red-700 p-3 text-white font-bold rounded-full"
                    onClick={() => handleDelete(horse._id)}
                  >
                    <Delete />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DeleteHorse deleteHorseId={deleteHorseId} onClose={handleClose} />
    </div>
  );
}
