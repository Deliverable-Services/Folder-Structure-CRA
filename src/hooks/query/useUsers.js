import { useQuery, useQueryClient } from "react-query";
import { userApi } from "@apis";

export default function useUsers() {
  const queryKey = ["users"];
  const queryClient = useQueryClient();
  return {
    ...useQuery(queryKey, () => userApi.getAll()),
    invalidate: () => {
      queryClient.invalidateQueries(queryKey);
    },
  };
}
