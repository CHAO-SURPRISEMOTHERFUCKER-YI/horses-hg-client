import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getHorseById } from "@/services/HorsesService";
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

export default function HorseDetails() {
  const params = useParams();
  const horseId = params.horseId!;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["showHorse", horseId],
    queryFn: () => getHorseById(horseId),
  });

  console.log(data);

  if (isLoading) return "Cargando...";
  if (isError) return <Navigate to="/404" />;

  if (data)
    return (
      <div className="flex flex-col md:flex-row px-40 min-h-screen">
        <div className="w-96 mr-20">
          <img
            src={`${import.meta.env.VITE_IMAGES_URL}${data.image}`}
            alt={data.horseName}
            className="w-full h-auto object-cover rounded-lg mb-10"
          />
          <button className="p-8 w-full bg-emerald-900 text-white rounded-lg">
            Comprar/Apadrinar
          </button>
        </div>
        <div className="md:w-1/2 md:pl-4">
          <h2 className="text-5xl font-bold mb-10 text-emerald-900 underline">
            {data.horseName}
          </h2>
          <TableContainer component={Paper}>
            <Table>
              <TableRow>
                <TableCell component="th" scope="row">
                  Nombre
                </TableCell>
                <TableCell>{data.horseName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Edad
                </TableCell>
                <TableCell>{data.age}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Fecha de Nacimiento
                </TableCell>
                <TableCell>{data.birthDate}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Raza
                </TableCell>
                <TableCell>{data.breed}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Peso
                </TableCell>
                <TableCell>{data.weight} kg</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Precio
                </TableCell>
                <TableCell>{data.price}€</TableCell>
              </TableRow>
            </Table>
          </TableContainer>
        </div>
      </div>
    );
}
