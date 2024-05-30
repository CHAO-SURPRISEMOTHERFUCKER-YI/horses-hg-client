import { UseFormRegister, FieldErrors } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";
import { ActivityFormData } from "types";

type ActivityFormProps = {
  register: UseFormRegister<ActivityFormData>;
  errors: FieldErrors<ActivityFormData>;
};

export default function ActivityForm({ register, errors }: ActivityFormProps) {
  return (
    <>
      <div className="mb-5 space-y-3">
        <label htmlFor="activityName" className="text-sm uppercase font-bold">
          Nombre del Actividad
        </label>
        <input
          id="activityName"
          className="w-full p-3  border border-gray-200"
          type="text"
          placeholder="Nombre del Proyecto"
          {...register("activityName", {
            required: "El nombre es Obligatorio",
          })}
        />
        {errors.activityName && (
          <ErrorMessage>{errors.activityName.message}</ErrorMessage>
        )}
      </div>

      <div className="mb-5 space-y-3">
        <label htmlFor="available" className="text-sm uppercase font-bold">
          Disponibilidad
        </label>
        <input
          id="available"
          className="w-full p-3  border border-gray-200"
          type="text"
          placeholder="Disponibilidad"
          {...register("available", {
            required: "Seleccionar una Disponibilidad",
          })}
        />
        {errors.available && (
          <ErrorMessage>{errors.available.message}</ErrorMessage>
        )}
      </div>
      <div className="mb-5 space-y-3">
        <label htmlFor="startDate" className="text-sm uppercase font-bold">
          Fecha de inicio
        </label>
        <input
          id="startDate"
          className="w-full p-3  border border-gray-200"
          type="date"
          {...register("startDate", {
            required: "Seleccionar una Fecha de Inicio",
          })}
        />
        {errors.startDate && (
          <ErrorMessage>{errors.startDate.message}</ErrorMessage>
        )}
      </div>
      <div className="mb-5 space-y-3">
        <label htmlFor="description" className="text-sm uppercase font-bold">
          Descripción
        </label>
        <textarea
          id="description"
          className="w-full p-3  border border-gray-200"
          placeholder="Descripción del caballo"
          {...register("description", {
            required: "Una descripción del proyecto es obligatoria",
          })}
        />
        {errors.description && (
          <ErrorMessage>{errors.description.message}</ErrorMessage>
        )}
      </div>
    </>
  );
}
