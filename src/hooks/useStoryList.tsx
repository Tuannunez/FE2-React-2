import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useStoryList() {
  return useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });
}

export default useStoryList;