import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import HorseForm from "@/components/horses/HorseForm";
import { HorseFormData } from "@/types/index";
import { createHorse } from "@/services/HorsesService";
import ImageUpload from "@/components/horses/ImageUpload";
import ErrorMessage from "../../components/ErrorMessage";

export default function CreateHorseView() {
  const navigate = useNavigate();

  const initialValues: HorseFormData = {
    horseName: "",
    available: "",
    description: "",
    image: "",
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const { mutate } = useMutation({
    mutationFn: createHorse,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data);
      navigate("/horses/list");
    },
  });

  const handleForm = (formData: HorseFormData) => {
    if (!formData.image) {
      toast.error("Debe seleccionar una imagen");
      return;
    }
    mutate(formData);
  };

  return (
    <>
      <div className=" max-w-3xl mx-auto">
        <h1 className="text-5xl font-black">Crear registro</h1>
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
          <div className="flex justify-evenly mt-8">
            <Link
              className="bg-gray-300 hover:bg-gray-400 px-8 py-3 text-gray-800 text-xl font-bold cursor-pointer transition-colors rounded"
              to="/"
            >
              Volver
            </Link>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 px-8 py-3 text-white text-xl font-bold cursor-pointer transition-colors rounded"
            >
              Registrar caballo
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
