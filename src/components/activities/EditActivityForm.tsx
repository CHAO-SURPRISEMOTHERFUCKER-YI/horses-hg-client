import { useNavigate } from "react-router-dom";
import ActivityForm from "../activities/ActivityForm";
import { Activity, ActivityFormData } from "@/types/index";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateActivity } from "@/services/ActivitiesService";
import { toast } from "react-toastify";
import ImageUpload from "../ImageUpload";
import ErrorMessage from "../ErrorMessage";

type EditActivityFormProps = {
  data: ActivityFormData;
  activityId: Activity["_id"];
};

export default function EditActivityForm({ data, activityId }: EditActivityFormProps) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      activityName: data.activityName,
      available: data.available,
      description: data.description,
      startDate: data.startDate,
      image: data.image,
    },
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updateActivity,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["activities"] });
      queryClient.invalidateQueries({ queryKey: ["editActivity", activityId] });
      toast.success(data);
      navigate("/activities/list");
    },
  });

  const handleForm = (formData: ActivityFormData) => {
    const data = {
      formData,
      activityId,
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
