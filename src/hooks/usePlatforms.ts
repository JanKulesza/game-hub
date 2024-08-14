import platforms from "../data/platforms";
import { Platform } from "./useGames";

const usePlatforms = () => ({
  data: <Platform[]>platforms,
  isLoading: false,
  error: null,
});

export default usePlatforms;
