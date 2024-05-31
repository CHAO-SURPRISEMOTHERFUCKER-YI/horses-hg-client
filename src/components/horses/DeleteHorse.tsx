import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { deleteHorse } from "@/services/HorsesService";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Close } from "@mui/icons-material";

interface Props {
  deleteHorseId: string;
  onClose: () => void;
}

export default function DeleteHorse({ deleteHorseId, onClose }: Props) {

  const show = !!deleteHorseId;

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteHorse,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["horses"] });
      toast.success(data);
      onClose(); // Cerrar la ventana después de eliminar
    },
  });

  const handleDelete = async () => {
    if (deleteHorseId) {
      mutate(deleteHorseId);
    }
  };

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={onClose} // Cerrar la ventana al hacer clic en el fondo
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-16">
                <button onClick={onClose} className="absolute top-4 right-4">
                  <Close/>
                </button>
                <Dialog.Title as="h3" className="font-black text-4xl my-5">
                  Eliminar Caballo
                </Dialog.Title>

                <p className="text-xl font-bold">
                  ¿Seguro que quieres eliminar el caballo?
                </p>

                <button
                  onClick={handleDelete}
                  className="mt-10 bg-red-600 hover:bg-red-700 w-full p-3 text-white font-black text-xl cursor-pointer"
                >
                  Eliminar Caballo
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
