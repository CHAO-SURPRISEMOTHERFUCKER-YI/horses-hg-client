import { isAxiosError } from "axios";
import { UpdateCurrentPassword, UserProfileForm } from "../types";
import api from "../lib/axios";

export async function updateProfile(formData: UserProfileForm) {
  try {
    const { data } = await api.put<string>("/users/profile", formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else {
      throw new Error("Error al eliminar el caballo");
    }
  }
}

export async function changePassword(formData: UpdateCurrentPassword) {
    try {
      const { data } = await api.post<string>("/users/profile", formData);
      return data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        throw new Error(error.response.data.error);
      } else {
        throw new Error("Error al eliminar el caballo");
      }
    }
  }
