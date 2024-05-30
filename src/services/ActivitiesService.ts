import { isAxiosError } from "axios";
import api from "../lib/axios";
import { dashboardActivitySchema, Activity, ActivityFormData } from "../types";

export async function createActivity(formData: ActivityFormData) {
  try {
    const { data } = await api.post("/activities", formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else {
      throw new Error("Error al crear el caballo");
    }
  }
}

export async function getActivities() {
  try {
    const { data } = await api.get("/activities");

    const parsedData = (data as Activity[]).map((activity) => ({
      ...activity,
      startDate: new Date(activity.startDate),
    }));

    const response = dashboardActivitySchema.safeParse(parsedData);
    if (response.success) {
      return response.data;
    } else {
      throw new Error("Error al analizar los datos de las actividades");
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else {
      throw new Error("Error al obtener la lista de actividades");
    }
  }
}

export async function getActivityById(id: Activity["_id"]) {
  try {
    const { data } = await api.get(`/activities/${id}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else {
      throw new Error("Error al obtener la lista de actividades");
    }
  }
}

type ActivityAPIType = {
  formData: ActivityFormData;
  activityId: Activity["_id"];
};

export async function updateActivity({
  formData,
  activityId,
}: ActivityAPIType) {
  try {
    const { data } = await api.put<string>(
      `/activities/${activityId}`,
      formData
    );
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else {
      throw new Error("Error al obtener la lista de actividades");
    }
  }
}

export async function deleteActivity(id: Activity["_id"]) {
  try {
    const { data } = await api.delete(`/activities/${id}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    } else {
      throw new Error("Error al eliminar el caballo");
    }
  }
}
