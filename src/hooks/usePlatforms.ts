import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { Platform } from "./useGames";
import apiClient from "../services/api-client";
import { FetchRes } from "../services/api-client";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient.get<FetchRes<Platform>>("/platforms").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
