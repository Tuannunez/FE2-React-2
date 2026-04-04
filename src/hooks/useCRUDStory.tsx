import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useUpdateStory } from "./useUpdateStory";

export interface StoryPayload {
  title: string;
  author: string;
  image?: string;
  description?: string;
  createdAt?: string;
  [key: string]: any;
}

export interface StoryItem extends StoryPayload {
  id: number;
}

export const useCRUDStory = () => {
  const queryClient = useQueryClient();

  const list = useQuery<StoryItem[]>({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get<StoryItem[]>("http://localhost:3000/stories");
      return res.data;
    },
  });

  const add = useMutation({
    mutationFn: async (data: StoryPayload) => {
      const res = await axios.post<StoryItem>("http://localhost:3000/stories", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });

  const remove = useMutation({
    mutationFn: async (id: number) => {
      await axios.delete(`http://localhost:3000/stories/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });

  const updateStory = useUpdateStory();

  return {
    list,
    add: add.mutate,
    remove: remove.mutate,
    update: updateStory.mutate,
    addStatus: add,
    removeStatus: remove,
    updateStatus: updateStory,
  };
};

export default useCRUDStory;
