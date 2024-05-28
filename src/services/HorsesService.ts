import { isAxiosError } from "axios";
import api from "../lib/axios";
import { dashboardHorseSchema, Horse, HorseFormData } from "../types";

export async function createHorse(formData: HorseFormData) {
  try {
    const { data } = await api.post("/horses", formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else {
      throw new Error("Error al crear el caballo");
    }
  }
}

export async function getHorses() {
  try {
    const { data } = await api.get("/horses");
    const response = dashboardHorseSchema.safeParse(data);
    if (response.success) {
      return response.data;
    } else {
      throw new Error("Error al analizar los datos de los caballos");
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else {
      throw new Error("Error al obtener la lista de caballos");
    }
  }
}

export async function getHorseById(id: Horse["_id"]) {
  try {
    const { data } = await api.get(`/horses/${id}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else {
      throw new Error("Error al obtener la lista de caballos");
    }
  }
}

type HorseAPIType = {
  formData: HorseFormData;
  horseId: Horse["_id"];
};

export async function updateHorse({ formData, horseId }: HorseAPIType) {
  try {
    const { data } = await api.put<string>(`/horses/${horseId}`, formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else {
      throw new Error("Error al obtener la lista de caballos");
    }
  }
}

export async function deleteHorse(id: Horse["_id"]) {
  try {
    const { data } = await api.delete(`/horses/${id}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else {
      throw new Error("Error al eliminar el caballo");
    }
  }
}
