import { isAxiosError } from "axios";
import api from "../lib/axios";

export async function uploadImage(formData: FormData) {
  try {
    const { data } = await api.post("/uploads", formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else {
      throw new Error("Error al subir imagen");
    }
  }
}
