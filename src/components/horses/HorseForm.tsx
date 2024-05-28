import { UseFormRegister, FieldErrors } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";
import { HorseFormData } from "types";

type HorseFormProps = {
  register: UseFormRegister<HorseFormData>;
  errors: FieldErrors<HorseFormData>;
};

export default function HorseForm({ register, errors }: HorseFormProps) {
  return (
    <>
      <div className="mb-5 space-y-3">
        <label htmlFor="horseName" className="text-sm uppercase font-bold">
          Nombre del Proyecto
        </label>
        <input
          id="horseName"
          className="w-full p-3  border border-gray-200"
          type="text"
          placeholder="Nombre del Proyecto"
          {...register("horseName", {
            required: "El nombre es Obligatorio",
          })}
        />
        {errors.horseName && (
          <ErrorMessage>{errors.horseName.message}</ErrorMessage>
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
