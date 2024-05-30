import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { ActivityFormData } from "@/types/index";
import { createActivity } from "@/services/ActivitiesService";
import ErrorMessage from "../../components/ErrorMessage";
import ActivityForm from "@/components/activities/ActivityForm";
import ImageUpload from "@/components/ImageUpload";

export default function CreateActivity() {
  const navigate = useNavigate();

  const initialValues: ActivityFormData = {
    activityName: "",
    available: "",
    startDate: new Date(),
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
    mutationFn: createActivity,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data);
      navigate("/activities");
    },
  });

  const handleForm = (formData: ActivityFormData) => {
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
          <ActivityForm register={register} errors={errors} />
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
              Registrar activitdad
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
