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
          Nombre del Caballo
        </label>
        <input
          id="horseName"
          className="w-full p-3 border border-gray-200"
          type="text"
          placeholder="Nombre del Caballo"
          {...register("horseName", {
            required: "El nombre es obligatorio",
          })}
        />
        {errors.horseName && (
          <ErrorMessage>{errors.horseName.message}</ErrorMessage>
        )}
      </div>

      <div className="mb-5 space-y-3">
        <label htmlFor="age" className="text-sm uppercase font-bold">
          Edad del Caballo
        </label>
        <input
          id="age"
          className="w-full p-3 border border-gray-200"
          type="number"
          placeholder="Edad del Caballo"
          {...register("age", {
            required: "La edad es obligatoria",
          })}
        />
        {errors.age && <ErrorMessage>{errors.age.message}</ErrorMessage>}
      </div>

      <div className="mb-5 space-y-3">
        <label htmlFor="gender" className="text-sm uppercase font-bold">
          Género del Caballo
        </label>
        <select
          id="gender"
          className="w-full p-3 border border-gray-200"
          {...register("gender", {
            required: "El género es obligatorio",
          })}
        >
          <option value="">Seleccionar Género</option>
          <option value="Macho">Macho</option>
          <option value="Hembra">Hembra</option>
          <option value="Castrado">Castrado</option>
        </select>
        {errors.gender && <ErrorMessage>{errors.gender.message}</ErrorMessage>}
      </div>

      <div className="mb-5 space-y-3">
        <label htmlFor="breed" className="text-sm uppercase font-bold">
          Raza
        </label>
        <input
          id="breed"
          className="w-full p-3 border border-gray-200"
          type="text"
          placeholder="Raza"
          {...register("breed", {
            required: "Seleccionar una Raza",
          })}
        />
        {errors.breed && <ErrorMessage>{errors.breed.message}</ErrorMessage>}
      </div>

      <div className="mb-5 space-y-3">
        <label htmlFor="color" className="text-sm uppercase font-bold">
          Color
        </label>
        <input
          id="breed"
          className="w-full p-3 border border-gray-200"
          type="text"
          placeholder="Color"
          {...register("color", {
            required: "Seleccionar una Color",
          })}
        />
        {errors.color && <ErrorMessage>{errors.color.message}</ErrorMessage>}
      </div>

      <div className="mb-5 space-y-3">
        <label htmlFor="height" className="text-sm uppercase font-bold">
          Altura del Caballo
        </label>
        <input
          id="height"
          className="w-full p-3 border border-gray-200"
          type="number"
          placeholder="Altura del Caballo"
          {...register("height", {
            required: "La altura es obligatoria",
          })}
        />
        {errors.height && <ErrorMessage>{errors.height.message}</ErrorMessage>}
      </div>

      <div className="mb-5 space-y-3">
        <label htmlFor="available" className="text-sm uppercase font-bold">
          Disponibilidad
        </label>
        <input
          id="available"
          className="w-full p-3 border border-gray-200"
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
        <label htmlFor="price" className="text-sm uppercase font-bold">
          Precio del Caballo
        </label>
        <input
          id="price"
          className="w-full p-3 border border-gray-200"
          type="number"
          placeholder="Precio del Caballo"
          {...register("price", {
            required: "El precio es obligatoria",
          })}
        />
        {errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
      </div>

      <div className="mb-5 space-y-3">
        <label htmlFor="description" className="text-sm uppercase font-bold">
          Descripción
        </label>
        <textarea
          id="description"
          className="w-full p-3 border border-gray-200"
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
