import { useNavigate } from "react-router-dom";
import HorseForm from "./HorseForm";
import { Horse, HorseFormData } from "@/types/index";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateHorse } from "@/services/HorsesService";
import { toast } from "react-toastify";
import ImageUpload from "./ImageUpload";
import ErrorMessage from "../../components/ErrorMessage";

type EditHorseFormProps = {
  data: HorseFormData;
  horseId: Horse["_id"];
};

export default function EditHorseForm({ data, horseId }: EditHorseFormProps) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      horseName: data.horseName,
      available: data.available,
      description: data.description,
      image: data.image,
    },
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updateHorse,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["horses"] });
      queryClient.invalidateQueries({ queryKey: ["editHorse", horseId] });
      toast.success(data);
      navigate("/horses/list");
    },
  });

  const handleForm = (formData: HorseFormData) => {
    const data = {
      formData,
      horseId,
    };
    mutate(data);
  };

  return (
    <>
      <div className=" max-w-3xl mx-auto">
        <h1 className="text-5xl font-black">Editar registro</h1>
        <p className="text-2xl font-light text-slate-500 mt-5">
          Llena los siguientes campos
        </p>
        <form
          className="mt-10 bg-white shadow-lg p-10 rounded-lg"
          onSubmit={handleSubmit(handleForm)}
          noValidate
        >
          <HorseForm register={register} errors={errors} />
          <div className="mb-5 space-y-3">
            <label
              htmlFor="description"
              className="text-sm uppercase font-bold"
            >
              Imagen
            </label>
            <ImageUpload
              onImageUrlChange={(imageUrl) => setValue("image", imageUrl)}
            />

            {errors.image && (
              <ErrorMessage>{errors.image.message}</ErrorMessage>
            )}
          </div>
          <div className="flex justify-evenly mt-8"></div>
          <input
            type="submit"
            value="Guardar cambios"
            className="bg-green-600 hover:bg-green-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors"
          ></input>
        </form>
      </div>
    </>
  );
}
