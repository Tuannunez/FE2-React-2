import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export interface UpdateStoryPayload {
  id: number | string;
  data: Record<string, any>;
}

export const useUpdateStory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: UpdateStoryPayload) => {
      const res = await axios.put(`http://localhost:3000/stories/${id}`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });
};

export default useUpdateStory;
