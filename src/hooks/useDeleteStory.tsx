import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios";

function useDeleteStory() {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
        await axios.delete(`http://localhost:3000/stories/${id}`);
    },
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });
};

export default useDeleteStory