import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/services/AuthServices";

export const useAuth = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading };
};
